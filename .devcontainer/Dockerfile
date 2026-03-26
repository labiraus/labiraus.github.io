FROM mcr.microsoft.com/devcontainers/base:bookworm

COPY zscaler.crt /usr/local/share/ca-certificates/zscaler.crt
RUN chmod 644 /usr/local/share/ca-certificates/zscaler.crt && update-ca-certificates

ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/zscaler.crt