$(document).ready(function() {
    $('#idForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            id: {
                validators: {
                    id: {
                        country: 'countrySelectBox',
                        message: 'The value is not valid %s ID'
                    }
                }
            }
        }
    });
});