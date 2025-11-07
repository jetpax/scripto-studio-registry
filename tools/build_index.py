#!/usr/bin/env python3
"""
Build ScriptOs index.json
Scans ScriptOs directory, parses config blocks, and generates index.json
"""

import json
import os
import re
import time
import glob
from pathlib import Path
from urllib.parse import quote

# Configuration
SCRIPTOS_DIR = 'ScriptOs'
OUTPUT_FILE = 'index.json'
START_MARKER = '# === START_CONFIG_PARAMETERS ==='
END_MARKER = '# === END_CONFIG_PARAMETERS ==='

def parse_python_dict(content):
    """Parse Python dict syntax to Python dict object"""
    try:
        # Use eval with safe globals to parse the dict
        # This is safe because we control the input (ScriptOs files)
        safe_globals = {
            'dict': dict,
            'str': str,
            'int': int,
            'float': float,
            'bool': bool,
            'list': list,
            'None': None,
            'True': True,
            'False': False,
        }
        return eval(content, safe_globals, {})
    except Exception as e:
        print(f"Warning: Failed to parse dict: {e}")
        return None

def extract_config_block(file_content):
    """Extract config block from ScriptO file"""
    start_idx = file_content.find(START_MARKER)
    end_idx = file_content.find(END_MARKER)
    
    if start_idx == -1 or end_idx == -1:
        return None
    
    # Extract the dict(...) block
    config_block = file_content[start_idx + len(START_MARKER):end_idx].strip()
    
    # Find the dict(...) part
    dict_match = re.search(r'dict\s*\(', config_block)
    if not dict_match:
        return None
    
    # Find matching closing parenthesis - start from 'dict'
    start_pos = dict_match.start()  # Start from 'dict', not just '('
    depth = 0
    in_string = False
    string_char = None
    escaped = False
    in_triple_quote = False
    triple_quote_char = None
    
    i = start_pos
    while i < len(config_block):
        char = config_block[i]
        
        if escaped:
            escaped = False
            i += 1
            continue
        
        if char == '\\':
            escaped = True
            i += 1
            continue
        
        # Check for triple quotes (''' or """)
        if i + 2 < len(config_block):
            triple = config_block[i:i+3]
            if triple in ("'''", '"""'):
                if not in_triple_quote:
                    in_triple_quote = True
                    triple_quote_char = triple
                    i += 3  # Skip the triple quote
                    continue
                elif triple == triple_quote_char:
                    in_triple_quote = False
                    triple_quote_char = None
                    i += 3
                    continue
        
        if in_triple_quote:
            i += 1
            continue
        
        if not in_string and (char == '"' or char == "'"):
            in_string = True
            string_char = char
            i += 1
            continue
        
        if in_string and char == string_char:
            in_string = False
            string_char = None
            i += 1
            continue
        
        if not in_string and not in_triple_quote:
            if char == '(':
                depth += 1
            elif char == ')':
                depth -= 1
                if depth == 0:
                    # Include the full dict(...) call
                    dict_content = config_block[start_pos:i+1]
                    return dict_content
        
        i += 1
    
    return None

def parse_scripto_file(file_path, repo_url=None, branch='main'):
    """Parse a ScriptO file and extract metadata"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        config_block = extract_config_block(content)
        if not config_block:
            print(f"  ⚠ No config block found in {file_path.name}")
            return None
        
        config = parse_python_dict(config_block)
        if not config or 'info' not in config:
            print(f"  ⚠ Invalid config in {file_path.name}")
            return None
        
        info = config.get('info', {})
        filename = file_path.name
        
        # Extract metadata
        name = info.get('name', filename.replace('.py', ''))
        version = info.get('version', [1, 0, 0])
        author = info.get('author', '')
        description = info.get('description', '')
        category = info.get('category', '')
        www = info.get('www', '')
        
        # Convert category to tags (single-item list)
        tags = [category] if category else []
        
        # Generate URL
        if repo_url:
            # GitHub raw URL - always use ScriptOs/filename format
            # repo_url should already be raw.githubusercontent.com format
            if 'raw.githubusercontent.com' in repo_url:
                url = f"{repo_url}/{branch}/ScriptOs/{quote(filename)}"
            else:
                # Fallback for other formats
                url = f"{repo_url}/raw/{branch}/ScriptOs/{quote(filename)}"
        else:
            # Relative URL
            url = f"/ScriptOs/{quote(filename)}"
        
        # Build ScriptO entry
        scripto_entry = {
            "name": name,
            "filename": filename,
            "version": version,
            "author": author,
            "description": description,
            "tags": tags,
            "license": "MIT",  # Default, could be extracted from file header
            "docs": www if www else None,
            "url": url
        }
        
        # Remove None values
        scripto_entry = {k: v for k, v in scripto_entry.items() if v is not None}
        
        return scripto_entry
        
    except Exception as e:
        print(f"  ✗ Error parsing {file_path.name}: {e}")
        return None

def build_index(scriptos_dir=SCRIPTOS_DIR, output_file=OUTPUT_FILE, repo_url=None, branch='main'):
    """Build index.json from ScriptOs directory"""
    scriptos_path = Path(scriptos_dir)
    
    if not scriptos_path.exists():
        print(f"Error: ScriptOs directory not found: {scriptos_dir}")
        return False
    
    print(f"Scanning {scriptos_dir}...")
    
    # Find all .py files
    py_files = list(scriptos_path.glob('*.py'))
    
    if not py_files:
        print(f"No .py files found in {scriptos_dir}")
        return False
    
    print(f"Found {len(py_files)} ScriptO files")
    
    scriptos = []
    for py_file in sorted(py_files):
        print(f"Processing {py_file.name}...")
        entry = parse_scripto_file(py_file, repo_url, branch)
        if entry:
            scriptos.append(entry)
    
    # Build index
    index = {
        "v": 1,
        "updated": int(time.time()),
        "scriptos": scriptos
    }
    
    # Write index.json
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(index, f, indent=2, ensure_ascii=False)
    
    print(f"\n✓ Generated {output_file} with {len(scriptos)} ScriptOs")
    return True

def main():
    import argparse
    
    parser = argparse.ArgumentParser(description='Build ScriptOs index.json')
    parser.add_argument('--scriptos-dir', default=SCRIPTOS_DIR, help='ScriptOs directory')
    parser.add_argument('--output', default=OUTPUT_FILE, help='Output index.json file')
    parser.add_argument('--repo-url', help='GitHub repository URL (e.g., https://github.com/user/repo)')
    parser.add_argument('--branch', default='main', help='Git branch name')
    
    args = parser.parse_args()
    
    # Convert repo URL to raw.githubusercontent.com format if needed
    repo_url = args.repo_url
    if repo_url and 'github.com' in repo_url:
        # Convert https://github.com/user/repo to https://raw.githubusercontent.com/user/repo
        if 'raw.githubusercontent.com' not in repo_url:
            repo_url = repo_url.replace('github.com', 'raw.githubusercontent.com')
        # Remove any duplicate /raw/ in the path
        repo_url = repo_url.replace('/raw/raw/', '/raw/')
    
    success = build_index(args.scriptos_dir, args.output, repo_url, args.branch)
    exit(0 if success else 1)

if __name__ == '__main__':
    main()

