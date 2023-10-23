"""
extract_headers.py - Markdown Header Extractor

This Python script extracts headers of a specified level from a Markdown file.

Usage: python extract_headers.py <markdown_file> <header_level>

Arguments:
    <markdown_file>   : The path to the Markdown file from which headers will be extracted.
    <header_level>    : The level of headers to extract (e.g., 1 for H1, 2 for H2, etc.).

Example usage:
    python extract_headers.py sample.md 3

Description:
    This script allows you to specify a Markdown file and a header level as command-line arguments.
    It will then read the content of the Markdown file, extract headers of the specified level, and print them to the console.

Exception Handling:
    - Checks if the provided file path exists and is valid.
    - Ensures that <header_level> is a valid integer.
    - Handles various exceptions, including FileNotFoundError, ValueError, and unexpected errors.

Notes:
    - The script uses regular expressions to match headers of the specified level.
    - Make sure to replace 'sample.md' with the actual path to your Markdown file.
    - Adjust <header_level> according to the desired header level (e.g., 1 for H1, 2 for H2).

Author:
    DaCodeKid

Date:
    2021-08-28

"""

import os
import re
import sys


def extract_headers(markdown_file, header_level):
    try:
        # Check if the Markdown file exists
        if not os.path.isfile(markdown_file):
            raise FileNotFoundError(f"File '{markdown_file}' not found.")

        # Read the Markdown file
        with open(markdown_file, "r", encoding="utf-8") as file:
            markdown_content = file.read()

        # Use regular expressions to find headers of the specified level
        header_pattern = rf'^{"#" * int(header_level)}\s+(.+)'
        headers = re.findall(header_pattern, markdown_content, flags=re.MULTILINE)

        # Print the extracted headers
        for header in headers:
            print(header)
    except FileNotFoundError as e:
        print(f"Error: {e}")
    except ValueError:
        print("Error: 'header_level' must be a valid integer.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python extract_headers.py <markdown_file> <header_level>")
        sys.exit(1)

    markdown_file = sys.argv[1]
    header_level = sys.argv[2]

    extract_headers(markdown_file, header_level)
