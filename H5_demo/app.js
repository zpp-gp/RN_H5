/**
 * Created by pengguo on 2017/3/13.
 */
var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('trust proxy', function (ip) {
    if (ip === '127.0.0.1' || ip === '172.26.183.194') return true; // 受信的 IP 地址
    else return false;
})


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});