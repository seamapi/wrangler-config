# wrangler-ts

A tool to help you build wrangler.toml with Typescript.

## Usage

Use a helpful typescript autocomplete to build your `wrangler.toml` file:

```ts
import { config, cron } from "wrangler-ts"
export default config({
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
    crons: [cron.every("1m")]
  }
})
```

Running `wrangler-ts` will generate the following `wrangler.toml`:

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
