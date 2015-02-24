define(['./module'], function (module) {
    'use strict';

    module.factory('Caja', function(OrganizacionRestangular) {

        var url = "cajas";

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
            $search: function(queryParams){
                return OrganizacionRestangular.all(url).getList(queryParams);
            },

            //post operations
            $abrir: function(boveda){
                return OrganizacionRestangular.all(url+'/'+this.id+'/abrir').post();
            },
            $cerrar: function(detalle){
                return OrganizacionRestangular.all(url+'/'+this.id+'/cerrar').post(OrganizacionRestangular.copy(detalle));
            },
            $congelar: function(){
                return OrganizacionRestangular.all(url+'/'+this.id+'/congelar').post();
            },
            $descongelar: function(){
                return OrganizacionRestangular.all(url+'/'+this.id+'/descongelar').post();
            },

            //One to Many
            $addBoveda: function(boveda){
                return OrganizacionRestangular.all(url+'/'+this.id+'/bovedas').post(OrganizacionRestangular.copy(boveda));
            },
            $desactivarBoveda: function(idBoveda){
                return OrganizacionRestangular.all(url+'/'+this.id+'/bovedas/'+idBoveda+'/desactivar').post();
            },

            $getDetalle: function(agencia){
                return OrganizacionRestangular.all(url+'/'+this.id+'/detalle').getList();
            },
            $getBovedas: function(){
                return OrganizacionRestangular.all(url+'/'+this.id+'/bovedas').getList();
            },
            $getBovedasCaja: function(){
                return OrganizacionRestangular.all(url+'/'+this.id+'/bovedasCaja').getList();
            },
            $getTrabajadores: function(agencia){
                return OrganizacionRestangular.all(url+'/'+this.id+'/trabajadores').getList();
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