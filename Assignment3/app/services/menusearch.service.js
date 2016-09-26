(function () {
    'use strict';

    angular.module('NarrowItDownApp')
           .service('MenuSearchService', MenuSearchService)
           .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuSearchService.$inject = [ '$http', 'ApiBasePath' ];

    function MenuSearchService( $http, ApiBasePath )
    {
        var service = this;
        var found = [];
        var all;
        var i;

        service.getMatchedMenuItems = function( searchterm )
        {
          found = [];
          var promise = $http({ method: "GET",
                                url: (ApiBasePath + "/menu_items.json") });
          return promise.then( function( result )
                               {
                                  all = result.data;
                                  for( i = 0; i < all.menu_items.length; i++ )
                                  {
                                    if( all.menu_items[ i ].description
                                                           .toLowerCase()
                                                           .includes( searchterm.toLowerCase() ) )
                                      found.push( all.menu_items[ i ] );
                                  }
                                  return found;
                               }
                             );
        };
    }

})();
