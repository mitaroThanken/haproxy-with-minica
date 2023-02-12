FROM golang:latest AS certs

# Install minica
RUN go install github.com/jsha/minica@v1.0.2

# Make certs
RUN mkdir -p /certs \
    && cd /certs \
    && minica --domains test.test \
    && openssl x509 -inform PEM -in minica.pem -out minica.crt \
    && cd test.test \
    && cat cert.pem key.pem > test.test.pem \
    && cd .. \
    && chmod go-rwx -R .

FROM haproxy:2.7 AS haproxy

# be root
USER root

# Copy certs
COPY --from=certs /certs /usr/local/etc/haproxy/certs

# Copy config
COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg

# chown
RUN chown -R haproxy:haproxy /usr/local/etc/haproxy

# be haproxy
USER haproxy
