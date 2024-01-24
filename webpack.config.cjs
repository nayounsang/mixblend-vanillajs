const development = require("./webpack.development.config.cjs");
const production = require("./webpack.production.config.cjs");
module.exports = (env, { mode }) => {
  return mode === "production" ? production : development;
};
