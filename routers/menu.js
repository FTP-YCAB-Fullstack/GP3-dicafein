'use strict'

const router = require('express').Router()
const menuController = require('../controllers/menu')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const {validate} = require('express-validation')
const validation = require('../validation/menuValidation')

router.get('/menus' , authentication  ,menuController.getAll)
router.post('/menus' , authentication ,authorization(['admin']) , validate(validation.index()) ,menuController.store)
router.get('/menus/:id' , authentication ,menuController.getDetail)
router.put('/menus/:id' , authentication  ,authorization(['admin']) , validate(validation.index()) ,menuController.update)
router.delete('/menus/:id' ,authentication , authorization(['admin']) ,menuController.delete)

module.exports = router