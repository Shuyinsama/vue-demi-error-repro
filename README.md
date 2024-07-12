## How to reproduce the error

#### The error

1. Clone the repository
2. Run the `npm i` in both the `shared-package` and `dummy-app` directories
3. Run the `npm run build` in the `dummy-app` directory
4. The error should show up

```shell
error during build:
../shared-package/node_modules/vue-demi/lib/index.mjs (1:7): "default" is not exported by "node_modules/vue/dist/vue.runtime.esm-bundler.js", imported by "../shared-package/node_modules/vue-demi/lib/index.mjs".
```
#### Fix for the error

1. Delete both the `node_modules` and `package-lock.json` in the `shared-package` and `dummy-app` directories.
2. In the `shared-package` directory, run `npm i vue`.
3. In the `dummy-app` directory, run `npm i`.
4. Run the `npm run build` in the `dummy-app` directory
5. Fixed!
