(function () {
    'use strict';

angular.module('app', [
    'app.layout',
    'app.navbar',
    'app.login',
    'app.register',
    'app.card', 
    'app.profile',
    'app.userService',
    'app.trackService',
    'app.markerParser',
    'app.map',
    'app.content',    
    'app.rotaekle',
    'oc.lazyLoad',
    'ui.router',
    'leaflet-directive',
    'ngAutocomplete'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $logProvider, $ocLazyLoadProvider) { // provider-injector

    $ocLazyLoadProvider.config({
      debug: true
    });
    $locationProvider.html5Mode(true);
    $logProvider.debugEnabled(false);
    // $urlRouterProvider.when('', '/#/');


    var layoutState = {
      name: 'layout',
      url: '/a/{term}',
      template: '<navbar-directive></navbar-directive><layout-directive></layout-directive>'
    };
    $stateProvider.state(layoutState);

    var loginState = {
      name: 'login',
      url: '/giris',
      template: '<login-directive></login-directive>'
    };
    $stateProvider.state(loginState);

    var registerState = {
      name: 'register',
      url: '/kayit',
      template: '<register-directive></register-directive>'
    };
    $stateProvider.state(registerState);

    var profileState = {
      name: 'profile',
      url: '/profil',
      template: '<navbar-directive></navbar-directive><profile-directive></profile-directive>'
    };
    $stateProvider.state(profileState);

    var addTrackState = {
      name: 'addtrack',
      url: '/rotaekle',
      templateUrl: '../../components/rota/rotaekle/rotaekle.html',
      controller: 'rotaEkleController',
      controllerAs: 'rotaEkleController'
    };
    $stateProvider.state(addTrackState);

    var addTrackLocationState = {
      name: 'addtrack.location',
      url: '/konum',
      templateUrl: '../../components/rota/rotaekle.location/rotaekle.location.html'      
    };
    $stateProvider.state(addTrackLocationState);

    var addTrackMetaState = {
      name: 'addtrack.meta', 
      url: '/bilgi',    
      templateUrl: '../../components/rota/rotaekle.meta/rotaekle.meta.html'              
    }
    $stateProvider.state(addTrackMetaState);

    var addTrackImageState = {
      name: 'addtrack.image',
      url: '/resimler',     
      templateUrl: '../../components/rota/rotaekle.image/rotaekle.image.html'              
    }
    $stateProvider.state(addTrackImageState);

    var addTrackFinishState = {
      name: 'addtrack.finish',
      url: '/kaydet',    
      templateUrl: '../../components/rota/rotaekle.finish/rotaekle.finish.html'              
    }
    $stateProvider.state(addTrackFinishState);
  })
  .run(function ($rootScope, userService) {
    activate();

    function activate() {
      return getUser().then(function () {

      })
    }

    function getUser() {
      return userService.getUser()
        .then(function (respond) {
          if (respond.data.OperationResult) 
          {
            $rootScope.user = respond.data.user;
            $rootScope.flagLogin = true;
          } 
          else
          {

          }
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  });

  })(); 