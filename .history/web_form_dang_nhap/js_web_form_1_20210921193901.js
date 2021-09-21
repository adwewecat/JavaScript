// Đối tượng 

function Validator(option) {

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRule = {}
        // Hàm thực hiện validator
    function Validator(inputElement, rule) {
        // var errorMessage = rule.test(inputElement.value)
        var errorMessage
        var errorElement = getParent(inputElement, option.formGroupselector).querySelector(option.errorSelector);

        //lấy ra các rule của selector
        var rules = selectorRule[rule.selector]

        //Lặp qua từng rule và kiểm tra
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'));
                    break;
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            //nếu có lỗi thì bỏ qua
            if (errorMessage) break
        }


        if (errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove(
                "invalid"
            )
        }
        return !errorMessage;
    }

    //Lấy Element của form cần validate
    var formElement = document.querySelector(option.form);
    if (formElement) {

        //Khi submit form 
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            //Thực hiện lặp qua từng rule và validate
            option.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = Validator(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            })



            if (isFormValid) {
                if (typeof option.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll(
                        "[name]:not([disabled])"
                    );
                    //convet từ nodeList thành Array List
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        values[input.name] = input.value;
                        return values;
                    }, {});
                    option.onSubmit(formValues);
                } else {
                    formElement.onsubmit();
                }
            }
        }

        //lặp qua mỗi rule và xử lý
        option.rules.forEach(function(rule) {


            // Lưu lại các Rule cho mỗi input
            if (Array.isArray(selectorRule[rule.selector])) {
                selectorRule[rule.selector].push(rule.test)
            } else {
                selectorRule[rule.selector] = [rule.test]
            }



            var inputElements = formElement.querySelectorAll(rule.selector)

            Array.form(inputElements).forEach(function(inputElement) {

            })

            if (inputElement) {
                // Xử lý trường hợp blur ra khỏi input (là bấm chuột ra chỗ khác)
                inputElement.onblur = function() {
                    Validator(inputElement, rule)
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = getParent(inputElement, option.formGroupselector).querySelector(
                        option.errorSelector
                    );
                    errorElement.innerText = "";
                    getParent(inputElement, option.formGroupselector).classList.remove("invalid");
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
            return value ? undefined : message || "Vui Lòng Nhập Trường Này";
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