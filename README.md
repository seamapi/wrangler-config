# wrangler-config

Write your wrangler config with Typescript instead of `toml`.

Automatically generates a `wrangler.toml` file from a `wrangler.config.ts`.

## Usage

```ts
import { checkConfig } from "wrangler-config"
export default checkConfig({
  name: "my-config",
  main: "src/index.ts",
  compatibility_date: "2023-01-20",
  node_compat: true,
  kv_namespaces: [
    {
      binding: "BLOG_CACHE",
      id: "b9b24cee481e4e5387f02e2331c14349"
    }
  ],
  vars: [
    MY_ENV_VAR: "b9b24cee481e4e5387f02e2331c14349"
  ],
  triggers: {
    crons: ["*/1 * * * *"]
  }
})
```

Running `wrangler-config` will generate the following `wrangler.toml`:

```toml
name = "my-config"
main = "src/index.ts"
compatibility_date = "2023-01-20"
node_compat = true

[[kv_namespaces]]
binding = "BLOG_CACHE"
id = "b9b24cee481e4e5387f02e2331c14349"

[vars]
MY_ENV_VAR = "173a62937e944f8001c8c195bf7aa2a5"

[triggers]
crons = ["*/1 * * * *"]

```

## As Library

You can access [types](./types.ts) by importing `wrangler-config`.

```ts
import type { WranglerConfig } from "wrangler-config"
```
