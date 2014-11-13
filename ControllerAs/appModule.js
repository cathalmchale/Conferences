(function () {
    'use strict';

    angular.module('sample.controllers', []);

    var sampleApp = angular.module('sample.App', [
                'ngRoute',
                'ngAnimate',
                'ui.router',
                'ui.bootstrap',
                'cgBusy',
                'sample.controllers'
    ]);

    sampleApp.config(['$stateProvider', '$locationProvider', '$logProvider',
            function ( $stateProvider, $locationProvider, $logProvider) {

                $logProvider.debugEnabled(true);
                
                var rootViews = {
                    '': {
                        templateUrl: '/presentation/dashboardView.html',
                        controller: 'dashboardController as dashboard'
                    }
                };

                $stateProvider
                    .state('root', {
                        url: '',
                        views: rootViews
                    })
                    .state('dashboard', {
                        url: '/',
                        views: rootViews
                    });

                $locationProvider.html5Mode(false);

                console.debug('configuration completed.');
            }]);

    sampleApp.run(['$log', '$state', '$rootScope', '$stateParams',
        function ( $log, $state, $rootScope, $stateParams) {

            $rootScope.$state = $state;
            $rootScope.$log = $log;
            $rootScope.$stateParams = $stateParams;

        }]);

}());