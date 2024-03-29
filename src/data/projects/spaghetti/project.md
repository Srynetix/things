## Summary

Trace your Python module dependencies to have a better picture before cleaning!

It's a command-line tool which generates a "coupling report" between your Python modules in a project.

Here's a sample output when applied on the `spaghetti` repository with the command `spaghetti report-console results.json --max-depth 2 --ignore tests`:

```
spaghetti.cmd (dependencies: 6, reverse dependencies: 0):
  - spaghetti.filtering
  - spaghetti.io
  - spaghetti.models
  - spaghetti.parsing
  - spaghetti.reporting
  - spaghetti.serialization
spaghetti.filtering (dependencies: 2, reverse dependencies: 1):
  - spaghetti.log
  - spaghetti.models
spaghetti.io (dependencies: 2, reverse dependencies: 1):
  - spaghetti.models
  - spaghetti.serialization
spaghetti.parsing (dependencies: 2, reverse dependencies: 1):
  - spaghetti.log
  - spaghetti.models
spaghetti.reporting (dependencies: 1, reverse dependencies: 1):
  - spaghetti.models
spaghetti.serialization (dependencies: 1, reverse dependencies: 2):
  - spaghetti.models
```

Because I also wanted something graphical, I made a companion tool named [spaghetti-ui](/projects/spaghetti-ui).
