// Đối tượng 

function Validator(option) {
    var formElement = document.querySelector(option.form);
    if (formElement) {
        option.rules.forEach(function(rule) {
            // console.log(option.rules);
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                inputElement.onblur = function() {
                    inputElement.
                }
            }
        })
    }
}



// Định nghĩa rules
// Nguyên tắc rules 
// 1. Khi có lỗi: trả ra messae lỗi
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {

        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function() {},
    };
};