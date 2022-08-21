const path = require("path")
const resolvePath = (relativePath) => 
  path.resolve(__dirname, '..', relativePath)

module.exports = {
  webpack: (config, env) => {
    return config
  },
  paths: (config, env) => {
    config.dotenv = resolvePath('.env')
    config.appPath = resolvePath('.')
    config.appBuild = resolvePath('dist/build')
    return config
  },
  jest: (config) => {
    config.roots = [
      ...config.roots,
      '<rootDir>/tests/unit'
    ]
    config.testMatch = [
      '<rootDir>/tests/unit/**/**/*.spec.{js,jsx,ts,tsx}'
    ]
    return config
  }
}
