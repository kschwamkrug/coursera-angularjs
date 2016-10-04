(function ()
    {
        'use strict';
        angular.module('MenuApp')
               .controller( 'ItemsController', ItemsController );

        ItemsController.$inject = ['response'];

        function ItemsController(response)
        {
            var items = this;
            items.items = response.data.menu_items;
        }

    }

)();
