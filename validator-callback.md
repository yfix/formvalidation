---
layout: validator
title: callback validator - BootstrapValidator
permalink: /validators/callback/
slug: validators
---

# callback validator

Return the validity from a callback method

Option       | Type     | Default | Description
-------------|----------|---------|------------
message      | String   | n/a     | The error message
callback (*) | Function | n/a     | The callback method

The callback method must follow the format below:

```javascript
function(fieldValue, validator) {
    // fieldValue is the value of field
    // validator is instance of BootstrapValidator

    // Check the field validity
    // return true or false
}
```