const express = require('express'),
  router = express.Router();
var multer = require('multer');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
	user: 'IT.Group@crconc.org',
	pass: 'develop@CRC'
	 }
	});



var storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
    cb(null, 'files/') 
    }, 
    filename: function (req, file, cb) { 
    cb(null, '1.pdf') 
    } 
}) 
var upload = multer({ storage: storage }) 


router.get('/jobopenning',(req,res) => {
  res.render('careers/jobopenning');
});

router.get('/jobopenning2',(req,res) => {
  res.render('careers/jobopenning2');
});

router.get('/jobopenning/CTM',(req,res) => {
  res.render('careers/jobopenning/CTM');
});

router.get('/jobopenning/RAA',(req,res) => {
  res.render('careers/jobopenning/RAA');
});

router.get('/jobopenning/CDM',(req,res) => {
  res.render('careers/jobopenning/CDM');
});

router.get('/jobopenning/EA',(req,res) => {
  res.render('careers/jobopenning/EA');
});

router.get('/jobopenning/CM',(req,res) => {
  res.render('careers/jobopenning/CM');
});

router.get('/jobs',(req,res) => {
  res.render('careers/jobs');
});


router.post('/jobopenning/CDM', upload.single('resume'), (req, res, next) => {
  var ejsname = req.body.name;
  var ejsemail = req.body.email;
  var resume = req.body.resume;
  var ejsmessage = req.body.message;

  // console.log(req.body.name);
	var mailOptions = {
	  from: 'IT.Group@crconc.org',
	  to: 'IT.Group@crconc.org',
	  subject: 'Application '+ '(Clinical Data Manager,  Full-time)',
	  text: 'name: '+ejsname + '\n' +'email: ' + ejsemail + '\n' + 'resume: ' + resume + '\n' +'message: ' + ejsmessage,
	  attachments:[ 
	   { 
	    filename : ejsname + '_CDM.pdf', 
	    path: 'files/1.pdf'
	   }, 
	  ] 
	 }; 
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.locals.alert = 'success';
	    res.render('careers/jobopenning/CDM');
	  }
	});
});

router.post('/jobopenning/CM', upload.single('resume'), (req, res, next) => {
  var ejsname = req.body.name;
  var ejsemail = req.body.email;
  var resume = req.body.resume;
  var ejsmessage = req.body.message;

  // console.log(req.body.name);
	var mailOptions = {
	  from: 'IT.Group@crconc.org',
	  to: 'IT.Group@crconc.org',
	  subject: 'Application '+ '(Contract Manager,  Full-time)',
	  text: 'name: '+ejsname + '\n' +'email: ' + ejsemail + '\n' + 'resume: ' + resume + '\n' +'message: ' + ejsmessage,
	  attachments:[ 
	   { 
	    filename : ejsname + '_CM.pdf', 
	    path: 'files/1.pdf'
	   }, 
	  ] 
	 }; 
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.locals.alert = 'success';
	    res.render('careers/jobopenning/CM');
	  }
	});
});

router.post('/jobopenning/CTM', upload.single('resume'), (req, res, next) => {
  var ejsname = req.body.name;
  var ejsemail = req.body.email;
  var resume = req.body.resume;
  var ejsmessage = req.body.message;

  // console.log(req.body.name);
	var mailOptions = {
	  from: 'IT.Group@crconc.org',
	  to: 'IT.Group@crconc.org',
	  subject: 'Application '+ '(Clinical Trial Manager,  Full-time)',
	  text: 'name: '+ejsname + '\n' +'email: ' + ejsemail + '\n' + 'resume: ' + resume + '\n' +'message: ' + ejsmessage,
	  attachments:[ 
	   { 
	    filename : ejsname + '_CTM.pdf', 
	    path: 'files/1.pdf'
	   }, 
	  ] 
	 }; 
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.locals.alert = 'success';
	    res.render('careers/jobopenning/CTM');
	  }
	});
});

router.post('/jobopenning/EA', upload.single('resume'), (req, res, next) => {
  var ejsname = req.body.name;
  var ejsemail = req.body.email;
  var resume = req.body.resume;
  var ejsmessage = req.body.message;

  // console.log(req.body.name);
	var mailOptions = {
	  from: 'IT.Group@crconc.org',
	  to: 'IT.Group@crconc.org',
	  subject: 'Application '+ '(Executive Assistant,  Full-time)',
	  text: 'name: '+ejsname + '\n' +'email: ' + ejsemail + '\n' + 'resume: ' + resume + '\n' +'message: ' + ejsmessage,
	  attachments:[ 
	   { 
	    filename : ejsname + '_EA.pdf', 
	    path: 'files/1.pdf'
	   }, 
	  ] 
	 }; 
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.locals.alert = 'success';
	    res.render('careers/jobopenning/EA');
	  }
	});
});

router.post('/jobopenning/RAA', upload.single('resume'), (req, res, next) => {
  var ejsname = req.body.name;
  var ejsemail = req.body.email;
  var resume = req.body.resume;
  var ejsmessage = req.body.message;

  // console.log(req.body.name);
	var mailOptions = {
	  from: 'IT.Group@crconc.org',
	  to: 'IT.Group@crconc.org',
	  subject: 'Application '+ '(Regulatory Affairs Associate,  Full-time)',
	  text: 'name: '+ejsname + '\n' +'email: ' + ejsemail + '\n' + 'resume: ' + resume + '\n' +'message: ' + ejsmessage,
	  attachments:[ 
	   { 
	    filename : ejsname + '_RAA.pdf', 
	    path: 'files/1.pdf'
	   }, 
	  ] 
	 }; 
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.locals.alert = 'success';
	    res.render('careers/jobopenning/RAA');
	  }
	});
});


router.post('/jobopenning2', upload.single('resume'), (req, res, next) => {
  var ejsname = req.body.name;
  var ejsemail = req.body.email;
  var jobtitle = req.body.jobtitle;
  var ejsmessage = req.body.message;

  // console.log(req.body.name);
	var mailOptions = {
	  from: 'IT.Group@crconc.org',
	  to: 'IT.Group@crconc.org',
	  subject: 'Application '+ jobtitle + 'Internship',
	  text: 'name: '+ejsname + '\n' +'email: ' + ejsemail + '\n'  +'message: ' + ejsmessage,
	  attachments:[ 
	   { 
	    filename : ejsname + '_' + jobtitle + ' Internship.pdf', 
	    path: 'files/1.pdf'
	   }, 
	  ] 
	 }; 
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.locals.alert = 'success';
	    res.render('careers/jobopenning2');
	  }
	});
});



module.exports = router;

// <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>


