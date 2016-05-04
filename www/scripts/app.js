
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova', 'starter.controllers', 'starter.services', 'ionicLazyLoad'])

 .directive('mdToggle', function($ionicGesture, $timeout) {
	return {
		restrict: 'E',
    replace: 'true',
    require: '?ngModel',
    transclude: true,
		template:
    '<div class="flip-toggle">' +
    '<div ng-transclude></div>' +
    '<label class="toggle" style="padding-left: 1px;">' +
    '<input type="checkbox">' +
    '<div class="track">' +
    '<div class="handle"><span class="handle-label handle-label-a">Mute</span><span class="handle-label handle-label-b">Play</span></div>' +
    '</div>' +
    '</label>' +
    '</div>',
		compile: function(element, attr) {
      var input = element.find('input');
      angular.forEach({
        'name': attr.name,
        'ng-value': attr.ngValue,
        'ng-model': attr.ngModel,
        'ng-checked': attr.ngChecked,
        'ng-disabled': attr.ngDisabled,
        'ng-true-value': attr.ngTrueValue,
        'ng-false-value': attr.ngFalseValue,
        'ng-change': attr.ngChange
      }, function(value, name) {
        if (angular.isDefined(value)) {
          input.attr(name, value);
        }
      });

      
      if(attr.toggleClass) {
        element[0].getElementsByTagName('label')[0].classList.add(attr.toggleClass);
      }

      return function($scope, $element, $attr) {
        var el, checkbox, track, handle;

        el = $element[0].getElementsByTagName('label')[0];
        checkbox = el.children[0];
        track = el.children[1];
        handle = track.children[0];

        var ngModelController = angular.element(checkbox).controller('ngModel');

        $scope.toggle = new ionic.views.Toggle({
          el: el,
          track: track,
          checkbox: checkbox,
          handle: handle,
          onChange: function() {
            if(checkbox.checked) {
              ngModelController.$setViewValue(true);
            } else {
              ngModelController.$setViewValue(false);
            }
            $scope.$apply();
          }
        });

        $scope.$on('$destroy', function() {
          $scope.toggle.destroy();
        });
      };
    }
	}
 })
 .directive('mdTogglelang', function($ionicGesture, $timeout) {
	return {
		restrict: 'E',
    replace: 'true',
    require: '?ngModel',
    transclude: true,
		template:
    '<div class="flip-toggle">' +
    '<div ng-transclude></div>' +
    '<label class="toggle" style="padding-right: 1px;padding-left: 2px;">' +
    '<input type="checkbox">' +
    '<div class="track" >' +
    '<div class="handle"><span class="handle-label-lower handle-label-a">Telugu</span><span class="handle-label-lower handle-label-b1">English</span></div>' +
    '</div>' +
    '</label>' +
    '</div>',
		compile: function(element, attr) {
      var input = element.find('input');
      angular.forEach({
        'name': attr.name,
        'ng-value': attr.ngValue,
        'ng-model': attr.ngModel,
        'ng-checked': attr.ngChecked,
        'ng-disabled': attr.ngDisabled,
        'ng-true-value': attr.ngTrueValue,
        'ng-false-value': attr.ngFalseValue,
        'ng-change': attr.ngChange
      }, function(value, name) {
        if (angular.isDefined(value)) {
          input.attr(name, value);
        }
      });

      
      if(attr.toggleClass) {
        element[0].getElementsByTagName('label')[0].classList.add(attr.toggleClass);
      }

      return function($scope, $element, $attr) {
        var el, checkbox, track, handle;

        el = $element[0].getElementsByTagName('label')[0];
        checkbox = el.children[0];
        track = el.children[1];
        handle = track.children[0];

        var ngModelController = angular.element(checkbox).controller('ngModel');

        $scope.toggle = new ionic.views.Toggle({
          el: el,
          track: track,
          checkbox: checkbox,
          handle: handle,
          onChange: function() {
            if(checkbox.checked) {
              ngModelController.$setViewValue(true);
            } else {
              ngModelController.$setViewValue(false);
            }
            $scope.$apply();
          }
        });

        $scope.$on('$destroy', function() {
          $scope.toggle.destroy();
        });
      };
    }
	}
 })
 

 .filter('htmlToPlaintext', function () {
     return function (text) {
         return angular.element(text).text();
     }
 })
     


.run(function ($ionicPlatform, $rootScope, $ionicLoading,$timeout,$ionicPopup) {
    $ionicPlatform.ready(function () {
      
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        //ionic.Platform.isIE = function () {
        //    return ionic.Platform.ua.toLowerCase().indexOf('trident') > -1;
        //}

      
        //if (window.StatusBar) {
        //    // org.apache.cordova.statusbar required
        //    StatusBar.styleDefault();
        //}
       
        //if (window.Connection) {
        //    if (navigator.connection.type == Connection.NONE) {
        //        $ionicPopup.confirm({
        //            title: "Internet Disconnected",
        //            content: "The internet is disconnected on your device."

        //        })
        //        .then(function (result) {
        //            if (!result) {
        //                ionic.Platform.exitApp();
        //            }
        //        });
        //    }
        //}
      
        $timeout(function () {
            var el = document.getElementById('first');
            angular.element(el).triggerHandler('click');

        }, 0)
    });
  
   


   $rootScope.$on('loading:show', function () {
        $ionicLoading.show({ template: 'Loading...' });
    });

    $rootScope.$on('loading:hide', function () {
        $ionicLoading.hide();
    });
})
   
.config(function ($stateProvider, $urlRouterProvider, $compileProvider) {
    //$compileProvider.aHrefSanitizationWhitelist(/^\s*(http?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
    //$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
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
                  templateUrl: "templates/home.html"
                 // controller: "getcaptioncontroller"
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
               templateUrl: "templates/aboutmasters.html",
               controller:"aboutmasterscontroller"
           }
       }
   })

   .state('eventmenu.news', {
       url: "/news",
       cache: false,
       views: {
           'menuContent': {
               templateUrl: "templates/news.html",
              

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






