const express = require('express'),
  router = express.Router();
  path = require('path');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
	user: 'IT.Group@crconc.org',
	pass: 'develop@CRC'
	 }
	});


router.get('/quality',(req,res) => {
  res.render('services/quality');
});

router.get('/regulatory',(req,res) => {
  res.render('services/regulatory');
});

router.get('/clinical',(req,res) => {
  res.render('services/clinical');
});

router.get('/business',(req,res) => {
  res.render('services/business');
});


router.post('/quality', (req, res) => {
  var ejsname = req.body.name;
  var ejsemail = req.body.email;
  var ejssubject = req.body.subject;
  var ejsmessage = req.body.message;

  // console.log(req.body.name);
	var mailOptions = {
	  from: 'IT.Group@crconc.org',
	  to: 'IT.Group@crconc.org',
	  subject: 'Contact from '+ ejsname +'(about quality)',
	  text: 'name: '+ejsname + '\n' +'email: ' + ejsemail + '\n' + 'subject: ' + ejssubject + '\n' +'message: ' + ejsmessage
	};
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.render('services/quality');
	  }
	});
});

router.post('/regulatory', (req, res) => {
  var ejsname = req.body.name;
  var ejsemail = req.body.email;
  var ejssubject = req.body.subject;
  var ejsmessage = req.body.message;

  // console.log(req.body.name);
	var mailOptions = {
	  from: 'IT.Group@crconc.org',
	  to: 'IT.Group@crconc.org',
	  subject: 'Contact from '+ ejsname +'(about regulatory)',
	  text: 'name: '+ejsname + '\n' +'email: ' + ejsemail + '\n' + 'subject: ' + ejssubject + '\n' +'message: ' + ejsmessage
	};
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.render('services/regulatory');
	  }
	});
});

router.post('/clinical', (req, res) => {
  var ejsname = req.body.name;
  var ejsemail = req.body.email;
  var ejssubject = req.body.subject;
  var ejsmessage = req.body.message;

  // console.log(req.body.name);
	var mailOptions = {
	  from: 'IT.Group@crconc.org',
	  to: 'IT.Group@crconc.org',
	  subject: 'Contact from '+ ejsname +'(about clinical)',
	  text: 'name: '+ejsname + '\n' +'email: ' + ejsemail + '\n' + 'subject: ' + ejssubject + '\n' +'message: ' + ejsmessage
	};
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.render('services/clinical');
	  }
	});
});

router.post('/business', (req, res) => {
  var ejsname = req.body.name;
  var ejsemail = req.body.email;
  var ejssubject = req.body.subject;
  var ejsmessage = req.body.message;

  // console.log(req.body.name);
	var mailOptions = {
	  from: 'IT.Group@crconc.org',
	  to: 'IT.Group@crconc.org',
	  subject: 'Contact from '+ ejsname +'(about business)',
	  text: 'name: '+ejsname + '\n' +'email: ' + ejsemail + '\n' + 'subject: ' + ejssubject + '\n' +'message: ' + ejsmessage
	};
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.render('services/business');
	  }
	});
});





module.exports = router;