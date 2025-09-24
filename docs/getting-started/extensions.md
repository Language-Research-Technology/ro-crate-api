---
sidebar_position: 5
title: Extensions
mdx.format: md
---

# API Extensions

This guide explains how implementations can extend the RO-Crate API
specification with additional properties.

## Core vs Extension Properties

The RO-Crate API specification defines mandatory fields that all
implementations must provide. However, implementations are free to add optional
extension properties directly at the root level of entity responses to meet
their specific requirements.

**Important**: Extension properties are implementation-specific and not
required by the core API. Clients should be prepared to handle additional
properties beyond those defined in the specification.

## How Extensions Work

Extension properties are added at the root level of entity objects, alongside
the mandatory fields defined in the API specification. For example:

```json
{
  "id": "https://catalog.paradisec.org.au/repository/LRB/001",
  "name": "Recordings of West Alor languages",
  "description": "A compilation of recordings featuring various West Alor languages",
  "entityType": "http://pcdm.org/models#Collection",
  "memberOf": "https://catalog.paradisec.org.au/repository/LRB",
  "rootCollection": "https://catalog.paradisec.org.au/repository/LRB",
  "metadataLicenseId": "https://license.example.com/metadata",
  "contentLicenseId": "https://license.example.com/content",
  "access": {
    "metadata": true,
    "content": false
  },

  // Extension properties below
  "counts": {
    "collections": 5,
    "objects": 42,
    "subCollections": 3,
    "files": 150
  },
  "language": ["English", "Italian"],
  "communicationMode": ["SpokenLanguage", "Song"],
  "mediaType": ["audio/wav", "text/plain"],
  "accessControl": "Public"
}
```

## Example: Oni-UI Extensions

The [oni-ui](https://github.com/Language-Research-Technology/oni-ui) implementation
requires the following additional properties to be present in API responses:

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

## Implementation Guidelines

When adding extension properties to your API implementation:

1. **Document your extensions**: Clearly document any additional properties
   your implementation provides
2. **Use descriptive names**: Choose property names that clearly indicate their
   purpose
3. **Consider namespacing**: For complex implementations, consider using
   prefixed property names to avoid conflicts
4. **Maintain consistency**: Use consistent data types and naming conventions
   across your extensions
5. **Version appropriately**: Consider how extension changes might affect
   client compatibility

## Other Implementations

Different RO-Crate API implementations may define their own extension
properties based on their specific use cases and requirements. Always consult
the documentation for the specific implementation you're working with to
understand what additional properties might be available.

When building clients that work across multiple implementations, design them to
gracefully handle unknown extension properties.
