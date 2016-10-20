(function () {
"use strict";

angular.module('public')
.controller('ProfileController', ProfileController);

ProfileController.$inject = ['ProfileService'];
function ProfileController(ProfileService) {
  var $ctrl = this;
  var user;

  $ctrl.registered = function()
  {
    return ProfileService.registered();
  }

  $ctrl.getProfile = function()
  {
    return ProfileService.getProfile();
  }
}
})();
