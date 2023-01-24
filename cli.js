#!/usr/bin/env node

const path = require("path")
const fs = require("fs")

require("esbuild-register")

const json2toml = require("json2toml")

const configPath = process.argv[2] ?? path.join(process.cwd(), "wrangler.config.ts")
const outputDir = path.basename(configPath)

const wranglerConf = require(configPath)

const wranglerToml = json2toml(wranglerConf)

fs.writeFileSync(path.join(outputDir, "wrangler.toml"), wranglerToml)