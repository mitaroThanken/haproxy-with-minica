NGINX Reverse proxy with jsha/minica
===

Export certs
---

```shell
docker container cp nginx-reverse-proxy-with-minica-nginx-1:/etc/nginx/certs - | tar xv
```

Install trusted root certification
---

Install `certs/minica.pem` to Trusted Root Certification Authorities.

(WIP)
