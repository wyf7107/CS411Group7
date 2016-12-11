// app/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });




app.get('/store', (req, res) => {


    res.render('storename.ejs')

})




app.post('/savename', function(req, res) {


req.user.local.contacts.push({fullname:req.body.fullname,number:req.body.number,email:req.body.email,address:req.body.address} )


req.user.save(function (err) {
  if (err) return handleError(err);


  res.redirect('/oksavecontact')

  })

 })



app.get('/display', (req, res) => {


    // renders index.ejs
    res.render('displaycontacs.ejs', {contacts : req.user.local.contacts})




})











    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
     app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/showcard', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('showcard.ejs');
    });

    app.get('/mapApi', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('mapApi.ejs');
    });

    /************add contact post method***************/
    app.post('/addcontact',(req,res)=>{
      console.log(req.body);
      req.user.local.contacts.push(req.body);
      req.user.save((err,result)=>{
        if(err) return console.log(err)
        console.log("save to database")

      });
      res.redirect('/oksavecontact')

    });

    /************add contact post method end***************/

    /************add oksavecontact get method***************/
    app.get('/oksavecontact',(req,res)=>{
      res.render('oksavecontact.ejs')
    });

    /************add oksavecontact get method end***************/


};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
