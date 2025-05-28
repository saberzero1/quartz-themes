
import re
import sys
from pathlib import Path

def find_remote_assets_in_css(root_dir):
    """
    Finds remote assets (http/https URLs) in CSS files.

    Args:
        root_dir (str): The root directory to search for theme.css files.

    Returns:
        dict: A dictionary where keys are file paths and values are lists
              of unique remote URLs found in that file.
    """
    results = {}
    # Regex to strip CSS block comments (/* ... */)
    comment_regex = re.compile(r"/\*.*?\*/", re.DOTALL)

    # Regexes to find remote URLs in common CSS declarations:
    # 1. url('http...'), url("http..."), url(http...)
    # 2. @import 'http...' or @import "http..."
    # 3. @import url('http...'), @import url("http..."), @import url(http...)
    # These patterns capture the URL itself.
    url_patterns = [
        re.compile(
            r"""url\(\s*['"]?\s*(https?://[^"')\s]+?)\s*['"]?\s*\)""",
            re.IGNORECASE,
        ),
        re.compile(
            r"""@import\s+['"]\s*(https?://[^;"'\s]+?)\s*['"]""",
            re.IGNORECASE,
        ),
        re.compile(
            r"""@import\s+url\(\s*['"]?\s*(https?://[^;"')\s]+?)\s*['"]?\s*\)""",
            re.IGNORECASE,
        ),
    ]

    for css_file_path in Path(root_dir).rglob("theme.css"):
        if css_file_path.is_file():
            try:
                with open(css_file_path, "r", encoding="utf-8") as f:
                    content = f.read()

                # Remove comments
                content_no_comments = comment_regex.sub("", content)

                found_urls_in_file = set()
                for line in content_no_comments.splitlines():
                    for pattern in url_patterns:
                        for match in pattern.finditer(line):
                            # Each pattern has one capturing group for the URL
                            url = match.group(1)
                            if url:
                                found_urls_in_file.add(url.strip())

                if found_urls_in_file:
                    results[str(css_file_path)] = sorted(
                        list(found_urls_in_file)
                    )
            except Exception as e:
                print(
                    f"Error processing file {css_file_path}: {e}",
                    file=sys.stderr,
                )
    return results

def print_results(asset_map):
    if not asset_map:
        print("No remote assets found in any theme.css files.")
        return

    for file_path, urls in asset_map.items():
        print(f"{file_path}:")
        for url in urls:
            print(f"  {url}")
        print()  # Blank line for readability

if __name__ == "__main__":
    # Replace '.' with the actual root directory if not running from the parent
    # of folder1, folder2, etc.
    # For example: search_directory = "/path/to/your/css/root"
    search_directory = "./obsidian"
    
    # You can get the directory from command line argument:
    # import sys
    # if len(sys.argv) > 1:
    #     search_directory = sys.argv[1]
    # else:
    #     print("Usage: python script_name.py <directory_to_search>")
    #     sys.exit(1)

    print(f"Searching for remote assets in *.theme.css files under '{search_directory}'...\n")
    assets = find_remote_assets_in_css(search_directory)
    print_results(assets)

