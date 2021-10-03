const router = require('express').Router()
const TransactionMenuController = require('../controllers/transaction_menu')
const authentication = require('../middlewares/authentication')
const {validate} = require('express-validation')
const validation = require('../validation/transactionValidation')

router.post('/transaction_menu' , authentication  , validate(validation.menu()), TransactionMenuController.create)
router.delete('/transaction_menu/:id' , authentication , TransactionMenuController.delete)


module.exports = router