var express = require('express');
var app = express();
var opn = require('opn');
var port = 3000;

app.use(express.static('public'));

app.get('*', function(req, res){
    res.sendFile(req.path, {root: __dirname+'/', dotfiles: 'deny'});
});

app.listen(port, () => {
    console.log(`App listening at port 3000`);
    opn("http://localhost:" + port)
});