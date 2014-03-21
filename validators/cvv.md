---
layout: validator
title: cvv validator
permalink: /validators/cvv/
slug: validators
---

# <a href="/validators/">Validators</a> / cvv

Validate a CVV number

Option          | Type   | Description
----------------|--------|------------
message         | String | The error message
creditCardField | String | The credit card number field. It is ```null``` by default

If the ```creditCardField``` is set, the validator will check if the CVV number is suitable with the credit card number of not.

In the details, the American Express card only accepts 4 digits CVV number, while other cards only accept 3 digits CVV number.

<h2 id="example">Live example <a href="#example">#</a></h2>

The following form also validates the CVV number based on the credit card number.

For testing purpose, you can copy and paste the fake credit card number from [http://www.getcreditcardnumbers.com](http://www.getcreditcardnumbers.com)

<form id="paymentForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Credit card number</label>
        <div class="col-lg-5">
            <input type="text" class="form-control" name="ccNumber" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-lg-3 control-label">CVV</label>
        <div class="col-lg-2">
            <input type="text" class="form-control" name="cvvNumber" />
        </div>
    </div>
</form>

Form markup:

```html
<form id="paymentForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Credit card number</label>
        <div class="col-lg-5">
            <input type="text" class="form-control" name="ccNumber" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-lg-3 control-label">CVV</label>
        <div class="col-lg-2">
            <input type="text" class="form-control" name="cvvNumber" />
        </div>
    </div>
</form>
```

Javascript:

```javascript
$(document).ready(function() {
    $('#paymentForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            ccNumber: {
                validators: {
                    creditCard: {
                        message: 'The credit card number is not valid'
                    }
                }
            },
            cvvNumber: {
                validators: {
                    cvv: {
                        creditCardField: 'ccNumber',
                        message: 'The CVV number is not valid'
                    }
                }
            }
        }
    });
});
```

<a href="https://github.com/nghuuphuoc/bootstrapvalidator/edit/gh-pages/validators/cvv.md" class="btn btn-info">Improve this page</a>

<script>
$(document).ready(function() {
    $('#paymentForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            ccNumber: {
                validators: {
                    creditCard: {
                        message: 'The credit card number is not valid'
                    }
                }
            },
            cvvNumber: {
                validators: {
                    cvv: {
                        creditCardField: 'ccNumber',
                        message: 'The CVV number is not valid'
                    }
                }
            }
        }
    });
});
</script>