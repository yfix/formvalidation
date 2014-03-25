---
layout: validator
title: identical validator
permalink: /validators/identical/
slug: validators
---

# <a href="/validators/">Validators</a> / identical

Check if the value is the same as one of particular field

Option    | Type    | Description
----------|---------|------------
message   | String  | The error message
field (*) | String  | The name of field that will be used to compare with current one

## Live example

The following form requires the password and confirmation one to be the same using ```identical``` validator.

_Try to type in the form fields_

<form id="registerForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Password</label>
        <div class="col-lg-5">
            <input type="password" class="form-control" name="password" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-lg-3 control-label">Retype password</label>
        <div class="col-lg-5">
            <input type="password" class="form-control" name="confirmPassword" />
        </div>
    </div>
</form>

Form markup:

```html
<form id="registerForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Password</label>
        <div class="col-lg-5">
            <input type="password" class="form-control" name="password" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-lg-3 control-label">Retype password</label>
        <div class="col-lg-5">
            <input type="password" class="form-control" name="confirmPassword" />
        </div>
    </div>
</form>
```

Javascript:

```javascript
$(document).ready(function() {
    $('#registerForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            password: {
                validators: {
                    identical: {
                        field: 'confirmPassword',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }
                }
            }
        }
    });
});
```

<a href="{{ site.repository.docs_edit }}/validators/identical.md" class="btn btn-info">Improve this page</a>

<script>
$(document).ready(function() {
    $('#registerForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            password: {
                validators: {
                    identical: {
                        field: 'confirmPassword',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }
                }
            }
        }
    });
});
</script>