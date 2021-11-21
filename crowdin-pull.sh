#!/bin/bash

# Add new languages here, space separated and using the ID for `crowdin pull`
# `lol` (LOLCAT) is In-Context
LANGUAGES="es-ES fr hu it pl zh-CN lol"

# Delete old translations (incase a page was removed/renamed)
rm -rf docs/*_*/

# Download new translations
for LANGUAGE in $LANGUAGES; do
	echo $LANGUAGE
	crowdin pull -l $LANGUAGE
doneit
