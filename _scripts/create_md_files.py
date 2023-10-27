"""
create_md_files.py

This script performs the following tasks:
1. Accepts a folder path and a text file path as Command Line Interface (CLI) arguments.
2. Reads the text file, which is assumed to contain a list of names, one name per line.
3. Converts each name into kebab-case.
4. Creates a Markdown (.md) file named after the kebab-case name in the specified folder.
5. Skips the creation of the file if it already exists in the target folder.

Usage:
    python create_md_files.py /path/to/folder /path/to/textfile.txt

Requirements:
    - Python 3.x
    - Text file with list of names

"""

import argparse
import os
import re


# Function to convert string to kebab-case
def to_kebab_case(s):
    s = s.lower()
    s = re.sub(
        r"[^\w\s-]", "", s
    )  # Remove all non-word, non-space, non-hyphen characters
    s = re.sub(r"\s+", "-", s)  # Replace multiple spaces with single hyphen
    s = re.sub(r"^-+", "", s)  # Remove starting hyphens
    s = re.sub(r"-+$", "", s)  # Remove trailing hyphens
    return s


# Parse command line arguments
parser = argparse.ArgumentParser(description="Generate Markdown files.")
parser.add_argument("folder", help="The folder where Markdown files will be created.")
parser.add_argument("textfile", help="The text file that contains the list of names.")
args = parser.parse_args()

# Check if folder exists, if not create one
if not os.path.exists(args.folder):
    os.makedirs(args.folder)

# Read names from text file and create .md files
try:
    with open(args.textfile, "r") as f:
        lines = f.readlines()
        for line in lines:
            name = line.strip()
            kebab_name = to_kebab_case(name)
            md_file_path = os.path.join(args.folder, f"{kebab_name}.md")

            # Skip if file already exists
            if os.path.exists(md_file_path):
                continue

            # Create the markdown file
            with open(md_file_path, "w") as md_file:
                md_file.write("---\n")
                md_file.write("prev: false\n")
                md_file.write("next: false\n")
                md_file.write("---\n")
                # md_file.write(f"# {name}\n") # Uncomment this line to add a heading

except FileNotFoundError:
    print(f"File {args.textfile} not found.")
except PermissionError:
    print(
        f"Permission denied when attempting to access {args.textfile} or {args.folder}."
    )
except Exception as e:
    print(f"An unexpected error occurred: {e}")
