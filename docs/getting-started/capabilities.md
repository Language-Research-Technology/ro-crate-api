---
sidebar_position: 5
title: Capabilities
mdx.format: md
---

# Capabilities

Every conformant implementation provides `GET /capabilities`: a single endpoint
that declares what the implementation supports. Clients feature-detect against
it instead of relying on per-archive configuration or probing responses.

## The Response

```json
{
  "apiVersion": "0.1.0",
  "extensions": { "segments": { "maxSegments": 5 } },
  "facets": { "inLanguage": { "label": "Language" }, "mediaType": {} }
}
```

The full schema is documented in the
[API reference](/docs/api/get-capabilities).

### `apiVersion`

The version of this specification the implementation targets. Use it to reason
about core-level differences between archives as the specification evolves —
the [changelog](https://github.com/Language-Research-Technology/ro-crate-api/blob/main/CHANGELOG.md)
records what changed in each version.

### `extensions`

The registered extensions the implementation provides, as a map of extension
identifier to that extension's configuration object. Presence of a key means
the extension is implemented; the value is an empty object when the extension
has nothing to configure.

Detection is a simple key lookup: an archive supports segments exactly when
`"segments" in capabilities.extensions`. See the
[Extensions guide](./extensions) for the extension model and the rules clients
must follow.

### `facets`

The facet fields the implementation supports in search, as a map of field name
to configuration with an optional display `label`. Use it to build facet UI
dynamically instead of hard-coding per-archive facet lists: each field listed
here may be used in search `filters` and appears in the search response's
facet counts.

## Using Capabilities

Fetch `/capabilities` once when your client starts a session with an archive
and cache the result — it describes the deployment, not individual requests.
Degrade gracefully when a capability is absent: hide the feature rather than
failing.
