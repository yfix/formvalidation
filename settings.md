---
layout: post
title: Settings - BootstrapValidator
permalink: /settings/
slug: settings
---

# Settings

```javascript
$(<form Selector>).bootstrapValidator({
    message: 'This value is not valid',
    feedbackIcons: ...,
    submitButtons: 'button[type="submit"]',
    submitHandler: null,
    live: 'enabled',
    fields: ...
});
```

## message

The default error message for all fields. You can specify the error message for any fields

## feedbackIcons

Indicate valid/invalid/validating icons based on the field validity.

This feature requires [Bootstrap v3.1.0 or later](http://getbootstrap.com/css/#forms-control-validation).
Since Bootstrap doesn't provide any methods to know its version, this option cannot be on/off automatically.
In other word, to use this feature you have to upgrade your Bootstrap to v3.1.0 or later.

It supports [Glyphicons](http://getbootstrap.com/components/#glyphicons) (included in Bootstrap):

```javascript
feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
}
```

and [FontAwesome](http://fontawesome.io/icons) icons (don't forget to insert FontAwesome CSS in your ```head```):

```javascript
feedbackIcons: {
    valid: 'fa fa-check',
    invalid: 'fa fa-times',
    validating: 'fa fa-refresh'
}
```

By default, these icons are not set.

## submitButtons

The submit buttons selector. These buttons will be disabled when the form input are invalid

## submitHandler

Custom submit handler:

```javascript
submitHandler: function(validator, form, submitButton) {
}
```

Parameter    | Type                 | Description
-------------|----------------------|------------
validator    | BootstrapValidator   | The instance of BootstrapValidator
form         | jQuery               | Representing the current form
submitButton | jQuery               | Representing the submit button which is clicked

This option is useful when you want to use Ajax to submit the form data:

```javascript
submitHandler: function(validator, form, submitButton) {
    // Use Ajax to submit form data
    $.post(form.attr('action'), form.serialize(), function(result) {
        // ... process the result ...
    }, 'json');
}
```

By default, ```submitHandler``` is ```null```.

## live ##

Live validating mode. Can be one of 3 values:

* ```enabled```: The plugin validates fields as soon as they are changed
* ```disabled```: Disable the live validating. The error messages are only shown after the form is submitted
* ```submitted```: The live validating is enabled after the form is submitted

## fields

The fields which need to be validated.

```javascript
fields: {
    ...
    <fieldName>: {
        message: '',
        enabled: true,

        // Array of validators
        validators: {
            ...
            <validatorName>: <validatorOptions>
            ...
        }
    }
    ...
}
```

Replace the ```<fieldName>``` with the field name, which is the value of ```name``` attribute.
The validator options for each field include:

Option     | Type    | Description
-----------|---------|------------
message    | String  | The default error message for the field
enabled    | Boolean | Enable or disable the field validators. By default it is set as ```true```
validators | Object  | Map the validator name (```<validatorName>```) with validator options (```<validatorOptions>```)

The ```<validatorName>``` can be the name of the built-in validator which are described in the [Validators](/validators/) page.



