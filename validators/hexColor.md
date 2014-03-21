---
layout: validator
title: hexColor validator
permalink: /validators/hex-color/
slug: validators
---

# <a href="/validators/">Validators</a> / hexColor

Validate a hex color

Option  | Type   | Description
--------|--------|------------
message | String | The error message

## Live example 1

<form id="colorForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Color</label>
        <div class="col-lg-3">
            <input type="text" class="form-control" name="color" />
        </div>
    </div>
</form>

Form markup:

```html
<form id="colorForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Color</label>
        <div class="col-lg-3">
            <input type="text" class="form-control" name="color" />
        </div>
    </div>
</form>
```

Javascript:

```javascript
$(document).ready(function() {
    $('#colorForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            color: {
                validators: {
                    hexColor: {
                        message: 'The color code is not valid'
                    }
                }
            }
        }
    });
});
```

## Live example 2: Use with a color picker

The following form uses a [Bootstrap Color Picker](http://mjolnic.github.io/bootstrap-colorpicker/):

_Try to type an invalid color code and choose the picker. The picker automatically fixes or reset the color, and the error message is gone_

<link href="/vendor/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css" rel="stylesheet" />
<form id="colorPickerForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Color</label>
        <div class="col-lg-4">
            <div class="input-group" id="colorPicker">
                <input type="text" class="form-control" name="color" />
                <span class="input-group-addon" style="color: #fff">Pick a color</span>
            </div>
        </div>
    </div>
</form>

> In order to use [Bootstrap Color Picker](http://mjolnic.github.io/bootstrap-colorpicker/), don't forget to add the required CSS, JS to your page:
>
> ```html
> <link href="/vendor/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css" rel="stylesheet" />
> <script src="/vendor/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"></script>
> ```

Form markup:

```html
<form id="colorPickerForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Color</label>
        <div class="col-lg-4">
            <div class="input-group" id="colorPicker">
                <input type="text" class="form-control" name="color" />
                <span class="input-group-addon" style="color: #fff">Pick a color</span>
            </div>
        </div>
    </div>
</form>
```

Javascript:

```javascript
$(document).ready(function() {
    $('#colorPickerForm').bootstrapValidator({
        fields: {
            color: {
                validators: {
                    hexColor: {
                        message: 'The color code is not valid'
                    }
                }
            }
        }
    });

    $('#colorPicker')
        .colorpicker()
        .on('showPicker changeColor', function(e) {
            // Re-validate the color when user choose a color from the color picker
            $('#colorPickerForm')
                .data('bootstrapValidator')                     // Get BootstrapValidator instance
                .updateStatus('color', 'NOT_VALIDATED', null)   // Set the color as not validated yet
                .validateField('color');                        // and validate the color
        });
});
```

<a href="https://github.com/nghuuphuoc/bootstrapvalidator/edit/gh-pages/validators/hexColor.md" class="btn btn-info">Improve this page</a>

<script src="/vendor/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"></script>
<script>
$(document).ready(function() {
    $('#colorForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            color: {
                validators: {
                    hexColor: {
                        message: 'The color code is not valid'
                    }
                }
            }
        }
    });

    $('#colorPickerForm').bootstrapValidator({
        fields: {
            color: {
                validators: {
                    hexColor: {
                        message: 'The color code is not valid'
                    }
                }
            }
        }
    });

    $('#colorPicker')
        .colorpicker()
        .on('showPicker changeColor', function(e) {
            $('#colorPickerForm').data('bootstrapValidator').updateStatus('color', 'NOT_VALIDATED', null).validateField('color');
        });
});
</script>