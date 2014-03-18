---
layout: validator
title: callback validator - BootstrapValidator
permalink: /validators/callback/
slug: validators
---

# <a href="/validators/">Validators</a> / callback

Return the validity from a callback method

Option       | Type     | Description
-------------|----------|------------
message      | String   | The error message
callback (*) | Function | The callback method

The callback method must follow the format below:

```javascript
function(fieldValue, validator) {
    // fieldValue is the value of field
    // validator is instance of BootstrapValidator

    // Check the field validity
    // return true or false
}
```

<a href="https://github.com/nghuuphuoc/bootstrapvalidator/edit/gh-pages/validators/callback.md" class="btn btn-info">Improve this page</a>