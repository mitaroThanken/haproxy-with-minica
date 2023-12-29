# Prebuild dev container images

cf. <https://containers.dev/guide/prebuild>

1. Open this dir in dev container.

1. Define custom dev containers.

    See [typescript-node-with-java](./typescript-node-with-java/).

1. Update [`prebuild.sh`](./prebuild.sh).

    See [prebuild.sh](./prebuild.sh).

1. Run [`prebuild.sh`](./prebuild.sh).

    ```shell
    vscode ➜ /workspaces/haproxy-with-minica/devcontainers-image-prebuild (feature/renew-devcontainers) $ ./prebuild.sh 
    [6 ms] @devcontainers/cli 0.55.0. Node.js v20.10.0. linux 6.5.0-14-generic x64.
    [4774 ms] Resolving Feature dependencies for 'ghcr.io/devcontainers/features/java:1'...
    [6251 ms] Soft-dependency 'ghcr.io/devcontainers/features/common-utils' is not required.  Removing from installation order...
    [7023 ms] Start: Run: docker buildx build --load --build-context dev_containers_feature_content_source=/tmp/devcontainercli-vscode/container-features/0.55.0-1703826250818 --build-arg _DEV_CONTAINERS_BASE_IMAGE=mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye --build-arg _DEV_CONTAINERS_IMAGE_USER=root --build-arg _DEV_CONTAINERS_FEATURE_CONTENT_SOURCE=dev_container_feature_content_temp --target dev_containers_target_stage -t vsc-typescript-node-with-java-3b94d8b9bea2b727d9e0cb009507037f1983e90c351ecb45093fff9b8654a294-features -f /tmp/devcontainercli-vscode/container-features/0.55.0-1703826250818/Dockerfile.extended /tmp/devcontainercli-vscode/empty-folder
    [+] Building 2.7s (15/15) FINISHED                                                              docker:default
    => [internal] load build definition from Dockerfile.extended                                             0.0s
    => => transferring dockerfile: 2.65kB                                                                    0.0s
    => [internal] load .dockerignore                                                                         0.0s
    => => transferring context: 2B                                                                           0.0s
    => resolve image config for docker.io/docker/dockerfile:1.4                                              1.9s
    => CACHED docker-image://docker.io/docker/dockerfile:1.4@sha256:9ba7531bd80fb0a858632727cf7a112fbfd19b1  0.0s
    => [internal] load metadata for mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye            0.5s
    => [context dev_containers_feature_content_source] load .dockerignore                                    0.0s
    => => transferring dev_containers_feature_content_source: 2B                                             0.0s
    => [context dev_containers_feature_content_source] load from client                                      0.0s
    => => transferring dev_containers_feature_content_source: 268.74kB                                       0.0s
    => [dev_containers_feature_content_normalize 1/3] FROM mcr.microsoft.com/devcontainers/typescript-node:  0.0s
    => CACHED [dev_containers_target_stage 2/5] RUN mkdir -p /tmp/dev-container-features                     0.0s
    => CACHED [dev_containers_feature_content_normalize 2/3] COPY --from=dev_containers_feature_content_sou  0.0s
    => CACHED [dev_containers_feature_content_normalize 3/3] RUN chmod -R 0755 /tmp/build-features/          0.0s
    => CACHED [dev_containers_target_stage 3/5] COPY --from=dev_containers_feature_content_normalize /tmp/b  0.0s
    => CACHED [dev_containers_target_stage 4/5] RUN echo "_CONTAINER_USER_HOME=$( (command -v getent >/dev/  0.0s
    => CACHED [dev_containers_target_stage 5/5] RUN --mount=type=bind,from=dev_containers_feature_content_s  0.0s
    => exporting to image                                                                                    0.0s
    => => exporting layers                                                                                   0.0s
    => => writing image sha256:d0631f731fbaf8a0cad9ef4f5010cc1ac1f4b7fff8635ccf7913f82712506204              0.0s
    => => naming to docker.io/library/vsc-typescript-node-with-java-3b94d8b9bea2b727d9e0cb009507037f1983e90  0.0s
    {"outcome":"success","imageName":["haproxy-with-minica/typescript-node-with-java:20231229-0504"]}
    ```

1. Test built images.

    Temporarily change [../compose.yml](../compose.yml) to use the created images and try to use them.

1. Tag latest tag to built images.

    example:

    ```shell
    docker tag haproxy-with-minica/typescript-node-with-java:20231229-0504 haproxy-with-minica/typescript-node-with-java:latest
    ```

1. Revert temporary compose.yml change.
