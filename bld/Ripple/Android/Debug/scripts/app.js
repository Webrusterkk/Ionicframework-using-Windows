// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
 .directive('noScroll', function ($document) {
     return {
         restrict: 'A',
         link: function ($scope, $element, $attr) {

             $document.on('touchmove', function (e) {
                 e.preventDefault();
             });
         }
     }
 })
 .directive('infiniteScroll', function ($rootScope, $window, $timeout) {
     return {
         link: function (scope, elem, attrs) {
             var checkWhenEnabled, handler, scrollDistance, scrollEnabled;
             $window = angular.element($window);
             elem.css('overflow-y', 'scroll');
             elem.css('overflow-x', 'hidden');
             elem.css('height', 'inherit');
             scrollDistance = 0;
             if (attrs.infiniteScrollDistance != null) {
                 scope.$watch(attrs.infiniteScrollDistance, function (value) {
                     return scrollDistance = parseInt(value, 10);
                 });
             }
             scrollEnabled = true;
             checkWhenEnabled = false;
             if (attrs.infiniteScrollDisabled != null) {
                 scope.$watch(attrs.infiniteScrollDisabled, function (value) {
                     scrollEnabled = !value;
                     if (scrollEnabled && checkWhenEnabled) {
                         checkWhenEnabled = false;
                         return handler();
                     }
                 });
             }
             $rootScope.$on('refreshStart', function (event, parameters) {
                 elem.animate({ scrollTop: "0" });
             });
             handler = function () {
                 var container, elementBottom, remaining, shouldScroll, containerBottom;
                 container = $(elem.children()[0]);
                 elementBottom = elem.offset().top + elem.height();
                 containerBottom = container.offset().top + container.height();
                 remaining = containerBottom - elementBottom;
                 shouldScroll = remaining <= elem.height() * scrollDistance;
                 if (shouldScroll && scrollEnabled) {
                     if ($rootScope.$$phase) {
                         return scope.$eval(attrs.infiniteScroll);
                     } else {
                         return scope.$apply(attrs.infiniteScroll);
                     }
                 } else if (shouldScroll) {
                     return checkWhenEnabled = true;
                 }
             };
             elem.on('scroll', handler);
             scope.$on('$destroy', function () {
                 return $window.off('scroll', handler);
             });
             return $timeout((function () {
                 if (attrs.infiniteScrollImmediateCheck) {
                     if (scope.$eval(attrs.infiniteScrollImmediateCheck)) {
                         return handler();
                     }
                 } else {
                     return handler();
                 }
             }), 0);
         }
     };
 })
 .filter('htmlToPlaintext', function () {
     return function (text) {
         return angular.element(text).text();
     }
 })



.run(function ($ionicPlatform, $rootScope, $ionicLoading) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
        
    


});

   $rootScope.$on('loading:show', function () {
        $ionicLoading.show({ template: 'Loading...' });
    });

    $rootScope.$on('loading:hide', function () {
        $ionicLoading.hide();
    });
})
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('eventmenu', {
          url: "/event",
          abstract: true,
          templateUrl: "templates/event-menu.html"
      })
      .state('eventmenu.home', {
          url: "/home",
          views: {
              'menuContent': {
                  templateUrl: "templates/home.html",
                  controller: "getcaptioncontroller"
              }
          }
      })
      .state('eventmenu.about-organisation', {
          url: "/about-organisation",
          views: {
              'menuContent': {
                  templateUrl: "templates/about-organisation.html"

              }
          }
      })


        .state('eventmenu.aboutcenters', {
            url: "/aboutcenters",
            views: {
                'menuContent': {
                    templateUrl: "templates/aboutcenters.html"

                }
            }
        })
   .state('eventmenu.aboutmasters', {
       url: "/aboutmasters",
       views: {
           'menuContent': {
               templateUrl: "templates/aboutmasters.html"

           }
       }
   })

   .state('eventmenu.news', {
       url: "/news",
       cache: false,
       views: {
           'menuContent': {
               templateUrl: "templates/news.html"


           }
       }
   })
   .state('eventmenu.imagegallery', {
       url: "/imagegallery",
       cache: false,
       views: {
           'menuContent': {
               templateUrl: "templates/imagegallery.html"
               //controller: "getimgcontroller"

           }
       }
   })
    .state('eventmenu.events', {
        url: "/events",
        views: {
            'menuContent': {
                templateUrl: "templates/events.html",
                controller: "eventscontroller"
            }
        }
    })


    $urlRouterProvider.otherwise("/event/home");
})
.config(function ($httpProvider) {
    $httpProvider.interceptors.push(function ($rootScope) {
        return {
            request: function (config) {
                $rootScope.$broadcast('loading:show')
                return config
            },
            response: function (response) {
                $rootScope.$broadcast('loading:hide')
                return response
            }
        }
    })
});


//Narendra



