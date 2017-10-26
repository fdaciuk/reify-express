import express from 'express'
import {productRoute} from './route'

let app = express()

app.use('/', productRoute)

app.listen(3000, () => {
	console.log('> http://localhost:3000')
})