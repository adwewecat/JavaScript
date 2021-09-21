// Đối tượng 

function Validator(option) {

    var le
        // Hàm thực hiện validator
    function Validator(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value)
        var errorElement = inputElement.parentElement.querySelector(option.errorSelector)
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

    //Lấy Element của form cần validate
    var formElement = document.querySelector(option.form);
    if (formElement) {
        option.rules.forEach(function(rule) {
            // console.log(option.rules);
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                // Xử lý trường hợp blur ra khỏi input (là bấm chuột ra chỗ khác)
                inputElement.onblur = function() {
                    Validator(inputElement, rule)
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(
                        option.errorSelector
                    );
                    errorElement.innerText = "";
                    inputElement.parentElement.classList.remove("invalid");
                }
            }
        })
    }
}



// Định nghĩa rules
// Nguyên tắc rules 
// 1. Khi có lỗi: trả ra messae lỗi
// 2. Khi ko lỗi : ko trả 
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || "Vui Lòng Nhập Trường Này";
        },
    };
};

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return mailformat.test(value) ? undefined : 'Trường Này Phải là Email'
        },
    };
}



Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : `Vui Lòng Nhập Tối Thiểu ${min} ký Tự`;
        },
    };
};




Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || "Giá Trị Nhập Vào Không Chính Xác";
        },
    };
};