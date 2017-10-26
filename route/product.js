import express from 'express'
import * as Controller from '../controller/product'
let App = express.Router()

App.route('/').get(Controller.index)

export default App
