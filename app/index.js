/**
 * Created by Administrator on 2016/11/8.
 */
require('./main.scss');
var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);
