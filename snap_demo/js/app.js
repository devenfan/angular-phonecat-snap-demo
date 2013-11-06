
angular.module('myApp', ['demo', 'snap', 'myApp.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/index', {
                templateUrl: 'partials/index.html'
            })
            .when('/ex-basic', {
                templateUrl: 'partials/ex-basic.html',
                controller: 'ExBasicCtrl'
            })
            .when('/ex-basic1', {
                templateUrl: 'partials/ex-basic1.html',
                controller: 'ExBasicCtrl'
            })
            .when('/ex-basic2', {
                templateUrl: 'partials/ex-basic2.html',
                controller: 'ExBasicCtrl'
            })
            .when('/ex-basic3', {
                templateUrl: 'partials/ex-basic3.html',
                controller: 'ExBasicCtrl'
            })
            .when('/ex-two-drawers', {
                templateUrl: 'partials/ex-two-drawers.html'
            })
            .when('/ex-remote', {
                templateUrl: 'partials/ex-remote.html',
                controller: 'ExRemoteCtrl'
            })
            .when('/ex-options', {
                templateUrl: 'partials/ex-options.html',
                controller: 'ExOptionsCtrl'
            })
            .otherwise({redirectTo: '/index'});
    }]);
