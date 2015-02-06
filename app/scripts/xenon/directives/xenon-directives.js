define(['./module'], function (module) {
    'use strict';

    module.directive('settingsPane', function(){
        return {
            restrict: 'E',
            templateUrl: appHelper.templatePath('layout/settings-pane'),
            scope: {
                isOpen: '= isOpen',
                useAnimation: '= useAnimation'
            },
            controller: function($scope) {
                $scope.settingsPaneToggle = function(toggle){
                    $scope.isOpen = toggle || !$scope.isOpen;
                };
            },
            link: function($scope, elem, attrs, ngModel){
            }
        };
    });

    module.directive('horizontalMenu', function(Auth){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: appHelper.templatePath('layout/horizontal-menu'),
            scope: {
                isFixed: '=isFixed',
                minimal: '=minimal',
                settingsPaneIsOpen: '=settingsPaneIsOpen'
            },
            controller: function($scope) {
                $scope.settingsPaneToggle = function(toggle){
                    $scope.settingsPaneIsOpen = toggle || !$scope.settingsPaneIsOpen;
                };

                $scope.username = Auth.authz.idToken.preferred_username;
                $scope.profile = function(){
                    Auth.authz.accountManagement();
                };
                $scope.logout = function(){
                    Auth.authz.logout();
                };
            }
        }
    }).directive('horizontalNavbar', function($menuItems) {
        return {
            restrict: 'E',
            templateUrl: appHelper.templatePath('layout/horizontal-navbar'),
            controller: function($scope){
                var $horizontalMenuItems = $menuItems.instantiate();
                $scope.menuItems = $horizontalMenuItems.prepareHorizontalMenu().getAll();
            }
        };
    }).directive('navbarDropdown', function() {
        return {
            restrict: 'EA',
            scope: {
                item: '='
            },
            replace: true,
            templateUrl: appHelper.templatePath('layout/navbar-dropdown'),
            controller: function($scope, $attrs, $parse, dropdownService, $animate){

                var self = this;
                var scope = $scope.$new(); // create a child scope so we are not polluting original one
                var openClass = $attrs.openClass;
                var getIsOpen;
                var setIsOpen = angular.noop;
                var toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop;

                this.init = function( element ) {
                    self.$element = element;
                };

                this.toggle = function( open ) {
                    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
                };

                // Allow other directives to watch status
                this.isOpen = function() {
                    return scope.isOpen;
                };

                scope.getToggleElement = function() {
                    return self.toggleElement;
                };

                scope.focusToggleElement = function() {
                    if ( self.toggleElement ) {
                        self.toggleElement[0].focus();
                    }
                };

                scope.$watch('isOpen', function( isOpen, wasOpen ) {

                    $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);

                    if ( isOpen ) {
                        scope.focusToggleElement();
                        dropdownService.open( scope );
                    } else {
                        dropdownService.close( scope );
                    }

                    setIsOpen($scope, isOpen);
                    if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
                        toggleInvoker($scope, { open: !!isOpen });
                    }
                });

                $scope.$on('$locationChangeSuccess', function() {
                    if($scope.closeMode)
                    {
                        scope.isOpen = false;
                    }
                });

                $scope.$on('$destroy', function() {
                    scope.$destroy();
                });
            },
            link: function(scope, element, attrs, navbarDropdownCtrl) {
                navbarDropdownCtrl.init( element );
            }
        };
    }).directive('navbarDropdownToggle', function() {
        return {
            require: '?^navbarDropdown',
            link: function(scope, element, attrs, navbarDropdownCtrl) {

                if ( !navbarDropdownCtrl ) {
                    return;
                }

                navbarDropdownCtrl.toggleElement = element;

                var toggleDropdown = function(event) {
                    event.preventDefault();

                    if ( !element.hasClass('disabled') && !attrs.disabled ) {
                        scope.$apply(function() {
                            navbarDropdownCtrl.toggle();
                        });
                    }
                };

                element.bind('click', toggleDropdown);

                // WAI-ARIA
                element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
                scope.$watch(navbarDropdownCtrl.isOpen, function( isOpen ) {
                    element.attr('aria-expanded', !!isOpen);
                });

                scope.$on('$destroy', function() {
                    element.unbind('click', toggleDropdown);
                });
            }
        };
    });

    module.directive('sidebarProfile', function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: appHelper.templatePath('layout/sidebar-profile')
        };
    }).directive('sidebarMenu', function($timeout, $state,  $menuItems, activeProfile){
        return {
            restrict: 'E',
            templateUrl: appHelper.templatePath('layout/sidebar-menu'),
            controller: function($scope) {
                var $sidebarMenuItems = $menuItems.instantiate();
                $scope.menuItems = $sidebarMenuItems.prepareSidebarMenu($state.current.name, activeProfile.realmAccess.roles).getAll();
            }
        };
    }).directive('sidebarDropdown', function(RecursionHelper) {
        return {
            restrict: 'EA',
            transclude: true,
            scope: {
                item: '='
            },
            replace: true,
            templateUrl: appHelper.templatePath('layout/sidebar-dropdown'),
            controller: function($scope, $attrs, $parse, $animate){

                var self = this;
                var scope = $scope.$new(); // create a child scope so we are not polluting original one
                var openClass = $attrs.openClass;
                var getIsOpen;
                var setIsOpen = angular.noop;
                var toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop;

                this.init = function( element ) {
                    self.$element = element;
                };

                this.toggle = function( open ) {
                    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
                };

                // Allow other directives to watch status
                this.isOpen = function() {
                    return scope.isOpen;
                };

                scope.getToggleElement = function() {
                    return self.toggleElement;
                };

                scope.focusToggleElement = function() {
                    if ( self.toggleElement ) {
                        self.toggleElement[0].focus();
                    }
                };

                scope.$watch('isOpen', function( isOpen, wasOpen ) {

                    $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);

                    if ( isOpen ) {
                        scope.focusToggleElement();
                        self.toggledElement.addClass('is-visible');
                        self.toggledElement.css('display', 'block');
                    } else {
                        if(self.toggledElement){
                            self.toggledElement.removeClass('is-visible');
                            self.toggledElement.css('display', 'none');
                        }
                    }

                    setIsOpen($scope, isOpen);
                    if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
                        toggleInvoker($scope, { open: !!isOpen });
                    }

                });

                $scope.$on('$locationChangeSuccess', function() {
                    if($scope.closeMode)
                    {
                        scope.isOpen = false;
                    }
                });

                $scope.$on('$destroy', function() {
                    scope.$destroy();
                });

            },
            compile: function(element) {
                return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
                    controller.init( iElement );
                });
            }
        };
    }).directive('sidebarDropdownToggle', function() {
        return {
            require: '?^sidebarDropdown',
            link: function(scope, element, attrs, sidebarDropdownCtrl) {
                if ( !sidebarDropdownCtrl ) {
                    return;
                }

                sidebarDropdownCtrl.toggleElement = element;

                var toggleDropdown = function(event) {
                    event.preventDefault();

                    if ( !element.hasClass('disabled') && !attrs.disabled ) {
                        scope.$apply(function() {
                            sidebarDropdownCtrl.toggle();
                        });
                    }
                };

                element.bind('click', toggleDropdown);

                // WAI-ARIA
                element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
                scope.$watch(sidebarDropdownCtrl.isOpen, function( isOpen ) {
                    element.attr('aria-expanded', !!isOpen);
                });

                scope.$on('$destroy', function() {
                    element.unbind('click', toggleDropdown);
                });
            }
        };
    })
        .directive('sidebarDropdownToggled', function() {
            return {
                require: '?^sidebarDropdown',
                link: function(scope, element, attrs, sidebarDropdownCtrl) {

                    if ( !sidebarDropdownCtrl ) {
                        return;
                    }

                    sidebarDropdownCtrl.toggledElement = element;

                    scope.$on('$destroy', function() {
                        element.unbind('click', toggleDropdown);
                    });
                }
            };
        });

    module.directive('siteFooter', function(){
        return {
            restrict: 'E',
            templateUrl: appHelper.templatePath('layout/footer')
        };
    });

});