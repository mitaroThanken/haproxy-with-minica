#!/bin/bash
devcontainer build --workspace-folder typescript-node-with-java/ --image-name haproxy-with-minica/typescript-node-with-java:"$(date +%Y%m%d-%H%M)"
