(function () {
    'use strict';

    angular.module('NarrowItDownApp')
           .controller('NarrowItDownController', NarrowItDownController);

    NarrowItDownController.$inject =[ 'MenuSearchService' ];

    function NarrowItDownController( MenuSearchService )
    {
        var narrow = this;
        var service_promise;
        narrow.found = [];

        narrow.refine = function()
        {
          narrow.error = "";
          if( !narrow.searchterm || narrow.searchterm.length == 0 )
          {
            narrow.error = "Nothing Found";
            narrow.found = [];
          }
          else
          {
            service_promise = MenuSearchService.getMatchedMenuItems( narrow.searchterm );
            service_promise.then( function( result )
                                  {
                                    narrow.found = result;
                                    if( narrow.found.length == 0 )
                                      narrow.error = "Nothing Found";
                                  });
          }
        }

        narrow.removeItem = function( itemIndex )
        {
            narrow.found.splice( itemIndex, 1 );
        };
    }
})();
