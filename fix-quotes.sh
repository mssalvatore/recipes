#!/bin/bash
#
# A utility for replacing non-ASCII quotes with ASCII quotes.

find recipes/ -type f -name '*.md' -exec sed -E -i "s/’/'/g" {} \;
find recipes/ -type f -name '*.md' -exec sed -E -i "s/‘/'/g" {} \;
find recipes/ -type f -name '*.md' -exec sed -E -i 's/”/"/g' {} \;
find recipes/ -type f -name '*.md' -exec sed -E -i 's/“/"/g' {} \;
