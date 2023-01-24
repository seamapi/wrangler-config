import { checkConfig } from "../../src"

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