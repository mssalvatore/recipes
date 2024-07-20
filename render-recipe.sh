#!/bin/bash


# TODO: Run shellcheck
# TODO: Use the script dir instead of ./ for javascript and css
pandoc \
    --standalone \
    --css=static/recipe.css \
    --css=static/print.css \
    --include-after-body=static/recipe.js \
    --mathjax=https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js \
    --section-divs \
    --from=markdown \
    --to=html "recipes/$1.md"> "html-renders/$1.html"
