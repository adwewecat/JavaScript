// Đối tượng 

function Validator(option) {
    var formElement = document.querySelector(option.form);
    if (formElement) {
        option.rules.forEach(function(rule) {
            // console.log(option.rules);
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                inputElement.onblur = function() {
                    var errorMessage =
                }
            }
        })
    }
}



// Định nghĩa rules
// Nguyên tắc rules 
// 1. Khi có lỗi: trả ra messae lỗi
// 2. Khi ko lỗi : ko trả 
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : "Vui Lòng Nhập Trường Này"
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function() {},
    };
};