(function ()
    {
        'use strict';

        angular.module('ShoppingListCheckOff', [])
               .controller('ToBuyShoppingController', ToBuyShoppingController )
               .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
               .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

        ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
        AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

        function ToBuyShoppingController(ShoppingListCheckOffService)
        {
            var ToBuy = this;
            ToBuy.ShowList = ShoppingListCheckOffService.GetBuyList()

            ToBuy.BuyItem = function( index )
            {
              ShoppingListCheckOffService.BuyItem( index );
            }
        }

        function AlreadyBoughtShoppingController(ShoppingListCheckOffService)
        {
            var AlreadyBought = this;
            AlreadyBought.ShowList = ShoppingListCheckOffService.GetBoughtList();
        }

        function ShoppingListCheckOffService()
        {
          var list_service = this;

          var ToBuyList =
          [
            { name: "Ruby on Rails Manual", quantity: 1 },
            { name: "Javascript Tutorial", quantity: 5 },
            { name: "Intoduction to AngularJS", quantity: 10 },
            { name: "Using C++", quantity: 3 },
            { name: "Beginners Guide to C#", quantity: 2 }
          ];

          var BoughtList = [];

          list_service.GetBuyList = function()
          {
            return ToBuyList;
          }

          list_service.GetBoughtList = function()
          {
            return BoughtList;
          }

          list_service.BuyItem = function( index )
          {
            var item = ToBuyList[ index ];
            ToBuyList.splice( index, 1 );
            BoughtList.push( item );
          }


        }
    }

)();
