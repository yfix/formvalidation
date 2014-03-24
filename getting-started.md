---
layout: page
title: Getting started
permalink: /getting-started/
slug: getting-started
---

# Getting started

## Download

You can download the latest version from the [Releases](https://github.com/nghuuphuoc/bootstrapvalidator/releases) page or use [bower](http://bower.io) to install BootstrapValidator:

```bash
$ bower install bootstrapValidator
```

## What's included?

```
bootstrapvalidator/
├── dist
│   ├── css
│   │   ├── bootstrapValidator.css
│   │   └── bootstrapValidator.min.css
│   └── js
│       ├── bootstrapValidator.js
│       └── bootstrapValidator.min.js
└── src
    ├── css
    │   ├── bootstrapValidator.css
    │   └── bootstrapValidator.min.css
    └── js
        ├── validator
        │   ├── between.js
        │   ├── callback.js
        │   ├── choice.js
        │   └── ...
        └── bootstrapValidator.js
```

The ```src``` directory consists of the original source files. ```src/js/bootstrapValidator.js``` is not compressed and doesn't include any validators.

The ```dist``` directory consists of files which is combined and compressed.
```dist/js/bootstrapValidator(.min).js``` includes all validators.
It should be used in the production site.

## Usage

It takes only 3 steps to use the plugin:

### Including library

Since the __BootstrapValidator__ plugin requires jQuery and Bootstrap 3, you have to include the required CSS and JS files to your page:

```html
<link rel="stylesheet" href="/path/to/bootstrap/css/bootstrap.css"/>
<link rel="stylesheet" href="/path/to/dist/js/bootstrapValidator.min.css"/>

<script type="text/javascript" src="/path/to/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/path/to/bootstrap/js/bootstrap.min.js"></script>
```

Next, requires the plugin javascript file:

```html
// Either use the compressed version (recommended in the production site)
<script type="text/javascript" src="/path/to/dist/js/bootstrapValidator.min.js"></script>

// Or use the original one with all validators included
<script type="text/javascript" src="/path/to/dist/js/bootstrapValidator.js"></script>

// Or use the plugin with required validators
<script type="text/javascript" src="/path/to/src/js/bootstrapValidator.js"></script>
<script type="text/javascript" src="/path/to/src/js/validator/...validator..."></script>
```

### Writing form

Since BootstrapValidator is designed to use with Bootstrap, your form must be structured using Bootstrap classes.

The plugin supports all possible kind of Bootstrap form, including:

__Basic form__

_Try to type in the form fields_

<div class="row">
    <div class="col-lg-6 col-lg-offset-3">
        <form class="registerForm">
            <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" name="username" />
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="text" class="form-control" name="email" />
            </div>
        </form>
    </div>
</div>

```html
<form>
    <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" name="username" />
    </div>
    <div class="form-group">
        <label>Email address</label>
        <input type="text" class="form-control" name="email" />
    </div>
</form>
```

__Inline form__

<div class="row">
    <div class="col-lg-6 col-lg-offset-3">
        <form class="form-inline registerForm" style="margin-bottom: 20px;">
            <div class="form-group">
                <input type="text" class="form-control" name="username" placeholder="Username" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="email" placeholder="Email address" />
            </div>
        </form>
    </div>
</div>

```html
<form class="form-inline">
    <div class="form-group">
        <input type="text" class="form-control" name="username" placeholder="Username" />
    </div>
    <div class="form-group">
        <input type="text" class="form-control" name="email" placeholder="Email address" />
    </div>
</form>
```

__Horizontal form__

<div class="row">
    <div class="col-lg-6 col-lg-offset-3">
        <form class="form-horizontal registerForm">
            <div class="form-group">
                <label class="col-lg-3 control-label">Username</label>
                <div class="col-lg-9">
                    <input type="text" class="form-control" name="username" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-3 control-label">Email address</label>
                <div class="col-lg-9">
                    <input type="text" class="form-control" name="email" />
                </div>
            </div>
        </form>
    </div>
</div>

```html
<form class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Username</label>
        <div class="col-lg-9">
            <input type="text" class="form-control" name="username" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-3 control-label">Email address</label>
        <div class="col-lg-9">
            <input type="text" class="form-control" name="email" />
        </div>
    </div>
</form>
```

It also supports multiple fields on the same row:

<div class="row">
    <div class="col-lg-6 col-lg-offset-3">
        <form class="form-horizontal registerForm">
            <div class="form-group">
                <label class="col-lg-3 control-label">Account</label>
                <div class="col-lg-4">
                    <input type="text" class="form-control" name="username" placeholder="Username" />
                </div>
                <div class="col-lg-4">
                    <input type="text" class="form-control" name="email" placeholder="Email address" />
                </div>
            </div>
        </form>
    </div>
</div>

```html
<form class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Account</label>
        <div class="col-lg-4">
            <input type="text" class="form-control" name="username" placeholder="Username" />
        </div>
        <div class="col-lg-4">
            <input type="text" class="form-control" name="email" placeholder="Email address" />
        </div>
    </div>
</form>
```

### Calling the plugin

Call the plugin to validate the form as following:

```javascript
$(document).ready(function() {
    $(<form Selector>).bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: ...,
        submitButtons: 'button[type="submit"]',
        submitHandler: null,
        live: 'enabled',
        fields: ...
    });
});
```

For example, to validate the sample registration form above, the plugin might be called as:

```javascript
$(document).ready(function() {
    $('#registerForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            }
        }
    });
});
```

Look at the [Settings](/settings/) page to see the meaning of plugin options.

<a href="https://github.com/nghuuphuoc/bootstrapvalidator/edit/gh-pages/getting-started.md" class="btn btn-info">Improve this page</a>

<script>
$(document).ready(function() {
    $('.registerForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            }
        }
    });
});
</script>



