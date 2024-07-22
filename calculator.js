function clearDisplay() {
    document.getElementById('display').value = '';
}

// 刪除最後一個字符
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// 追加字符
function appendToDisplay(i) {
    document.getElementById('display').value += i;
}


function calculate(){
    const display = document.getElementById("display");

    try{
        display.value = eval(display.value);
    }catch (error) {
        // 如果 eval 函數拋出錯誤，則顯示 'Error'
        display.value = 'Error';
    }
}