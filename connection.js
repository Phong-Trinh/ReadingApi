const {Pool} = require('pg')

const pool = new Pool({
    // user: 'postgres',
    // password: '123456',
    // database: 'one_read',
    // port: 5432,
    connectionString: 'postgres://reading_db_b0mg_user:tqWPCaqf2YSi40HOWCwgD6XeGB9nbDlS@dpg-cgegbn9mbg568r1e4q1g-a.oregon-postgres.render.com/reading_db_b0mg',
    ssl: {
		rejectUnauthorized: false
	}
})

pool.on('error', (err) => {
    console.log('Connect db error: ${err}')
    process.exit(-1)
})

module.exports = pool