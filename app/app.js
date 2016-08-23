'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStore', [
    'ngRoute',
    'templateStore.templates',
    'templateStore.view1',
    'templateStore.view2'
    
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
   
    $routeProvider.otherwise({ redirectTo: '/templates' });
}]);
