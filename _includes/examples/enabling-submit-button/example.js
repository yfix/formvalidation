$(document).ready(function() {
    $('#enableButtonForm')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                task: {
                    validators: {
                        notEmpty: {
                            message: 'The task is required'
                        }
                    }
                },
                description: {
                    validators: {
                        notEmpty: {
                            message: 'The description is required'
                        }
                    }
                },
                priority: {
                    validators: {
                        notEmpty: {
                            message: 'The priority is required'
                        }
                    }
                }
            }
        })
        .on('status.field.bv', function (e, data) {
            // $(e.target)  --> The field element
            // data.bv      --> The BootstrapValidator instance
            // data.field   --> The field name
            // data.element --> The field element

            data.bv.disableSubmitButtons(false);
        });
});
