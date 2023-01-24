export type num = number
export interface WranglerConfig extends Environment {
  /** The name of your Worker. Alphanumeric and dashes only. */
  name: string
  main: `${string}.${"ts" | "js"}`
  compatibility_date: `${num}${num}${num}${num}-${num}${num}-${num}${num}`

  node_compat?: boolean

  account_id?: string

  workers_dev?: boolean

  tsconfig?: string

  triggers?: {
    crons: CronTab[]
  }

  rules?: Rule[]

  dev?: DevServerConfig

  site?: WorkerSiteConfig

  env?: {
    staging?: Environment
  }
}

export interface Environment {
  name: string
  route?: Route
  routes?: Route[]
  kv_namespaces?: Array<{ binding: string; id: string; preview_id?: string }>
}

export interface Route {
  pattern: string
  zone_name: string
}

export interface CronDefinition {}

export interface Rule {
  type: "Text" | "ESModule" | "CommonJS" | "CompiledWasm" | "Data"
  globs: string[]

  /**
   * When set to true, allows you to have multiple rules for the same Type.
   * */
  fallthrough?: boolean
}

export interface DevServerConfig {
  /**
   * IP address for the local dev server to listen on. Defaults to localhost.
   */
  ip?: string
  /**
   * Port for the local dev server to listen on. Defaults to 8787.
   */
  port?: number
  /**
   * Protocol that local dev server listens to requests on. Defaults to http.
   */
  local_protocol?: string
  /**
   * Protocol that the local dev server forwards requests on. Defaults to https.
   */
  upstream_protocol?: string
  /**
   * Host to forward requests to, defaults to the host of the first route of the Worker.
   */
  host?: string
}

export interface WorkerSiteConfig {
  /**
   * The directory containing your static assets. It must be a path relative to your wrangler.toml file.
   */
  bucket: string

  /**
   * An exclusive list of .gitignore-style patterns that match file or directory names from your bucket location. Only matched items will be uploaded.
   */
  include?: string[]

  /**
   * A list of .gitignore-style patterns that match files or directories in your bucket that should be excluded from uploads.
   */
  exclude?: string[]
}

export type CronTab = string
