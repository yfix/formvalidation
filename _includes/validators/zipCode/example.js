$(document).ready(function() {
    $('#zipCodeForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            postcode: {
                validators: {
                    zipCode: {
                        country: 'GB',
                        message: 'The value is not valid UK postcode'
                    }
                }
            }
        }
    });
});