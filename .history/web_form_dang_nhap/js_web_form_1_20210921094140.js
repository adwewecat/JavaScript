// Đối tượng 

function Validator(option) {
    var formElement = document.querySelector(option.form);
    console.log(option.rules[1]);
    if (formElement) {
        option.rules.forEach(function(rule) {
            console.log(option.rules[1]);
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