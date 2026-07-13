# Changelog

All notable changes to the RO-Crate API specification are documented in this
file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and the specification adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-07-13

### Added

- An extension framework: extensions are first-class citizens of the
  specification, registered in the OpenAPI document with a stable identifier,
  a schema, and semantics. Extension properties are tagged with an
  `x-extension: <id>` annotation. Unregistered experiments use an `x-`
  prefixed identifier.
- A required `GET /capabilities` endpoint through which every conformant
  implementation declares the spec version it targets (`apiVersion`), the
  extensions it implements (`extensions`), and its search capabilities
  (`search`). **Conformance-affecting**: existing implementations must add
  this endpoint.
- The `search` capability object declares the implementation's search
  `filters` (each with a required `type` — `string`, `date`, `number`, or
  `boolean` — and an optional `label`) and its search `facets`. Every facet
  field must also be declared as a filter, so a facet value the user clicks
  can always be applied as a filter.
- Search request `filters` values may now be an inclusive `gte`/`lte` range
  object as well as an array of exact values. Ranges are valid only for
  filters declared with type `date` or `number`. Requests using an undeclared
  filter field, or a range on a `string`/`boolean` filter, are rejected with
  a 400 `ValidationError`.
- The `segments` extension — the first registered extension. Adds an optional
  `searchExtra.segments` array to search hits: structured drill-down locations
  (PDF pages via `PageSegment`, time-aligned annotations such as ELAN via
  `TimeAlignedAnnotationSegment`) for full-text matches inside files,
  expressed as a discriminated union on `type`.
- This changelog.

### Changed

- The Extensions guide moved to a dedicated top-level docs section with a
  page per extension: the extension model and registry on the index page, a
  detailed `segments` page (including non-normative Elasticsearch
  implementation notes), and the legacy Oni-UI properties on their own page
  pending registration.

## [0.0.1] - 2024-12-20

### Added

- Initial specification: entities, files, and search endpoints with
  authentication, rate limiting, and error handling conventions.
