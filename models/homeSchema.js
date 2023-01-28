const mongoose =require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
productname:{
    type:String,
    required:true
},

countryname:{
    type:String,
    required:true
},

distance:{
    type:Number,
    required:true
},

costing:{
    type:Number,
    required:true
}
})

module.exports = mongoose.model('Registeruser', userSchema)