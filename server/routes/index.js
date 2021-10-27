let express = require('express');
let router = express.Router();

let indexController=require('../controllers/index');
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);
/* GET Contact Me page. */
router.get('/contact', indexController.displayContactPage);

/* GET route for displaying Login Page*/
router.get('/login',indexController.displayLoginPage);

/* GET route for processing Login Page*/
router.post('/login',indexController.processLoginPage);

/* GET route for displaying Register Page*/
router.get('/register',indexController.displayRegisterPage);

/* GET route for processing Register Page*/
router.post('/register',indexController.processRegisterPage);

/* GET to perform Logout*/
router.get('/logout',indexController.performLogout);

module.exports = router;
