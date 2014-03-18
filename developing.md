---
layout: page
title: Developing - BootstrapValidator
permalink: /developing/
slug: developing
---

# Developing

This page helps you develop new validator as well as build the plugin.

## Writing new validator

A validator has to follow the syntax:

```javascript
(function($) {
    $.fn.bootstrapValidator.validators.<validatorName> = {
        /**
         * @param {BootstrapValidator} validator The validator plugin instance
         * @param {jQuery} $field The jQuery object represents the field element
         * @param {Object} options The validator options
         * @returns {boolean}
         */
        validate: function(validator, $field, options) {
            // You can get the field value
            // var value = $field.val();
            //
            // Perform validating
            // ...
            //
            // return true if the field value is valid
            // otherwise return false
        }
    };
}(window.jQuery));
```

```<validatorName>``` is the validator name.
Since the validators are distinct by the names, ```<validatorName>``` has to be different with [built-in validators](/validators/).

To apply the validator to particular field:

```javascript
$(form).bootstrapValidator({
    fields: {
        <fieldName>: {
            // Replace <validatorName> with the name of validator
            // <validatorOptions> will be passed as third parameter of the
            // validate(validator, $field, options) method
            <validatorName>: <validatorOptions>
        }
    }
});
```

For Rails, the input field is constructed from model name and field name. For example, user have email as field, when form helper render
view, the input field name will be ```'user[email]'```. The syntax for these is somewhat different as shown below:

```javascript
$(form).bootstrapValidator({
    fields: {
        'user[email]': {
            // Replace <validatorName> with the name of validator
            // <validatorOptions> will be passed as third parameter of the
            // validate(validator, $field, options) method
            <validatorName>: <validatorOptions>
        }
    }
});
```

To see how built-in validators are developed, you can look at their sources located at the [src/js/validator](https://github.com/nghuuphuoc/bootstrapvalidator/tree/master/src/js/validator) directory.

## Building

BootstrapValidator uses [grunt](http://gruntjs.com) to simplify building process.

From the BootstrapValidator root directory, install dependencies:

```bash
$ npm install
```

Then, uses grunt to build:

```bash
$ grunt
```

If you want grunt to generate scripts whenever the original scripts (located in ```src```) change, use the following command:

```bash
$ grunt watch
```

The generated scripts (including source and compressed versions) are placed inside the ```dist``` directory.

<a href="https://github.com/nghuuphuoc/bootstrapvalidator/edit/gh-pages/developing.md" class="btn btn-info">Improve this page</a>
