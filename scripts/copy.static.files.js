const fs = require('fs')
const {join} = require('path')

module.exports.copyStaticFiles = function (root, dest = '.next') {
  const nextFolder = join(root, dest)
  const staticFolder = join(root, 'config', 'static')
  const nextStaticFolder = join(root, dest)
  const log = msg => process.stdout.write(`${msg}\n`)

  if (fs.existsSync(nextFolder)) {
    log('[i] Next build is present')

    const staticFiles = fs.readdirSync(staticFolder)

    staticFiles.forEach(f => {
      const from = join(staticFolder, f)
      const to = join(nextStaticFolder, f)
      fs.copyFileSync(from, to)
      log(`[i] copied '${f}' over to ${dest}`)
    })
  }
  else {
    log('[!] First build the app using \'yarn dist\'')
    process.exit(0)
  }
}
