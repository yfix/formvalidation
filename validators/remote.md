---
layout: validator
title: remote validator
permalink: /validators/remote/
slug: validators
---

# <a href="/validators/">Validators</a> / remote

Perform remote checking via Ajax request

Option  | Type   | Description
--------|--------|------------
message | String | The error message
url (*) | String | The remote URL that responses an encoded JSON of array containing the ```valid``` key
data    | Object | The data sent to remote URL.<br/>By default, it is set to ```{ <fieldName>: <fieldValue> }```<br/>where ```<fieldName>``` and ```<fieldValue>``` are replaced with the field name and current value, respectively.

It also supports dynamic data which is returned by a function:

```javascript
remote: {
    url: 'remote.php',
    data: function(validator) {
        // validator is the plugin instance

        // Returns an object which is used to send to remote URL
        // For example, the sample code below posts the username to remote URL:
        //  return {
        //      username: validator.getFieldElements('username').val()
        //  };
    }
}
```

<a href="https://github.com/nghuuphuoc/bootstrapvalidator/edit/gh-pages/validators/remote.md" class="btn btn-info">Improve this page</a>