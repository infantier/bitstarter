var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    var fs = require('fs');
    var content = fs.readFileSync('bitstarter.html', 'utf-8');
    response.send(content);
  });

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
