# ScriptO Registry

A browsable registry of ScriptOs for MicroPython, automatically built and published to GitHub Pages.

## Structure

- `ScriptOs/` - Source ScriptO files (`.py` files with config blocks)
- `tools/build_index.py` - Build script that generates `index.json`
- `tools/generate_catalogue.py` - Generates browsable HTML catalogue
- `.github/workflows/build_and_publish.yml` - GitHub Actions workflow

## Usage

### Building Locally

```bash
# Generate index.json
python3 tools/build_index.py \
  --scriptos-dir ScriptOs \
  --output index.json \
  --repo-url https://github.com/USERNAME/REPO \
  --branch main

# Generate HTML catalogue
python3 tools/generate_catalogue.py \
  --index index.json \
  --output catalogue \
  --scriptos-dir ScriptOs
```

### Installing ScriptOs

Once published, ScriptOs can be installed via URL:

```
?install=github:USERNAME/REPO/ScriptOs/Name.py
```

Or browse the catalogue at:
```
https://USERNAME.github.io/REPO/catalogue/
```

## Index Format

The `index.json` file contains:

```json
{
  "v": 1,
  "updated": 1234567890,
  "scriptos": [
    {
      "name": "ScriptO Name",
      "filename": "ScriptO.py",
      "version": [1, 0, 0],
      "author": "Author Name",
      "description": "Description",
      "tags": ["tag1", "tag2"],
      "license": "MIT",
      "docs": "https://...",
      "url": "https://raw.githubusercontent.com/..."
    }
  ]
}
```

## Adding ScriptOs

1. Add your `.py` file to the `ScriptOs/` directory
2. Ensure it has a config block between `# === START_CONFIG_PARAMETERS ===` and `# === END_CONFIG_PARAMETERS ===`
3. Push to GitHub - the workflow will automatically build and publish

## GitHub Pages

The registry is automatically published to the `gh-pages` branch on every push. Enable GitHub Pages in repository settings to make it accessible.

