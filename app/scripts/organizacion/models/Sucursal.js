define(['./module'], function (module) {
    'use strict';

    module.factory('Sucursal', function(OrganizacionRestangular) {

        var url = "sucursales";

        var modelMethos = {
            //create
            $new: function(id){
                return angular.extend({id: id}, modelMethos);
            },
            $build: function(){
                return angular.extend({id: undefined}, modelMethos, {$save: function(){
                    return OrganizacionRestangular.all(url).post(this);
                }});
            },
            $save: function() {
                return OrganizacionRestangular.one(url, this.id).customPUT(OrganizacionRestangular.copy(this),'',{},{});
            },

            //searchers
            $find: function(id){
                return OrganizacionRestangular.one(url, id).get();
            },
            $findByDenominacion: function(denominacion){
                return OrganizacionRestangular.one(url+'/denominacion', denominacion).get();
            },
            $search: function(queryParams){
                return OrganizacionRestangular.all(url).getList(queryParams);
            },

            //One to Many
            $getAgencias: function(filterOptions){
                return OrganizacionRestangular.all(url+'/'+this.id+'/agencias').getList(filterOptions);
            },
            $addAgencia: function(agencia){
                return OrganizacionRestangular.all(url+'/'+this.id+'/agencias').post(agencia);
            },
            $desactivar: function(){
                return OrganizacionRestangular.all(url+'/'+this.id+'/desactivar').post();
            }
        };

        OrganizacionRestangular.extendModel(url, function(obj) {
            return angular.extend(obj, modelMethos);
        });
        OrganizacionRestangular.extendModel(url+'/denominacion', function(obj) {
            return angular.extend(obj, modelMethos);
        });

        return modelMethos;
    });
});