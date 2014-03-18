---
layout: post
title: API - BootstrapValidator
permalink: /api/
slug: api
---

# API

This page describes the public methods provided by the plugin.

After initializing the form with the plugin using ```$(form).bootstrapValidator(options)```, you can retrieve the BootstrapValidator instance by

```javascript
var bootstrapValidator = $(form).data('bootstrapValidator');
```

## validate

```validate()```: Validate form manually. It is useful when you want to validate form by clicking a button or a link instead of a submit buttons.

```javascript
$(form).bootstrapValidator(options).bootstrapValidator('validate');

// or
$(form).bootstrapValidator(options);
$(form).data('bootstrapValidator').validate();
```

## isValid

```isValid()```: Returns ```true``` if all form fields are valid. Otherwise, returns ```false```.

Ensure that the ```validate``` method is already called after calling this one.

## updateStatus

```updateStatus(field, status, validatorName)```: Update validator result for given field

Parameter     | Type          | Description
--------------|---------------|------------
field         | String/jQuery | The field name or field element
status        | String        | Can be ```NOT_VALIDATED```, ```VALIDATING```, ```INVALID``` or ```VALID```
validatorName | String        | The validator name. If ```null```, the method updates validity result for all validators

This method is useful when you want to use BootstrapValidator with other plugins such as [Date Picker](http://eternicode.github.io/bootstrap-datepicker/),
[Datetime Picker](http://eonasdan.github.io/bootstrap-datetimepicker/), [Select2](http://ivaynberg.github.io/select2/), etc.

By default, the plugin doesn't re-validate a field once it is already validated and marked as a valid one. When using with other plugins,
the field value is changed and therefore need to be re-validated.

The following example describes how to re-validate a field which uses with [Datetime Picker](http://eonasdan.github.io/bootstrap-datetimepicker/):

_The form markup_:

```html
<form id="defaultForm" method="post" class="form-horizontal">
    ...
    <div class="form-group">
        <label class="col-lg-3 control-label"><a href="http://eonasdan.github.io/bootstrap-datetimepicker/">DateTime Picker</a></label>
        <div class="col-lg-5">
            <div class="input-group date" id="datetimePicker">
                <input type="text" class="form-control" name="datetimePicker" />
                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
            </div>
        </div>
    </div>
    ...
</form>
```

_Javascript_:

```javascript
<script type="text/javascript">
$(document).ready(function() {
    $('#datetimePicker').datetimepicker();

    $('#defaultForm').bootstrapValidator({
        fields: {
            ...
            datetimePicker: {
                validators: {
                    notEmpty: {
                        message: 'The date is required and cannot be empty'
                    },
                    date: {
                        format: 'MM/DD/YYYY h:m A'
                    }
                }
            }
        }
    });

    $('#datetimePicker')
        .on('dp.change dp.show', function(e) {
            // Validate the date when user change it
            $('#defaultForm')
                // Get the bootstrapValidator instance
                .data('bootstrapValidator')
                // Mark the field as not validated, so it'll be re-validated when the user change date
                .updateStatus('datetimePicker', 'NOT_VALIDATED', null)
                // Validate the field
                .validateField('datetimePicker');
        });
});
</script>
```

## enableFieldValidators

```enableFieldValidators(field, enabled)```: Enable/disable all validators to given field

Parameter | Type    | Description
----------|---------|------------
field     | String  | The field name
enabled   | Boolean | If ```true```, enable field validators. If ```false```, disable field validators

## resetForm

```resetForm(resetFormData)```: Reset form.

It hides all error elements and feedback icons. All the fields are marked as not validated yet.

Parameter     | Type    | Description
--------------|---------|------------
resetFormData | Boolean | If ```true```, the method resets the fields which have validator rules.

```javascript
$(form).bootstrapValidator(options);
$(form).data('bootstrapValidator').resetForm();
```
