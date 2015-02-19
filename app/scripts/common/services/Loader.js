define(['./module'], function (module) {
    'use strict';

    module.service('Loader', function() {
        var loader = {
            block: false
        };

        loader.blockControl = function() {
            this.block = true;
        };

        loader.unblockControl = function() {
            this.block = false;
        };

        return loader
    });

});