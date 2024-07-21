#!/bin/bash
#
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

pandoc \
    --standalone \
    --css=static/recipe.css \
    --css=static/print.css \
    --include-after-body="$SCRIPT_DIR/include-js.txt" \
    --mathjax=https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js \
    --section-divs \
    --from=markdown \
    --to=html "recipes/$1.md"> "html-renders/$1.html"
