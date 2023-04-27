const { addIncome  } = require('../contollers/income')

const router= require('express').Router()


router.post('/add-income',addIncome)


// //router.post('/add-income',addIncome )
    
// /*.post('/add-expense', addExpense)
// .get('/get-expenses', getExpense)
// .delete('/delete-expense/:id', deleteExpense)*/
module.exports=router 