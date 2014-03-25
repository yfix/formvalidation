---
layout: validator
title: different validator
permalink: /validators/different/
slug: validators
---

# <a href="/validators/">Validators</a> / different

Return true if the input value is different with given field's value

Option    | Type   | Description
----------|--------|------------
message   | String | The error message
field (*) | String | The name of field that will be used to compare with current one

## Live example

The registration form below doesn't allow the username and password to be the same:

_Try to type same value in both the username and password fields_

<form id="registerForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Username</label>
        <div class="col-lg-5">
            <input type="text" class="form-control" name="username" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-lg-3 control-label">Password</label>
        <div class="col-lg-5">
            <input type="password" class="form-control" name="password" />
        </div>
    </div>
</form>

Form markup:

```html
<form id="registerForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Username</label>
        <div class="col-lg-5">
            <input type="text" class="form-control" name="username" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-lg-3 control-label">Password</label>
        <div class="col-lg-5">
            <input type="password" class="form-control" name="password" />
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
            username: {
                validators: {
                    different: {
                        field: 'password',
                        message: 'The username and password cannot be the same as each other'
                    }
                }
            },
            password: {
                validators: {
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username'
                    }
                }
            }
        }
    });
});
```

<a href="{{ site.repository.docs_edit }}/validators/different.md" class="btn btn-info">Improve this page</a>

<script>
$(document).ready(function() {
    $('#registerForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    different: {
                        field: 'password',
                        message: 'The username and password cannot be the same as each other'
                    }
                }
            },
            password: {
                validators: {
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username'
                    }
                }
            }
        }
    });
});
</script>