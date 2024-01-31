export  function  numFilter(value) {
    // 截取当前数据到小数点后两位
    let tempVal = parseFloat(value).toFixed(3);
    return tempVal.substring(0, tempVal.length - 1);
}