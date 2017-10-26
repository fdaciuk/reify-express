import express from 'express'
import Controller from '../controller/product'
let App = express.Router()


App
	.route('/')
	.get(Controller.index)


export default App