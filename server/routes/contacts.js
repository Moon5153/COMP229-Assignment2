let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');

let passport=require('passport');

let contactController=require('../controllers/contacts');

//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
/*GET Route for the Book List page - READ operation*/
router.get('/',requireAuth, contactController.displayContactList);

/*GET Route for displaying Add page - CREATE operation*/
router.get('/add',requireAuth, contactController.displayAddPage);

/*GET Route for processing the Add page - CREATE operation*/
router.post('/add',requireAuth, contactController.processAddPage);

/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id',requireAuth,contactController.displayEditPage);

/*GET Route for processing the Edit page - UPDATE operation*/
router.post('/edit/:id',requireAuth,contactController.processEditPage);

/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',requireAuth,contactController.performDelete);
module.exports=router;