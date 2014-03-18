---
layout: validator
title: date validator - BootstrapValidator
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

> If you want to use other format, you can use the [callback](/validators/callback/) validator and [momentjs](http://momentjs.com) to parse/validate the input.

Format | Description
-------|------------
MM     | Month number (1 - 12)
DD     | Day of month
YYYY   | 4 digit year
h      | 12 hour time
m      | Minutes
A      | AM/PM

<a href="https://github.com/nghuuphuoc/bootstrapvalidator/edit/gh-pages/validators/date.md" class="btn btn-info">Improve this page</a>