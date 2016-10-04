(function ()
    {
        'use strict';
        angular.module('MenuApp')
               .component( 'items',
                           {
                             templateUrl: "app/menuapp/templates/items_in_category.template.html",
                             bindings: {
                                items: '<'
                             }
                           });
    }

)();
