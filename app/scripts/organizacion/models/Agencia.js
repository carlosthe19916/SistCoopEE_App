define(['./module'], function (module) {
    'use strict';

    module.factory('Agencia', function(OrganizacionRestangular) {

        var url = "agencias";

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

            //One to Many
            $addBoveda: function(boveda){
                return OrganizacionRestangular.all(url+'/'+this.id+'/bovedas').customPOST(OrganizacionRestangular.copy(boveda),'',{},{});
            },
            $addCaja: function(caja){
                if(caja.bovedas.length)
                {
                    var bovedas = angular.copy(caja.bovedas);
                    angular.forEach(bovedas, function(value, index) {
                        bovedas[index] = {id: value.id};
                    }, bovedas);
                    caja.bovedas = bovedas;
                }
                return OrganizacionRestangular.all(url+'/'+this.id+'/cajas').customPOST(OrganizacionRestangular.copy(caja),'',{},{});
            },
            $addTrabajador: function(trabajador){
                var newTrabajador = {
                    tipoDocumento: trabajador.tipoDocumento,
                    numeroDocumento: trabajador.numeroDocumento
                }
                return OrganizacionRestangular.all(url+'/'+this.id+'/trabajadores').customPOST(OrganizacionRestangular.copy(newTrabajador),'',{},{});
            },

            $getBovedas: function(queryParams){
                return OrganizacionRestangular.all(url+'/'+this.id+'/bovedas').getList(queryParams);
            },
            $getCajas: function(queryParams){
                return OrganizacionRestangular.all(url+'/'+this.id+'/cajas').getList(queryParams);
            },
            $getTrabajadores: function(queryParams){
                return OrganizacionRestangular.all(url+'/'+this.id+'/trabajadores').getList(queryParams);
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