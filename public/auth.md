# Blue Panda Agent Registration Instructions

Welcome to the Blue Panda API. To interact with our protected resources as an autonomous agent, you must register and authenticate using OAuth 2.0 / OIDC.

## 1. Discovery

Our authorization server metadata is available at:
`/.well-known/oauth-authorization-server`

Our OIDC configuration is available at:
`/.well-known/openid-configuration`

Our protected resource metadata is available at:
`/.well-known/oauth-protected-resource`

## 2. Registration

Currently, agent registration is performed out-of-band. Please contact `api-support@bluepanda.in` with your agent's identity details (e.g., JWKS URL or public key) to receive a `client_id` and instructions for Client Credentials grant.

## 3. Authentication

Once registered, obtain a token using the `client_credentials` grant type.
Supported scopes:
- `agent:read` - Read access to public and basic resources.
- `agent:write` - Write access (requires explicit approval).
