FROM nginx:1.22

# Install Go
RUN rm -rf /usr/local/go \
    && curl -L -O https://go.dev/dl/go1.18.2.linux-amd64.tar.gz \
    && tar -C /usr/local -xzf go1.18.2.linux-amd64.tar.gz \
    && mkdir /go
ENV GOPATH /go
ENV PATH ${PATH}:/usr/local/go/bin:${GOPATH}/bin

# Install minica
RUN go install github.com/jsha/minica@v1.0.2

# Make certs
RUN mkdir -p /etc/nginx/certs \
    && cd /etc/nginx/certs \
    && minica --domains test.test
