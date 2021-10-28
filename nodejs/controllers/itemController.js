const mongoose = require('mongoose'); 
var Item = mongoose.model('Item');
const bodyParser = require('body-parser');
const _ = require('lodash')
var ObjectId = require('mongoose').Types.ObjectId;

// Create new item
exports.addItem = (request ,response, next) => {
    var item = new Item();
    item.status = request.body.status;
    item.nature = request.body.nature;
    item.address = request.body.address;
    item.time = request.body.time;
    
    item.save((err, doc) => {
         if(!err)
        response.send(doc);
        else {
        response.send(err);
      }  
    });
}

//get item list
exports.getItem = (request, response) =>{
    Item.find((err, docs) => {
      if (!err) { response.send(docs); }
      else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
  }

//   get one item by his id
  exports.getItemId = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    Item.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
}

exports.update = (request, response) => {
    if (!ObjectId.isValid(request.params.id))
    return response.status(400).send(`No record with given id : ${request.params.id}`);

      var item = {
        status : request.body.status,
        nature : request.body.nature,
        address : request.body.adress,
        time : request.body.time
      };
      Item.findByIdAndUpdate(request.params.id, { $set: item }, { new: true }, (err, doc) => {
          if (!err) { response.send(doc); }
          else { console.log('Error in Updating Item :' + JSON.stringify(err, undefined, 2)); }
      });
    }
    exports.delete = (request, response) => {

        if (!ObjectId.isValid(request.params.id))
        return response.status(400).send(`No record with given id : ${request.params.id}`);
    
        Item.findByIdAndRemove(request.params.id, (err, doc) => {
          if (!err) { response.send(doc); }
          else { console.log('Error in Item Delete :' + JSON.stringify(err, undefined, 2)); }
        });
      }