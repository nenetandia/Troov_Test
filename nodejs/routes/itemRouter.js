const express = require('express')
const router = express.Router();

const ctrItem = require('../controllers/itemController');

//create an item
router.post('/addItem', ctrItem.addItem) 

//get all item
router.get('/addItem', ctrItem.getItem)    

 //get one item by his id
router.get ('/:id', ctrItem.getItemId )                                   

// update item
router.put('/:id', ctrItem.update )        

   // delete item by his id
router.delete('/:id', ctrItem.delete )                                   


module.exports = router;