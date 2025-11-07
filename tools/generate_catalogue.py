#!/usr/bin/env python3
"""
Generate browsable HTML catalogue for ScriptOs
Reads index.json and generates catalogue/index.html
"""

import json
import os
import shutil
from pathlib import Path
from urllib.parse import quote

def load_index(index_file='index.json'):
    """Load index.json"""
    with open(index_file, 'r', encoding='utf-8') as f:
        return json.load(f)

def get_all_tags(scriptos):
    """Get all unique tags from ScriptOs"""
    tags = set()
    for scripto in scriptos:
        tags.update(scripto.get('tags', []))
    return sorted(tags)

def generate_html_catalogue(index, output_dir='catalogue', scriptos_dir='ScriptOs'):
    """Generate HTML catalogue"""
    scriptos = index.get('scriptos', [])
    all_tags = get_all_tags(scriptos)
    
    # Create output directory
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    scriptos_output = output_path / 'scriptos'
    scriptos_output.mkdir(exist_ok=True)
    
    # Copy ScriptO files to catalogue/scriptos/
    scriptos_source = Path(scriptos_dir)
    if scriptos_source.exists():
        for scripto in scriptos:
            filename = scripto['filename']
            source_file = scriptos_source / filename
            if source_file.exists():
                shutil.copy2(source_file, scriptos_output / filename)
                print(f"  Copied {filename}")
    
    # Generate HTML
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScriptOs Registry - Browse & Install</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: #f5f5f5;
            color: #1f1f1f;
            line-height: 1.6;
        }}
        
        .header {{
            background: linear-gradient(135deg, #008184 0%, #00a5a8 100%);
            color: white;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }}
        
        .header h1 {{
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }}
        
        .header p {{
            opacity: 0.9;
            font-size: 1.1rem;
        }}
        
        .container {{
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }}
        
        .controls {{
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }}
        
        .search-box {{
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
        }}
        
        .search-input {{
            flex: 1;
            padding: 0.75rem;
            border: 2px solid #e0e0e0;
            border-radius: 6px;
            font-size: 1rem;
        }}
        
        .search-input:focus {{
            outline: none;
            border-color: #008184;
        }}
        
        .tag-filters {{
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }}
        
        .tag-filter {{
            padding: 0.5rem 1rem;
            background: #f0f0f0;
            border: 2px solid #e0e0e0;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.2s;
        }}
        
        .tag-filter:hover {{
            background: #e0e0e0;
        }}
        
        .tag-filter.active {{
            background: #008184;
            color: white;
            border-color: #008184;
        }}
        
        .stats {{
            margin-top: 1rem;
            color: #666;
            font-size: 0.9rem;
        }}
        
        .scriptos-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }}
        
        .scripto-card {{
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
        }}
        
        .scripto-card:hover {{
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }}
        
        .scripto-card h3 {{
            color: #008184;
            margin-bottom: 0.5rem;
            font-size: 1.3rem;
        }}
        
        .scripto-meta {{
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }}
        
        .scripto-description {{
            margin: 1rem 0;
            color: #444;
            line-height: 1.5;
        }}
        
        .scripto-tags {{
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 1rem 0;
        }}
        
        .scripto-tag {{
            padding: 0.25rem 0.75rem;
            background: #e8f4f5;
            color: #008184;
            border-radius: 12px;
            font-size: 0.85rem;
        }}
        
        .scripto-actions {{
            display: flex;
            gap: 0.5rem;
            margin-top: 1rem;
        }}
        
        .btn {{
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 6px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
            display: inline-block;
        }}
        
        .btn-primary {{
            background: #008184;
            color: white;
        }}
        
        .btn-primary:hover {{
            background: #006668;
        }}
        
        .btn-secondary {{
            background: #f0f0f0;
            color: #333;
        }}
        
        .btn-secondary:hover {{
            background: #e0e0e0;
        }}
        
        .no-results {{
            text-align: center;
            padding: 3rem;
            color: #666;
        }}
        
        .no-results h2 {{
            margin-bottom: 1rem;
            color: #333;
        }}
        
        .footer {{
            text-align: center;
            padding: 2rem;
            color: #666;
            margin-top: 3rem;
        }}
    </style>
</head>
<body>
    <div class="header">
        <h1>📦 ScriptOs Registry</h1>
        <p>Browse and install ScriptOs for MicroPython</p>
    </div>
    
    <div class="container">
        <div class="controls">
            <div class="search-box">
                <input type="text" id="search-input" class="search-input" placeholder="Search ScriptOs by name, description, or tags...">
            </div>
            <div class="tag-filters" id="tag-filters">
                <div class="tag-filter" data-tag="all">All</div>
{chr(10).join(f'                <div class="tag-filter" data-tag="{tag}">{tag}</div>' for tag in all_tags)}
            </div>
            <div class="stats" id="stats">
                Showing <span id="count">{len(scriptos)}</span> of {len(scriptos)} ScriptOs
            </div>
        </div>
        
        <div class="scriptos-grid" id="scriptos-grid">
{chr(10).join(generate_scripto_card(scripto) for scripto in scriptos)}
        </div>
    </div>
    
    <div class="footer">
        <p>Last updated: <span id="updated">{format_timestamp(index.get('updated', 0))}</span></p>
        <p><a href="https://github.com" style="color: #008184;">View on GitHub</a></p>
    </div>
    
    <script>
        const scriptos = {json.dumps(scriptos)};
        const allTags = {json.dumps(all_tags)};
        
        const searchInput = document.getElementById('search-input');
        const tagFilters = document.querySelectorAll('.tag-filter');
        const scriptosGrid = document.getElementById('scriptos-grid');
        const statsCount = document.getElementById('count');
        
        let activeTag = 'all';
        let searchQuery = '';
        
        function formatVersion(version) {{
            if (Array.isArray(version)) {{
                return version.join('.');
            }}
            return version || '1.0.0';
        }}
        
        function matchesSearch(scripto, query) {{
            if (!query) return true;
            const q = query.toLowerCase();
            return (
                scripto.name.toLowerCase().includes(q) ||
                scripto.description.toLowerCase().includes(q) ||
                scripto.author.toLowerCase().includes(q) ||
                scripto.tags.some(tag => tag.toLowerCase().includes(q))
            );
        }}
        
        function matchesTag(scripto, tag) {{
            if (tag === 'all') return true;
            return scripto.tags.includes(tag);
        }}
        
        function filterScriptos() {{
            const filtered = scriptos.filter(s => 
                matchesSearch(s, searchQuery) && matchesTag(s, activeTag)
            );
            
            scriptosGrid.innerHTML = filtered.length > 0
                ? filtered.map(s => generateCardHTML(s)).join('')
                : '<div class="no-results"><h2>No ScriptOs found</h2><p>Try adjusting your search or filters</p></div>';
            
            statsCount.textContent = filtered.length;
        }}
        
        function generateCardHTML(scripto) {{
            const tags = scripto.tags.map(t => `<span class="scripto-tag">${{t}}</span>`).join('');
            const version = formatVersion(scripto.version);
            const installUrl = `?install=${{encodeURIComponent(scripto.url)}}`;
            const docsLink = scripto.docs ? `<a href="${{scripto.docs}}" target="_blank" class="btn btn-secondary">Docs</a>` : '';
            
            return `
                <div class="scripto-card">
                    <h3>${{scripto.name}}</h3>
                    <div class="scripto-meta">
                        by ${{scripto.author || 'Unknown'}} • v${{version}}
                    </div>
                    <div class="scripto-description">${{scripto.description}}</div>
                    <div class="scripto-tags">${{tags}}</div>
                    <div class="scripto-actions">
                        <a href="${{installUrl}}" class="btn btn-primary">Install</a>
                        ${{docsLink}}
                    </div>
                </div>
            `;
        }}
        
        searchInput.addEventListener('input', (e) => {{
            searchQuery = e.target.value;
            filterScriptos();
        }});
        
        tagFilters.forEach(filter => {{
            filter.addEventListener('click', () => {{
                tagFilters.forEach(f => f.classList.remove('active'));
                filter.classList.add('active');
                activeTag = filter.dataset.tag;
                filterScriptos();
            }});
        }});
        
        // Set "All" as active by default
        document.querySelector('[data-tag="all"]').classList.add('active');
    </script>
</body>
</html>
"""
    
    # Write HTML file
    html_file = output_path / 'index.html'
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"✓ Generated {html_file}")
    return True

def generate_scripto_card(scripto):
    """Generate HTML for a single ScriptO card"""
    tags_html = ''.join(f'<span class="scripto-tag">{tag}</span>' for tag in scripto.get('tags', []))
    version = '.'.join(map(str, scripto.get('version', [1, 0, 0])))
    author = scripto.get('author', 'Unknown')
    description = scripto.get('description', '')
    docs = scripto.get('docs', '')
    url = scripto.get('url', '')
    install_url = f"?install={quote(url)}"
    
    docs_link = f'<a href="{docs}" target="_blank" class="btn btn-secondary">Docs</a>' if docs else ''
    
    return f"""            <div class="scripto-card">
                <h3>{scripto['name']}</h3>
                <div class="scripto-meta">by {author} • v{version}</div>
                <div class="scripto-description">{description}</div>
                <div class="scripto-tags">{tags_html}</div>
                <div class="scripto-actions">
                    <a href="{install_url}" class="btn btn-primary">Install</a>
                    {docs_link}
                </div>
            </div>"""

def format_timestamp(timestamp):
    """Format Unix timestamp to readable date"""
    from datetime import datetime
    if timestamp:
        dt = datetime.fromtimestamp(timestamp)
        return dt.strftime('%Y-%m-%d %H:%M:%S UTC')
    return 'Unknown'

def main():
    import argparse
    
    parser = argparse.ArgumentParser(description='Generate ScriptOs HTML catalogue')
    parser.add_argument('--index', default='index.json', help='Input index.json file')
    parser.add_argument('--output', default='catalogue', help='Output directory')
    parser.add_argument('--scriptos-dir', default='ScriptOs', help='ScriptOs source directory')
    
    args = parser.parse_args()
    
    # Load index
    print(f"Loading {args.index}...")
    index = load_index(args.index)
    
    # Generate catalogue
    print(f"Generating catalogue in {args.output}...")
    generate_html_catalogue(index, args.output, args.scriptos_dir)
    
    print(f"\n✓ Catalogue generated successfully!")

if __name__ == '__main__':
    main()

