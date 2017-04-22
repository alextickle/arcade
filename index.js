var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {
 response.render('index');
});

app.get('/:name', function (request, response){
  var name = request.params.name
  response.render(name);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
