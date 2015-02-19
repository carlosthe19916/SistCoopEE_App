define(['./module'], function (module) {
    'use strict';

    module.factory('Boveda', function(OrganizacionRestangular) {

        var url = "bovedas";

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
            $getByCodigo: function(codigo){
                return OrganizacionRestangular.one(url+'/codigo/'+codigo).get();
            },
            $search: function(queryParams){
                return OrganizacionRestangular.all(url).getList(queryParams);
            },

            //post operations
            $abrir: function(){
                return OrganizacionRestangular.all(url+'/'+this.id+'/abrir').post();
            },
            $cerrar: function(){
                return OrganizacionRestangular.all(url+'/'+this.id+'/cerrar').post();
            },
            $congelar: function(){
                return OrganizacionRestangular.all(url+'/'+this.id+'/congelar').post();
            },
            $descongelar: function(){
                return OrganizacionRestangular.all(url+'/'+this.id+'/descongelar').post();
            },

            //One to Many
            $getCajas: function(){
                return OrganizacionRestangular.all(url+'/'+this.id+'/cajas').getList();
            },
            $getDetalle: function(agencia){
                return OrganizacionRestangular.all(url+'/'+this.id+'/detalle').getList();
            },

            $desactivar: function(){
                return OrganizacionRestangular.all(url+'/'+this.id+'/desactivar').post();
            }
        };

        OrganizacionRestangular.extendModel(url, function(obj) {
            return angular.extend(obj, modelMethos);
        });

        return modelMethos;
    });
});