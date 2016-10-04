(function ()
    {
        'use strict';
        angular.module('MenuApp')
               .component( 'categories',
                           {
                             templateUrl: "app/menuapp/templates/categories.template.html",
                             bindings: {
                                          categories: '<',
                                       }
                           });
    }

)();
