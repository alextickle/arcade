var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
 response.render('index');
});

app.get('/:name', function (request, response){
  var name = request.params.name
  response.render(name);
});

app.listen(process.argv[2], function () {
  console.log("listening at port " + process.argv[2]);
});
