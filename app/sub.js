/**
 * Created by Administrator on 2016/11/8.
 */
//我们这里使用CommonJS的风格
function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world";
    return element;
}

module.exports = generateText;