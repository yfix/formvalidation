---
layout: validator
title: callback validator
permalink: /validators/callback/
slug: validators
---

# <a href="/validators/">Validators</a> / callback

Return the validity from a callback method

Option       | Type     | Description
-------------|----------|------------
message      | String   | The error message
callback (*) | Function | The callback method

The callback method must follow the format below:

```javascript
function(fieldValue, validator) {
    // fieldValue is the value of field
    // validator is instance of BootstrapValidator

    // Check the field validity
    // return true or false
}
```

## Live example

In the following form, user is asked to enter a correct answer of simple operation which is generated randomly:

<form id="captchaForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label" id="captchaOperation"></label>
        <div class="col-lg-2">
            <input type="text" class="form-control" name="captcha" />
        </div>
    </div>
</form>

Form markup:

```html
<form id="captchaForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label" id="captchaOperation"></label>
        <div class="col-lg-2">
            <input type="text" class="form-control" name="captcha" />
        </div>
    </div>
</form>
```

Javascript:

```javascript
$(document).ready(function() {
    // Return a random number between min and max
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // Generate a sum of two random numbers
    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));

    $('#captchaForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            captcha: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: function(value, validator) {
                            // Determine the numbers which are generated in captchaOperation
                            var items = $('#captchaOperation').html().split(' '),
                                sum   = parseInt(items[0]) + parseInt(items[2]);
                            return value == sum;
                        }
                    }
                }
            }
        }
    });
});
```

<a href="https://github.com/nghuuphuoc/bootstrapvalidator/edit/gh-pages/validators/callback.md" class="btn btn-info">Improve this page</a>

<script>
$(document).ready(function() {
    // Return a random number between min and max
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // Generate a sum of two random numbers
    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));

    $('#captchaForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            captcha: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: function(value, validator) {
                            // Determine the numbers which are generated in captchaOperation
                            var items = $('#captchaOperation').html().split(' '),
                                sum   = parseInt(items[0]) + parseInt(items[2]);
                            return value == sum;
                        }
                    }
                }
            }
        }
    });
});
</script>