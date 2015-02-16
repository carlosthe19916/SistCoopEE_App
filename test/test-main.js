var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

    paths: {
        angular: '../../bower_components/angular/angular',
        'angular-animate': '../../bower_components/angular-animate/angular-animate',
        'angular-block-ui': '../../bower_components/angular-block-ui/dist/angular-block-ui',
        'angular-bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
        'angular-ladda': '../../bower_components/angular-ladda/dist/angular-ladda.min',
        'angular-messages': '../../bower_components/angular-messages/angular-messages',
        'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
        'angular-recursion': '../../bower_components/angular-recursion/angular-recursion',
        'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
        'angular-scenario': '../../bower_components/angular-scenario/angular-scenario',
        'angular-timer': '../../bower_components/angular-timer/dist/angular-timer',
        'angular-touch': '../../bower_components/angular-touch/angular-touch',
        'angular-ui-grid': '../../bower_components/angular-ui-grid/ui-grid',
        'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-ui-select': '../../bower_components/angular-ui-select/dist/select',
        'angular-ui-utils': '../../bower_components/angular-ui-utils/ui-utils',
        jquery: '../../bower_components/jquery/dist/jquery',
        keycloak: '../../bower_components/keycloak/dist/keycloak',
        ladda: '../../bower_components/ladda/dist/ladda.min',
        oclazyload: '../../bower_components/oclazyload/dist/ocLazyLoad.min',
        'requirejs-domready': '../../bower_components/requirejs-domready/domReady',
        restangular: '../../bower_components/restangular/dist/restangular',
        underscore: '../../bower_components/underscore/underscore',
        'angular-input-masks': '../../bower_components/angular-input-masks/releases/masks.min'
    },

    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-cookies': ['angular'],
        'angular-sanitize': ['angular'],
        'angular-animate': ['angular'],
        'angular-touch': ['angular'],
        'angular-mocks': {
          deps:['angular'],
          'exports':'angular.mock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
