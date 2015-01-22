angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngResource','twitter.timeline'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

    highlightMarker = {};

    $rootScope.serviceUrl = "/data/";
    if(ionic.Platform.isIOS()){
        $rootScope.serviceUrl = "/data/";
    }
    if(ionic.Platform.isAndroid()){
        $rootScope.serviceUrl = "file:///android_asset/www/data/";
    }
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // Intro

  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
  })

/*  .state('map', {
      url: '/map/:trailID',
      templateUrl: 'templates/map.html',
      controller: 'MapCtrl'
  })*/

  // setup an abstract state for the tabs directive
   .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html",
        controller: "DashCtrl"
  })

  .state('tab.twitter', {
          url: '/twitter',
          views: {
              'tab-dash': {
                  templateUrl: 'templates/tab-twitter.html',
                  controller: 'DashCtrl'
              }
          }
  })

  .state('tab.map', {
      url: '/map/:trailID',
      views: {
          'tab-map': {
              templateUrl: 'templates/tab-map.html',
              controller: 'MapCtrl'
          }
      }
  })

  .state('tab.feed', {
      url: '/feed',
      views: {
          'tab-dash': {
              templateUrl: 'templates/tab-feed.html',
              controller: 'FeedCtrl'
          }
      }
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.trails', {
      url: '/trails',
      views: {
          'tab-dash': {
              templateUrl: 'templates/tab-trails.html',
              controller: 'TrailsCtrl'
          }
      }
  })

  .state('tab.share', {
      url: '/share',
      views: {
        'tab-share': {
          templateUrl: 'templates/tab-share.html',
          controller: 'ShareCtrl'
        }
      }
    })

  .state('tab.store', {
      url: '/store',
      views: {
        'tab-store': {
          templateUrl: 'templates/tab-store.html',
          controller: 'StoreCtrl'
        }
      }
    })

  .state('tab.scores', {
    url: '/scores',
    views: {
      'tab-scores': {
        templateUrl: 'templates/tab-scores.html',
        controller: 'ScoresCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
