---
layout: validator
title: between validator - BootstrapValidator
permalink: /validators/between/
slug: validators
---

# between validator

Check if the input value is between (strictly or not) two given numbers

Option      | Type    | Default | Description
------------|---------|---------|------------
message     | String  | n/a     | The error message
min (*)     | Float   | n/a     | The lower value in the range
max (*)     | Float   | n/a     | The upper value in the range
inclusive   | Boolean | true    | Can be ```true``` or ```false```. If ```true```, the input value must be in the range strictly