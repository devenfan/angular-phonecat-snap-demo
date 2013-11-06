angular.module('myApp.controllers', [])

    .controller('ExBasicCtrl', function ($scope) {
        'use strict';

        //init status
        $scope.snapOpts = {
            disable: 'right'
        };

        $scope.disable = function (side) {
            $scope.snapOpts.disable = side;
        };
        /*
        $scope.enable = function () {
            $scope.snapOpts.disable = 'none';
        };
        */
    })

    .controller('ExRemoteCtrl', function ($scope, snapRemote, logger) {
        'use strict';
        snapRemote.getSnapper().then(function (snapper) {
            snapper.on('open', function () {
                logger.info('Opened!');
            });

            snapper.on('close', function () {
                logger.info('Closed!');
            });
        });
    })

    .controller('ExOptionsCtrl', function ($scope) {
        'use strict';
        $scope.snapOpts = {
            disable: 'none'
        };

        $scope.disable = function (side) {
            $scope.snapOpts.disable = side;
        };

        $scope.enable = function () {
            $scope.snapOpts.disable = 'none';
        };
    })

    // That's all folks
;
