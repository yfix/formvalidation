---
layout: validator
title: choice validator
permalink: /validators/choice/
slug: validators
---

# <a href="/validators/">Validators</a> / choice

Check if the number of checked boxes are less or more than a given number

Option  | Type   | Description
--------|--------|------------
message | String | The error message
min     | Number | The minimum number of check boxes required to be checked
max     | Number | The maximum number of check boxes required to be checked. At least one of ```min``` and ```max``` is required

## Live example

The following form asks a developer to choose 2-4 programming languages which he/she is good at:

_Try to click the checkbox_

<form id="interviewForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Programming Languages</label>
        <div class="col-lg-3">
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="net" /> .Net
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="java" /> Java
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="c" /> C/C++
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="php" /> PHP
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="perl" /> Perl
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="ruby" /> Ruby
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="python" /> Python
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="javascript" /> Javascript
                </label>
            </div>
        </div>
    </div>
</form>

Form markup:

```html
<form id="interviewForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Programming Languages</label>
        <div class="col-lg-3">
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="net" /> .Net
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="java" /> Java
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="c" /> C/C++
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="php" /> PHP
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="perl" /> Perl
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="ruby" /> Ruby
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="python" /> Python
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="languages[]" value="javascript" /> Javascript
                </label>
            </div>
        </div>
    </div>
</form>
```

Javascript:

```javascript
$(document).ready(function() {
    $('#interviewForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'languages[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 4,
                        message: 'Please choose 2 - 4 programming languages you are good at'
                    }
                }
            }
        }
    });
});
```

<a href="{{ site.repository.docs_edit }}/validators/choice.md" class="btn btn-info">Improve this page</a>

<script>
$(document).ready(function() {
    $('#interviewForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'languages[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 4,
                        message: 'Please choose 2 - 4 programming languages you are good at'
                    }
                }
            }
        }
    });
});
</script>