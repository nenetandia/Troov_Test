const mongoose = require('mongoose') ;

mongoose.connect("mongodb+srv://nene:pass@cluster0.ka1ym.mongodb.net/TroovProject", (err) => {
    
    if(!err) {
        console.log('mongo db connection is established')
    }else {
        console.log('error in db connection')
    }
});
require ("../../models/userModel");
require ("../../models/itemModel");