# Node x Edge Library Example

[`@cross-platform-tools/vite-plugin`](https://www.npmjs.com/package/@cross-platform-tools/vite-plugin) example of node + edge library setup

[Open in Stackblitz](https://stackblitz.com/~/github.com/saurabhdaware/node-edge-library?view=editor)

## Run Example

```sh
cd packages/node-edge-app
pnpm node # Runs the run.js with node bundle of library
pnpm edge # Runs the run.js with edge bundle of library
```

## Build Library

```sh
cd packages/node-edge-library
pnpm build # Builds node, edge, and types
```

## Run Library Tests

```sh
cd packages/node-edge-library
pnpm test
```

