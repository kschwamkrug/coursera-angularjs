(function () {
"use strict";

angular.module('public')
.service('ProfileService', ProfileService);

ProfileService.$inject = [ '$http' ];

function ProfileService( $http )
{
  var service = this;
  var registered = false;
  var profile;

  service.registered = function()
  {
    return registered;
  }

  service.addProfileInfo = function( newProfile, ctrl )
  {
    var url = "https://kschwamkrug-angularjs.herokuapp.com/menu_items/";
    url += newProfile.favorite.short_name + ".json";
    $http( { method: "GET", url: url } )
          .then
          (
              function success( response )
              {
                profile = newProfile;
                registered = true;
                ctrl.msg = "Your information has been saved";
                profile.favorite.name = response.data.name;
                profile.favorite.description = response.data.description;
              },
              function error( response )
              {
                registered = false;
                ctrl.favoriteInvalid = "No such menu number exists";
              }
          );
  }

  service.getProfile = function()
  {
    return profile;
  }
}

})();
