---
layout: page
title: Getting started - BootstrapValidator
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

<a href="https://github.com/nghuuphuoc/bootstrapvalidator/edit/gh-pages/getting-started.md" class="btn btn-info">Improve this page</a>



