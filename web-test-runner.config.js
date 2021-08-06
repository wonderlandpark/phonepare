/* eslint-disable @typescript-eslint/no-var-requires */
process.env.NODE_ENV = 'test'

module.exports = {
  plugins: [require('@snowpack/web-test-runner-plugin')()],
}
