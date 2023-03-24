const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: '123456',
    database: 'one_read',
    port: 5432,
})

pool.on('error', (err) => {
    console.log('Connect db error: ${err}')
    process.exit(-1)
})

module.exports = pool