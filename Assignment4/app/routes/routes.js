(function ()
{
    'use strict';

    angular.module('MenuApp')
           .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider)
    {

      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');

      // *** Set up UI states ***
      $stateProvider

      // Home page
        .state('home', {
          url: '/',
          templateUrl: 'app/menuapp/templates/home_state.template.html'
        })

        .state('categories', {
          url: '/categories',
          templateUrl: 'app/menuapp/templates/categories_state.template.html',
          controller: 'MenuController as menu',
          resolve: {
            response: ['MenuDataService', function(MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
          }
        })

        .state( 'categories.items',
                {
                    url: '/items/{category}',
                    templateUrl:
                        'app/menuapp/templates/items_state.template.html',
                    controller: 'ItemsController as items',
                    resolve:
                    {
                         response:
                            [
                              '$stateParams',
                              'MenuDataService',
                              function ($stateParams, MenuDataService)
                              {
                                  return MenuDataService
                                         .getItemsForCategory( $stateParams.category )
                              }
                            ]
                   }
                });
    }
})();
