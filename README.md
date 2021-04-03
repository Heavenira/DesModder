# DesModder
Unified location for various Desmos plugins instead of an unorganized system of userscripts in the form of gists and repos that need to be toggled manually in Tampermonkey.

Think of it like an unofficial plugin/modding API, like Forge does for Minecraft.

Build system forked from https://github.com/jared-hughes/DesThree.

## Development

To clone the repository, use:

```
git clone --recurse-submodules https://github.com/jared-hughes/DesModder
```

This clones the repository and downloads the submodules.

To update submodules to the most recent commit, run:

```
git submodule update --remote wolfram2desmos
```

or equivalent for other module names. This should only be done when submodules changed.

More information at https://git-scm.com/book/en/v2/Git-Tools-Submodules.

## The plan

Each plugin would consist of a `onEnable` and `onDisable` hook.

There are two types of plugins:

- development tools
  - people can view graphs without these plugins
  - example: Wolfram2Desmos, which makes it easier to copy-paste ASCIIMath expressions into Desmos
- graph dependencies
  - these are needed for the graph to run
  - example: DesThree or Expressions Nested Too Deeply Bypass which add actual visual features.


## The name

CyanidesDuality came up with the name "DesThree," but he abandoned his project early-on. He's letting me use the name under one condition:

> if you take the name you gotta include my features then
>
> which is: a sort of header that tells you what plugins a specific graph needs, and then enables/disables them as needed

That is the plan anyway (for plugins which are graph dependencies), so it shouldn't be too difficult to follow this request once graph dependencies are added. This already exists as the version check of DesThree.
