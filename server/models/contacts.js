let mongoose=require('mongoose');

//create a model class
let contactsModel=mongoose.Schema({
    name: String,
    contact:String,
    email: String
},
{
    collection:"contacts"
});
module.exports=mongoose.model('Contacts',contactsModel);