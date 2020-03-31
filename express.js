const express = require('express')
const app = express()
const helmet = require('helmet')
const logger = require('morgan')
const Healthcheck = require('standard-healthcheck')

const port = process.env.PORT || 3000
const healthcheck = new Healthcheck({
	includeEnv: ['WEBSITE_HOSTNAME', 'WEBSITE_INSTANCE_ID']
})

app.use(express.static('dist'))
app.use(helmet())
app.use(logger('dev'))

app.get('/health', healthcheck.endpoint)

app.listen(port, () => {
	console.log(`Angular hello-world app listening on port ${port}!`)
})
