require.config({
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        angular: '../../bower_components/angular/angular',
        keycloak: '../../bower_components/keycloak/dist/keycloak',
        'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
        'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
        'angular-messages': '../../bower_components/angular-messages/angular-messages',
        'angular-animate': '../../bower_components/angular-animate/angular-animate',
        'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
        'angular-scenario': '../../bower_components/angular-scenario/angular-scenario',
        'angular-touch': '../../bower_components/angular-touch/angular-touch',
        'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-ui-select': '../../bower_components/angular-ui-select/dist/select',
        'angular-ui-utils': '../../bower_components/angular-ui-utils/ui-utils',
        'angular-ui-grid': '../../bower_components/angular-ui-grid/ui-grid',
        'angular-block-ui': '../../bower_components/angular-block-ui/dist/angular-block-ui',
        'angular-ladda': '../../bower_components/angular-ladda/dist/angular-ladda.min',
        'angular-recursion': '../../bower_components/angular-recursion/angular-recursion',
        oclazyload: '../../bower_components/oclazyload/dist/ocLazyLoad.min',
        restangular: '../../bower_components/restangular/dist/restangular',
        underscore: '../../bower_components/underscore/underscore',
        'requirejs-domready': '../../bower_components/requirejs-domready/domReady'
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        angular: {
            exports: 'angular'
        },
        keycloak: {
            exports: 'keycloak'
        },
        'angular-sanitize': {
            deps: [
                'angular'
            ]
        },
        'angular-cookies': {
            deps: [
                'angular'
            ]
        },
        'angular-messages': {
            deps: [
                'angular'
            ]
        },
        'angular-animate': {
            deps: [
                'angular'
            ]
        },
        'angular-scenario': {
            deps: [
                'angular'
            ]
        },
        'angular-touch': {
            deps: [
                'angular'
            ]
        },
        'angular-ui-router': {
            deps: [
                'angular'
            ]
        },
        'angular-bootstrap': {
            deps: [
                'angular'
            ]
        },
        'angular-ui-select': {
            deps: [
                'angular'
            ]
        },
        'angular-ui-utils': {
            deps: [
                'angular'
            ]
        },
        'angular-ui-grid': {
            deps: [
                'angular'
            ]
        },
        'angular-block-ui': {
            deps: [
                'angular'
            ]
        },
        'angular-ladda': {
            deps: [
                'angular'
            ]
        },
        'angular-recursion': {
            deps: [
                'angular'
            ]
        },
        oclazyload: {
            deps: [
                'angular'
            ]
        },
        restangular: {
            deps: [
                'underscore',
                'angular'
            ]
        },
        underscore: {
            exports: '_'
        },
        'angular-mocks': {
            deps: [
                'angular'
            ],
            exports: 'angular.mock'
        }
    },
    deps: [
        './boot'
    ],
    priority: [
        'jquery',
        'angular'
    ],
    packages: [

    ]
});

require([
    'jquery',
    'angular',
    'keycloak',
    'app',

    'route_admin',

    'angular-sanitize',
    'angular-cookies',
    'angular-messages',
    'angular-animate',

    'angular-ui-router',
    'angular-bootstrap',
    'angular-ui-select',
    'angular-ui-utils',
    'angular-ui-grid',
    'angular-block-ui',
    'angular-ladda',
    'angular-recursion',
    'oclazyload',
    'restangular',
    'underscore'

], function() {

});

