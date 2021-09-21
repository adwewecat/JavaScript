// Đối tượng 

function Validator(option) {
    var formElement = document.querySelector(option.form);
    if (formElement) {
        con
        option.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector)
        })
    }
}



// Định nghĩa rules
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function() {

        }
    }
}

Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function() {

        }
    };
};