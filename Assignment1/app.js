(function ()
    {
        'use strict';

        angular.module('LunchCheck', [])
               .controller('LunchCheckController', LunchCheckController );

        LunchCheckController.$inject = ['$scope'];

        function LunchCheckController($scope)
        {
            $scope.lunchitems = "";
            $scope.statusMsg = "";

            $scope.countitems = function() {
              var text = $scope.lunchitems;
              if( text.length == 0 )
                return 0;
              else
              {
                var textArray = text.split(",");
                return textArray.length;
              }
            };

            $scope.checkItems = function()
            {
              var num_items = $scope.countitems();
              if( num_items == 0 )
              {
                $scope.statusMsg = "Please enter data first";
                $scope.status = { "color" : "red" };
              }
              else
              {
                  $scope.status = { "color" : "green" };
                  if( num_items < 4 )
                    $scope.statusMsg = "Enjoy";
                  else
                    $scope.statusMsg = "Too much!";
              }
            };
        }
    }

)();
