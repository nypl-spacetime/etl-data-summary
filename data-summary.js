const fs = require('fs')
const path = require('path')
const R = require('ramda')

function summary (config, dirs, tools, callback) {
  const modules = tools.modules()
    .map(R.pick(['id', 'steps', 'dataset', 'status']))

  const file = path.join(dirs.current, 'data-summary.json')

  fs.writeFileSync(file, JSON.stringify(modules, null, 2))
  callback()
}

// ==================================== STEPS ====================================

module.exports.steps = [
  summary
]
