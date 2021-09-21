// Đối tượng 

function Validator(option) {
    function Validator(inputElement, rule) {

    }
    var formElement = document.querySelector(option.form);
    if (formElement) {
        option.rules.forEach(function(rule) {
            // console.log(option.rules);
            var inputElement = formElement.querySelector(rule.selector)
            var errorElement = inputElement.parentElement.querySelector('.form-message')
            if (inputElement) {
                inputElement.onblur = function() {
                    var errorMessage = rule.test(inputElement.value)
                    if (errorMessage) {
                        errorElement.innerText = errorMessage
                        inputElement.parentElement.classList.add('invalid')
                    } else {
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove(
                            "invalid"
                        );
                    }
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