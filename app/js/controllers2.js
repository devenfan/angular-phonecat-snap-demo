'use strict';

/* Controllers */

var controllerModule2 = angular.module('phonecatControllers2', ['angular-carousel', 'snap']);

controllerModule2.controller('PhoneListCtrl2', ['$scope', 'PhoneService', 'snapRemote',
    function ($scope, PhoneService, snapRemote) {
        $scope.phones = PhoneService.query();
        $scope.orderProp = 'age';

        //refer to chapter: Settings and Defaults
        // https://github.com/jakiestfu/Snap.js/
        //init status of snap content
        $scope.snapOpts = {
            //element: null,
            //dragger: null,
            disable: 'right', //none, left, right,
            addBodyClasses: true,
            hyperextensible: true,
            resistance: 0.5,
            flickThreshold: 50,
            transitionSpeed: 0.3,
            easing: 'ease',
            maxPosition: 266,
            minPosition: -266,
            tapToClose: true,
            touchToDrag: true,
            slideIntent: 40,
            minDragDistance: 5
        };

        $scope.toggleDrawer = function() {
            snapRemote.toggle('left');
        };

    }]);

controllerModule2.controller('PhoneDetailCtrl2', ['$scope', '$routeParams', 'PhoneService',
    function ($scope, $routeParams, PhoneService) {

        //alert("$routeParams.phoneId: " + $routeParams.phoneId);

        $scope.phone = PhoneService.get(
            {phoneId: $routeParams.phoneId},
            function (phone) {
                $scope.mainImageUrl = phone.images[0];
            }
        );

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);


