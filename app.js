var express = require('express');
var path = require('path');
var app = express();
var exphbs = require('express-handlebars');


//------------------------------------------------
// initializing app
//------------------------------------------------

app.set('views', path.join(__dirname, 'views') );
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//-----------------------------------------------------
//   APP ROUTES
//-----------------------------------------------------

app.get('/', function (req, res) {
   	res.render("index", {'page_content' : '<br> welcome to our shpiing site <br>', 'published': true});
})

app.get('/clothes', function (req, res) {
   	res.render("index", {
   		'page_content' : '<br> 50% sale on all clothes <br>',
   		 'published': true,
   		 'data_items': ['Jean', 'Shirt', 'Pant'],
   		});
})

app.get('/electronics', function (req, res) {
   	res.render("index", {'page_content' : '<br> mobile, tv, computer <br>', 'published': true});
})

app.get('/stationary', function (req, res) {
   	res.render("index", {'page_content' : '<br> notebook, pen, pencil <br>', 'published': true});
})
//------------------------------------------------
// starting server
//------------------------------------------------
var port = 3000;
app.listen(port, function () {
	console.log('Server started at port: ' + port );
});