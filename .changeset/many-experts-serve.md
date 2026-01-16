---
'slate': minor
'slate-dom': patch
---

Optimized all location transform functions and only call for operation that affect them.
Added `PathTransformingOperation`, `PointTransformingOperation`, and `RangeTransformingOperation` as subsets of `Operation` (all of which have a `path` property) and also `Operation.transformsPaths(op)`, `Operation.transformsPoints(op)`, `Operation.transformsRanges(op)` as type guards for them.
All location-transforming functions' type signatures have been changed to ONLY accept the relevant subset, so any calls to them will need to guard for that before calling or else typescript will error. Something like so:
```
const newPath = Operation.transformsPaths(op) ? Path.transform(path, op) : path
```
But usually this guard can be placed much earlier to save computation.
