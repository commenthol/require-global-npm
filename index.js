const fs = require('fs')
const path = require('path')

module.exports = function requireNpm () {
  // it is assumed that npm is always installed alongside with node
  let npm
  const binDir = path.dirname(process.execPath)
  const npmBin = path.join(binDir, 'npm')

  try {
    npm = require('npm') // maybe the NODE_PATH var is already set correctly
    if (!npm) throw new Error('npm not found')
    return npm
  } catch (e) {
    let npmPath
    if (fs.statSync(npmBin)) {
      if (fs.lstatSync(npmBin).isSymbolicLink()) {
        const npmBinPath = path.resolve(binDir, fs.readlinkSync(npmBin))
        npmPath = npmBinPath.replace(/^(.*\/node_modules\/npm)(?:(?!\/node_modules\/npm).)*?$/, '$1')
      } else {
        npmPath = path.resolve(binDir, 'node_modules', 'npm')
      }
      npm = require(npmPath) // if the assumption is wrong, then an assertion is thrown here
      return npm
    }
  }
}
