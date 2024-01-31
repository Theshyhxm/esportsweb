// 获取SEND按钮和倒计时显示元素
var sendButton = document.getElementById('sendButton');
var countdownElement = document.getElementById('countdown');
var isCounting = false; // 用于判断是否正在倒计时
var seconds = 60; // 总时间（秒）
var intervalId; // 用于存储定时器的ID

// 点击SEND按钮后开始倒计时并禁用按钮
sendButton.addEventListener('click', function() {
    if (!isCounting) {
        isCounting = true;
        countdownElement.innerHTML = "请"+seconds + '秒后再尝试发送'; // 显示剩余时间
        seconds--; // 减少剩余时间
        intervalId = setInterval(function() {
            countdownElement.innerHTML = "请"+seconds + '秒后再尝试发送'; // 更新剩余时间
            seconds--; // 减少剩余时间
            if (seconds < 0) {
                clearInterval(intervalId); // 倒计时结束，清除定时器
                seconds=60;
                countdownElement.innerHTML = ''; // 显示倒计时结束的信息
                isCounting = false; // 结束倒计时状态
                sendButton.disabled = false
            }
        }, 1000); // 每秒更新一次倒计时
        sendButton.disabled = true; // 禁用SEND按钮，防止重复点击
    }
});