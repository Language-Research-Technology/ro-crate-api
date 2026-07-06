---
sidebar_position: 6
title: Extensions
mdx.format: md
---

# API Extensions

This guide explains how the RO-Crate API specification is extended: the
extension model, the curated registry, feature detection through
[`/capabilities`](./capabilities), and the rules clients must follow.

## The Extension Model

The core specification defines the endpoints and fields every implementation
must provide. Beyond that core, functionality is added through **extensions**:
optional, well-defined units of behaviour that implementations choose to
provide.

Every extension has:

- **A stable identifier** (e.g. `segments`) used to declare and detect it
- **A schema** defining the response properties it adds
- **Semantics** describing how those properties behave
- **A configuration schema** defining what the implementation declares about
  the extension in `/capabilities`

Extensions are optional. An implementation remains conformant while
implementing only the extensions relevant to its corpus — or none at all.

## The Curated Registry

Extensions are registered in the specification itself. Each registered
extension is defined in the OpenAPI document: its properties appear inline in
core schemas as optional fields, each tagged with an `x-extension: <id>`
annotation so the boundary between core and extension is machine-readable.
Normative detail lives in the schema descriptions and is rendered on the
generated API reference pages.

To propose a new extension (or a new variant within an existing one, such as a
new segment type), open a pull request against
[this specification repository](https://github.com/Language-Research-Technology/ro-crate-api).
Registration keeps identifiers stable and collision-free, and gives all
consumers a single authoritative definition.

### Registered Extensions

| Identifier | Adds | Configuration |
| --- | --- | --- |
| `segments` | `searchExtra.segments` — structured drill-down locations (PDF pages, ELAN annotations) for full-text search matches inside files | `maxSegments`: the per-hit segment cap |

### Experimental Extensions

Unregistered, private experiments MUST use an `x-` prefixed identifier (e.g.
`x-my-experiment`). The `x-` prefix is a sanctioned lane for experimentation
that cannot collide with registered identifiers. Experimental extensions are
outside the scope of this specification; register them before relying on them
across implementations.

## Feature Detection

Implementations declare their implemented extensions in the `extensions`
member of [`/capabilities`](./capabilities), a map of extension identifier to
configuration object. Detection is a simple key lookup: an archive supports
segments exactly when `"segments" in capabilities.extensions`.

## Client Rules

Clients that work across implementations MUST follow these rules:

1. **Feature-detect before use**: check `/capabilities` rather than probing
   responses or hard-coding per-archive behaviour
2. **Tolerate absent extensions**: extension properties are optional; degrade
   gracefully when an extension (or an individual property) is not present
3. **Skip unknown variants**: where an extension defines a discriminated union
   (such as segment `type`), skip values you do not recognise rather than
   fail — new variants are added by spec revision and deployed clients must
   keep working

## Legacy Extensions (Pending Registration)

The properties below predate the extension registry. The
[oni-ui](https://github.com/Language-Research-Technology/oni-ui) implementation
expects them at the root level of entity responses. They remain documented here
until they are formally registered as extensions.

### Statistical Counts

- **`counts`** (object): Statistical information about the entity's subtree:
  - **`collections`** (integer): The total number of collections in the subtree
  - **`objects`** (integer): The total number of objects in the subtree
  - **`subCollections`** (integer): The number of nested sub-collections within
  this entity
  - **`files`** (integer): The number of individual files attached to or within
  this entity's structure

### Content Classification

- **`language`** (array of strings): All languages contained in the sub-tree of
entities. Useful for archives that store diverse linguistic data.
  - Example: `["English", "Italian", "Mandarin"]`

- **`communicationMode`** (array of strings): The modes of communication found
in this sub-tree's data, such as speech, song, or sign.
  - Example: `["SpokenLanguage", "Song", "SignLanguage"]`

- **`mediaType`** (array of strings): Media types (MIME types) of files within
the sub-tree.
  - Example: `["audio/wav", "text/plain", "video/mp4"]`

### Access Control

- **`accessControl`** (string): The level of access control required to view or
download this entity.
  - Example: `"Public"`, `"Restricted"`, `"Private"`
