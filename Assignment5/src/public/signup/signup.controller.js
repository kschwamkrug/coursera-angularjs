(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = [ 'ProfileService' ];

function SignupController(ProfileService) {
  var signupCtrl = this;
  signupCtrl.msg = "";
  signupCtrl.favoriteInvalid = "";

  signupCtrl.registered = function()
  {
    return ProfileService.registered();
  }

  signupCtrl.submit = function()
  {
    signupCtrl.msg = "";
    signupCtrl.favoriteInvalid = "";
    if( ProfileService.registered() )
      signupCtrl.msg = "Already registered; you info not added again";
    else
    {
      signupCtrl.user.favorite.short_name = signupCtrl.user.favorite.short_name.toUpperCase();
      ProfileService.addProfileInfo( signupCtrl.user, signupCtrl );
    }
  }
}

})();
