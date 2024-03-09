// 获取DOM元素
const messageBox = document.getElementById('messageBox');
const messageContent = document.getElementById('messageContent');
const showButton = document.getElementById('showButton');
const hideButton = document.getElementById('hideButton');

// 显示消息的函数
 function showMessage(type, message) {
    // 设置消息类型和内容
    messageBox.className = `message-box ${type}`;
    messageContent.textContent = message;

    // 显示消息框
    messageBox.classList.add('show');
    //3s后自动关闭
     setTimeout(() => {
         hideMessage();
     }, 3000);
 }

// 隐藏消息的函数
function hideMessage() {
    // 隐藏消息框
    messageBox.classList.remove('show');
}

// 绑定按钮点击事件
showButton.addEventListener('click', function() {
    showMessage('success', '这是一条成功消息！');
});

hideButton.addEventListener('click', function() {
    hideMessage();
});