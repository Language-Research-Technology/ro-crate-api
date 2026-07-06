# Changelog

All notable changes to the RO-Crate API specification are documented in this
file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and the specification adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-07-06

### Added

- An extension framework: extensions are first-class citizens of the
  specification, registered in the OpenAPI document with a stable identifier,
  a schema, and semantics. Extension properties are tagged with an
  `x-extension: <id>` annotation. Unregistered experiments use an `x-`
  prefixed identifier.
- A required `GET /capabilities` endpoint through which every conformant
  implementation declares the spec version it targets (`apiVersion`), the
  extensions it implements (`extensions`), and the search facets it supports
  (`facets`). **Conformance-affecting**: existing implementations must add
  this endpoint.
- The `segments` extension — the first registered extension. Adds an optional
  `searchExtra.segments` array to search hits: structured drill-down locations
  (PDF pages via `PageSegment`, ELAN annotations via `AnnotationSegment`) for
  full-text matches inside files, expressed as a discriminated union on
  `type`.
- This changelog.

### Changed

- The Extensions guide is rewritten to document the extension model, the
  curated registry, `/capabilities` feature detection, and client rules. The
  legacy Oni-UI properties remain documented pending registration.

## [0.0.1] - 2024-12-20

### Added

- Initial specification: entities, files, and search endpoints with
  authentication, rate limiting, and error handling conventions.
