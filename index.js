var express = require('express');
var path = require('path');
var app = express();

const license =[
	    {
		            imgLink : 'public/img_pricing01.png',
		            title : "Pay-Per-View",
		            text : "Usage-based billing for variable traffic to your commercial project.",
		            priceM :"$1,000",
		            includedV: "0 included views",
		            priceV : "$0.01"
		  },
	    {
		            imgLink : 'public/img_pricing02.png',
		            title : "Standard Bundle",
		            text : "Includes a pre-paid bundle for standard traffic to your commercial project.",
		            priceM :"$3,000",
		            includedV: "500k included views",
		            priceV : "$0.01"
		  },
	    {
		            imgLink : 'public/img_pricing03.png',
		            title : "High Traffic PPV",
		            text : "Significantly discounted usage-based billing for high volume traffic to your commercial project.",
		            priceM :"$6,000",
		            includedV: "0 included views",
		            priceV : "$0.0025"
		  },
	    {
		            imgLink : 'public/img_pricing04.png',
		            title : "High Traffic Bundle",
		            text : "High Traffic usage-based discounts plus a 5-million-view pre-paid bundle for high volume traffic to your commercial project.",
		            priceM :"$6,000",
		            includedV: "5m included views",
		            priceV : "$0.0025"
		  }
];

app.get('/', function(req, res){
	   res.send("Hello world!");
});

app.get('/license', function(req, res){
	   res.send(license);
});

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3000);
