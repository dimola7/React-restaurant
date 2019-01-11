const fs = require('fs')
fs.writeFileSync('./.env', `NODE_ENV=${process.env.NODE_ENV}\n`, `API_KEY=${process.env.API_KEY}\n`, `HOST=${process.env.HOST}\n`)
