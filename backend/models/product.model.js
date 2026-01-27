import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price: {
        type : Number,
        required: true
    },
    image:{
        type : String,
        required : true
    }
},{
    timestamps : true
})

const Product = mongoose.model('Product', productSchema);
// this basically says to maongoose this is how you should make a collection called a product and this is the schema you use for that.

export default Product;