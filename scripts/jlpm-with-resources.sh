#!/bin/bash

set -eux

# Copy resources
cp src/images/*.svg rdm_binderhub_jlabextension/nbextension/

# Pop PYTHONPATH variable
CURRENT_PYTHONPATH=${PYTHONPATH}
export PYTHONPATH=${DEFAULT_PYTHONPATH:-}

# Build language resources
pip install jupyterlab-translate
jupyterlab-translate compile . rdm_binderhub_jlabextension -l ja_JP

export PYTHONPATH=${CURRENT_PYTHONPATH}

# Build
jlpm "$@"