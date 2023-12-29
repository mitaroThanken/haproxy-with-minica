```shell
vscode ➜ /workspaces/haproxy-with-minica/devcontainers-image-prebuild (feature/renew-devcontainers) $ devcontainer build --workspace-folder typescript-node-with-java/ --image-name haproxy-with-minica/typescript-node-with-java:20231229-1343
[7 ms] @devcontainers/cli 0.55.0. Node.js v20.10.0. linux 6.5.0-14-generic x64.
[6077 ms] Resolving Feature dependencies for 'ghcr.io/devcontainers/features/java:1'...
[7641 ms] Soft-dependency 'ghcr.io/devcontainers/features/common-utils' is not required.  Removing from installation order...
[8654 ms] Start: Run: docker buildx build --load --build-context dev_containers_feature_content_source=/tmp/devcontainercli-vscode/container-features/0.55.0-1703825001478 --build-arg _DEV_CONTAINERS_BASE_IMAGE=mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye --build-arg _DEV_CONTAINERS_IMAGE_USER=root --build-arg _DEV_CONTAINERS_FEATURE_CONTENT_SOURCE=dev_container_feature_content_temp --target dev_containers_target_stage -t vsc-typescript-node-with-java-3b94d8b9bea2b727d9e0cb009507037f1983e90c351ecb45093fff9b8654a294-features -f /tmp/devcontainercli-vscode/container-features/0.55.0-1703825001478/Dockerfile.extended /tmp/devcontainercli-vscode/empty-folder
[+] Building 67.1s (15/15) FINISHED                                                                                                                                         docker:default
 => [internal] load .dockerignore                                                                                                                                                     0.0s
 => => transferring context: 2B                                                                                                                                                       0.0s
 => [internal] load build definition from Dockerfile.extended                                                                                                                         0.0s
 => => transferring dockerfile: 2.65kB                                                                                                                                                0.0s
 => resolve image config for docker.io/docker/dockerfile:1.4                                                                                                                          2.1s
 => CACHED docker-image://docker.io/docker/dockerfile:1.4@sha256:9ba7531bd80fb0a858632727cf7a112fbfd19b17e94c4e84ced81e24ef1a0dbc                                                     0.0s
 => [internal] load metadata for mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye                                                                                        1.1s
 => [context dev_containers_feature_content_source] load .dockerignore                                                                                                                0.0s
 => => transferring dev_containers_feature_content_source: 2B                                                                                                                         0.0s
 => [context dev_containers_feature_content_source] load from client                                                                                                                  0.0s
 => => transferring dev_containers_feature_content_source: 526.32kB                                                                                                                   0.0s
 => [dev_containers_feature_content_normalize 1/3] FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye@sha256:6c9b6307dac13df40d7d27405f31660c7b14f65ecd1c57fd0c493f  25.2s
 => => resolve mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye@sha256:6c9b6307dac13df40d7d27405f31660c7b14f65ecd1c57fd0c493fdf48f5e1f4                                  0.0s
 => => sha256:5f613cf603b254854ccebef25fa945cc65abfdf8e4c63f17fedfbb5963cc6cb6 22.84kB / 22.84kB                                                                                      0.0s
 => => sha256:ea2a9dfb8aae8dab2c7f0463881c06b387546002025b6bc9279e468c5c1fa93a 4.20kB / 4.20kB                                                                                        0.7s
 => => sha256:14265df87935e5c17017c801ae8da7d1e73b9e56c5bad590aa8b6eb8b418cc88 4.68kB / 4.68kB                                                                                        0.0s
 => => sha256:beefab36cbfedf8896b5f9f0bc33336fa13c0f01a8cb2333128dd247895a5f3b 196.88MB / 196.88MB                                                                                   15.1s
 => => sha256:6c9b6307dac13df40d7d27405f31660c7b14f65ecd1c57fd0c493fdf48f5e1f4 1.61kB / 1.61kB                                                                                        0.0s
 => => sha256:c7b1e60e9d5a0f16eb1f998245666f7a64a44f8b1f2317bd31e8a658150c23d3 54.60MB / 54.60MB                                                                                      4.0s
 => => sha256:f2726f1819ba625661f62225318c04ab8d4cffeab7daf6d953aec264d37e6dca 47.93MB / 47.93MB                                                                                      6.5s
 => => extracting sha256:c7b1e60e9d5a0f16eb1f998245666f7a64a44f8b1f2317bd31e8a658150c23d3                                                                                             1.2s
 => => sha256:0467cf59a39d0458dfc2d0a28085a8d032bb91bc162db2a789d0b2fc2b6a1a53 2.21MB / 2.21MB                                                                                        4.4s
 => => sha256:603301d673bd50cb291cdb2552f835580c5b3e9172fe4ed5cddb6361436794d2 452B / 452B                                                                                            4.7s
 => => sha256:54ea3ee3e2e1462f68532d0619bd5a1acd6b5572e96b9b4893b506b71f2e289b 5.74MB / 5.74MB                                                                                        5.4s
 => => sha256:dc1ae8adfbef94f5ba1d61b87fc78f061d63873ea93e5145700b14e50a018414 6.08MB / 6.08MB                                                                                        6.2s
 => => sha256:c27b404631f54d7dfc4e5683eafb922e060d53a763ce8b331c4f668119e8d8c0 416B / 416B                                                                                            6.5s
 => => sha256:284e4a0948f141e4a30af4e950a47d61aacf7c4029fc1dce13b59f3e653b5ce0 135B / 135B                                                                                            6.7s
 => => sha256:d9c23ac9acaae7947afc409be8d5fe890156662f3f9660b472349359d3b4f7dd 223B / 223B                                                                                            7.0s
 => => sha256:f18529b1776386b793f1998d6631af7ac9e6169fd359cc512d3cfdeba684f5c8 238B / 238B                                                                                            7.0s
 => => sha256:40dae3dcc3fb5ddbb6eb71d487568e19fc993c6b96c37a4ba44b417354adc0fb 63.72MB / 63.72MB                                                                                     15.7s
 => => sha256:0e8afc6eb63e669d3711770dae2e49e9819802798c8740ffae4e8e71e1e5a663 44.63MB / 44.63MB                                                                                     11.6s
 => => sha256:462d977999f50d9752c5801201c75b3f299e605d2cc1a0b8ab571b218a3ad906 9.09MB / 9.09MB                                                                                       12.8s
 => => sha256:1617c50fc414bc2502dbc7fcf62ac9112a4cd93de8e02ee7998f722e625277f7 43.85MB / 43.85MB                                                                                     16.0s
 => => sha256:13d36960ff69234f2eb77878aecc15ab583cab675563d7a9f36232aae4352b44 425B / 425B                                                                                           15.4s
 => => extracting sha256:beefab36cbfedf8896b5f9f0bc33336fa13c0f01a8cb2333128dd247895a5f3b                                                                                             3.1s
 => => sha256:4f4fb700ef54461cfa02571ae0db9a0dc1e0cdb5577484a6d75e68dc38e8acc1 32B / 32B                                                                                             15.6s
 => => sha256:57020135db2b4d0fb867f6e8f7f00b8832dd80d510454b0d42324d6d765e6da8 227B / 227B                                                                                           16.0s
 => => sha256:445dfdea4403d5d622b539b99b52a06041ec4e0e5e3f8e66633977f06f0c4d02 244B / 244B                                                                                           16.0s
 => => sha256:64732254aa300b837cc085cb69c2f3568e93abb51dd8818fded69bd0d150ecfd 60.85MB / 60.85MB                                                                                     18.4s
 => => extracting sha256:ea2a9dfb8aae8dab2c7f0463881c06b387546002025b6bc9279e468c5c1fa93a                                                                                             0.0s
 => => extracting sha256:f2726f1819ba625661f62225318c04ab8d4cffeab7daf6d953aec264d37e6dca                                                                                             1.0s
 => => extracting sha256:0467cf59a39d0458dfc2d0a28085a8d032bb91bc162db2a789d0b2fc2b6a1a53                                                                                             0.0s
 => => extracting sha256:603301d673bd50cb291cdb2552f835580c5b3e9172fe4ed5cddb6361436794d2                                                                                             0.0s
 => => extracting sha256:54ea3ee3e2e1462f68532d0619bd5a1acd6b5572e96b9b4893b506b71f2e289b                                                                                             0.3s
 => => extracting sha256:dc1ae8adfbef94f5ba1d61b87fc78f061d63873ea93e5145700b14e50a018414                                                                                             0.4s
 => => extracting sha256:c27b404631f54d7dfc4e5683eafb922e060d53a763ce8b331c4f668119e8d8c0                                                                                             0.0s
 => => extracting sha256:284e4a0948f141e4a30af4e950a47d61aacf7c4029fc1dce13b59f3e653b5ce0                                                                                             0.0s
 => => extracting sha256:d9c23ac9acaae7947afc409be8d5fe890156662f3f9660b472349359d3b4f7dd                                                                                             0.0s
 => => extracting sha256:f18529b1776386b793f1998d6631af7ac9e6169fd359cc512d3cfdeba684f5c8                                                                                             0.0s
 => => extracting sha256:0e8afc6eb63e669d3711770dae2e49e9819802798c8740ffae4e8e71e1e5a663                                                                                             1.3s
 => => extracting sha256:40dae3dcc3fb5ddbb6eb71d487568e19fc993c6b96c37a4ba44b417354adc0fb                                                                                             0.7s
 => => extracting sha256:462d977999f50d9752c5801201c75b3f299e605d2cc1a0b8ab571b218a3ad906                                                                                             0.2s
 => => extracting sha256:1617c50fc414bc2502dbc7fcf62ac9112a4cd93de8e02ee7998f722e625277f7                                                                                             1.2s
 => => extracting sha256:13d36960ff69234f2eb77878aecc15ab583cab675563d7a9f36232aae4352b44                                                                                             0.0s
 => => extracting sha256:4f4fb700ef54461cfa02571ae0db9a0dc1e0cdb5577484a6d75e68dc38e8acc1                                                                                             0.0s
 => => extracting sha256:57020135db2b4d0fb867f6e8f7f00b8832dd80d510454b0d42324d6d765e6da8                                                                                             0.0s
 => => extracting sha256:445dfdea4403d5d622b539b99b52a06041ec4e0e5e3f8e66633977f06f0c4d02                                                                                             0.0s
 => => extracting sha256:64732254aa300b837cc085cb69c2f3568e93abb51dd8818fded69bd0d150ecfd                                                                                             0.6s
 => [dev_containers_target_stage 2/5] RUN mkdir -p /tmp/dev-container-features                                                                                                        0.8s
 => [dev_containers_feature_content_normalize 2/3] COPY --from=dev_containers_feature_content_source devcontainer-features.builtin.env /tmp/build-features/                           0.8s
 => [dev_containers_feature_content_normalize 3/3] RUN chmod -R 0755 /tmp/build-features/                                                                                             0.3s
 => [dev_containers_target_stage 3/5] COPY --from=dev_containers_feature_content_normalize /tmp/build-features/ /tmp/dev-container-features                                           0.1s
 => [dev_containers_target_stage 4/5] RUN echo "_CONTAINER_USER_HOME=$( (command -v getent >/dev/null 2>&1 && getent passwd 'root' || grep -E '^root|^[^:]*:[^:]*:root:' /etc/passwd  0.4s
 => [dev_containers_target_stage 5/5] RUN --mount=type=bind,from=dev_containers_feature_content_source,source=java_0,target=/tmp/build-features-src/java_0     cp -ar /tmp/build-fe  35.8s
 => exporting to image                                                                                                                                                                1.0s 
 => => exporting layers                                                                                                                                                               1.0s 
 => => writing image sha256:d0631f731fbaf8a0cad9ef4f5010cc1ac1f4b7fff8635ccf7913f82712506204                                                                                          0.0s 
 => => naming to docker.io/library/vsc-typescript-node-with-java-3b94d8b9bea2b727d9e0cb009507037f1983e90c351ecb45093fff9b8654a294-features                                            0.0s 
{"outcome":"success","imageName":["haproxy-with-minica/typescript-node-with-java:20231229-1343"]}
```