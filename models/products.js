const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productModel = new Schema({
   productName:{type:String,required:true},
   productPrice:{type:Number,required:true},
   productDescription:{type:String,required:true},
   date:{type:Date}


})
module.exports = mongoose.model('products',productModel)