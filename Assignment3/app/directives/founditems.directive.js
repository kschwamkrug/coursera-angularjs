(function () {
    'use strict';

    angular.module('NarrowItDownApp')
           .directive('foundItems', FoundItems);

    function FoundItems()
    {
      var ddo = {
        templateUrl: 'app/directives/founditems.template.html',
        restrict: 'E',
        scope: {
          found: '<',
          onRemove: "&"
        },
        controllerAs: 'dirctl',
        controller: FoundItemsDirectiveController,
        bindToController: true
      };

      return ddo;

    }

    function FoundItemsDirectiveController()
    {
      var dirctl = this;
    }

})();
