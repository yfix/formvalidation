---
layout: validator
title: date validator
permalink: /validators/date/
slug: validators
---

# <a href="/validators/">Validators</a> / date

Validate a date

Option     | Type   | Description
-----------|--------|------------
message    | String | The error message
format (*) | String | The date format. It is ```MM/DD/YYYY```, by default

The ```format``` can be one of the following values:

* YYYY/DD/MM
* YYYY/DD/MM h:m A
* YYYY/MM/DD
* YYYY/MM/DD h:m A
* YYYY-DD-MM
* YYYY-DD-MM h:m A
* YYYY-MM-DD
* YYYY-MM-DD h:m A
* MM/DD/YYYY
* MM/DD/YYYY h:m A
* DD/MM/YYYY
* DD/MM/YYYY h:m A
* MM-DD-YYYY
* MM-DD-YYYY h:m A
* DD-MM-YYYY
* DD-MM-YYYY h:m A

Token | Description
------|------------
MM    | Month number
DD    | Day of month
YYYY  | 4 digit year
h     | 12 hour time
m     | Minutes
A     | AM/PM

> These tokens are the same as one defined by [momentjs](http://momentjs.com/docs/#/displaying/format/)

It's possible to support other date format by using [callback](/validators/callback/) validator as shown in the [Custom format](#custom-format-example) example.

The date validator also checks the number of days in February of leap year.
For example, _02/29/2000_ is valid date, while _02/29/2001_ is invalid one.

<h2 id="example">Live example 1 <a href="#example">#</a></h2>

The following form might be used in a profile setting page:

_Try to type in the form field_

<form id="profileForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Birthday</label>
        <div class="col-lg-3">
            <input type="text" class="form-control" name="birthday" />
            <span class="help-block">YYYY/MM/DD</span>
        </div>
    </div>
</form>

Form markup:

```html
<form id="profileForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Birthday</label>
        <div class="col-lg-3">
            <input type="text" class="form-control" name="birthday" />
            <span class="help-block">YYYY/MM/DD</span>
        </div>
    </div>
</form>
```

Javascript:

```javascript
$(document).ready(function() {
    $('#profileForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            birthday: {
                validators: {
                    date: {
                        format: 'YYYY/DD/MM',
                        message: 'The value is not a valid date'
                    }
                }
            }
        }
    });
});
```

<h2 id="date-picker-example">Live example 2: Use with date time picker <a href="#date-picker-example">#</a></h2>

The form below is an example of using the date validator with [Bootstrap Datetime Picker](http://eonasdan.github.io/bootstrap-datetimepicker/):

<link href="/vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
<style type="text/css">
.form-horizontal .has-feedback .input-group .form-control-feedback {
    top: 0;
    right: -30px;
}
</style>
<form id="meetingForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Meeting time</label>
        <div class="col-lg-4">
            <div class="input-group date" id="datetimePicker">
                <input type="text" class="form-control" name="meeting" />
                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
            </div>
            <span class="help-block">MM/DD/YYYY h:m A</span>
        </div>
    </div>
</form>

> To use [Bootstrap Datetime Picker](http://eonasdan.github.io/bootstrap-datetimepicker/), you must insert required CSS, JS to your page:
>
> ```html
> <link href="/vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
> <script src="/vendor/momentjs/moment.min.js"></script>
> <script src="/vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
> ```

Form markup:

```html
<form id="meetingForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Meeting time</label>
        <div class="col-lg-4">
            <div class="input-group date" id="datetimePicker">
                <input type="text" class="form-control" name="meeting" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
            <span class="help-block">MM/DD/YYYY h:m A</span>
        </div>
    </div>
</form>
```

Javascript:

```javascript
$(document).ready(function() {
    $('#datetimePicker').datetimepicker();

    $('#meetingForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            meeting: {
                validators: {
                    date: {
                        format: 'MM/DD/YYYY h:m A',
                        message: 'The value is not a valid date'
                    }
                }
            }
        }
    });

    $('#datetimePicker')
        .on('dp.change dp.show', function(e) {
            // Validate the date when user change it
            $('#meetingForm')
                // Get the bootstrapValidator instance
                .data('bootstrapValidator')
                // Mark the field as not validated, so it'll be re-validated when the user change date
                .updateStatus('meeting', 'NOT_VALIDATED', null)
                // Validate the field
                .validateField('meeting');
        });
});
```

<h2 id="custom-format-example">Live example 3: Custom format <a href="#custom-format-example">#</a></h2>

This example illustrates the ability of validating date in custom format by using the [callback](/validators/callback/) validator and [momentjs](http://momentjs.com/) to parse/validate.

<form id="customFormatForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-5 control-label">What's US independence day?</label>
        <div class="col-lg-3">
            <input type="text" class="form-control" name="independenceDay" />
            <span class="help-block">MMM D (Sep 6, for example)</span>
        </div>
    </div>
</form>

Form markup:

```html
<!-- Include the momentjs library to use later -->
<script src="/vendor/momentjs/moment.min.js"></script>

<form id="customFormatForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-5 control-label">What's US independence day?</label>
        <div class="col-lg-3">
            <input type="text" class="form-control" name="independenceDay" />
            <span class="help-block">MMM D (Sep 6, for example)</span>
        </div>
    </div>
</form>
```

Javascript:

```javascript
$(document).ready(function() {
    $('#customFormatForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            independenceDay: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: function(value, validator) {
                            var m = new moment(value, 'MMMM D', true);
                            // Check if the input value follows the MMMM D format
                            if (!m.isValid()) {
                                return false;
                            }
                            // US independence day is July 4
                            return (m.months() == 6 && m.date() == 4);
                        }
                    }
                }
            }
        }
    });
});
```

<a href="{{ site.repository.docs_edit }}/validators/date.md" class="btn btn-info">Improve this page</a>

<script src="/vendor/momentjs/moment.min.js"></script>
<script src="/vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
<script>
$(document).ready(function() {
    $('#profileForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            birthday: {
                validators: {
                    date: {
                        format: 'YYYY/DD/MM',
                        message: 'The value is not a valid date'
                    }
                }
            }
        }
    });

    $('#datetimePicker').datetimepicker();

    $('#meetingForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            meeting: {
                validators: {
                    date: {
                        format: 'MM/DD/YYYY h:m A',
                        message: 'The value is not a valid date'
                    }
                }
            }
        }
    });

    $('#datetimePicker').on('dp.change dp.show', function(e) {
        $('#meetingForm')
            .data('bootstrapValidator')
            .updateStatus('meeting', 'NOT_VALIDATED', null)
            .validateField('meeting');
    });

    $('#customFormatForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            independenceDay: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: function(value, validator) {
                            var m = new moment(value, 'MMMM D', true);
                            if (!m.isValid()) {
                                return false;
                            }
                            return (m.months() == 6 && m.date() == 4);
                        }
                    }
                }
            }
        }
    });
});
</script>