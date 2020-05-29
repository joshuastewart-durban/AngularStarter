const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/angular-joshua-stewart'));
ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/angular-joshua-stewart/index.html'));
});
ngApp.listen(process.env.PORT || 8080);