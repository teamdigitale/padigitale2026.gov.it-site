#!/bin/sh

set -euxo pipefail

# Skip redirect pages
find public -type f -name '*.html' -exec grep -L 'http-equiv="refresh"' {} \; | xargs yarn pa11y-ci
