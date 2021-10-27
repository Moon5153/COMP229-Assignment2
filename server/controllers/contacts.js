let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');

//create a reference to db schema
let Contacts=require('../models/contacts');

module.exports.displayContactList=(req,res,next)=>{
    Contacts.find((err,contactList)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contacts/list',{title:'Business Contacts',ContactList:contactList,displayName: req.user?req.user.displayName:''});
        }
    });
}

module.exports.displayAddPage=(req,res,next)=>{
    res.render('contacts/add',{title:'Add Contact',displayName: req.user?req.user.displayName:''});
}
module.exports.processAddPage=(req,res,next)=>{
    let newContact = Contacts({
        "name": req.body.name,
        "contact": req.body.contact,
        "email": req.body.email
    });
    Contacts.create(newContact,(err,Contacts)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/contact-list');
        }
    });
}
module.exports.displayEditPage=(req,res,next)=>{
    let id=req.params.id;

    Contacts.findById(id,(err,contactToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contacts/edit',{title:'Edit Contact',contacts: contactToEdit,displayName: req.user?req.user.displayName:''});
        }
    });
}
module.exports.processEditPage=(req,res,next)=>{
    let id=req.params.id;

    let updateContact=Contacts({
        "_id": id,
        "name": req.body.name,
        "contact": req.body.contact,
        "email": req.body.email
    });
    Contacts.updateOne({_id:id},updateContact,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });
}
module.exports.performDelete=(req,res,next)=>{
    let id=req.params.id;

    Contacts.remove({_id: id}, (err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })
}