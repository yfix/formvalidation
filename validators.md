---
layout: validator
title: Validators
permalink: /validators/
slug: validators
---

# Validators

BootstrapValidator comes with various built-in validators listed in the alphabetical order as following:

<table>
    <thead>
        <tr>
            <th>Validator name</th>
            <th>Available from</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    {% for validator in site.data.validators %}
        <tr>
            <td><a href="/validators/{{ validator.slug }}/">{{ validator.name }}</a></td>
            <td>{{ validator.version }}</td>
            <td>{{ validator.description }}</td>
        </tr>
    {% endfor %}
    </tbody>
</table>

<a href="https://github.com/nghuuphuoc/bootstrapvalidator/edit/gh-pages/validators.md" class="btn btn-info">Improve this page</a>