define(['./module'], function (module) {
    'use strict';

    module.factory('Trabajador', function(OrganizacionRestangular) {
        var url = "trabajadores";

        var modelMethos = {
            //create
            $new: function(id){
                return angular.extend({id: id}, modelMethos);
            },
            $build: function(){
                return angular.extend({id: undefined}, modelMethos, {$save: function(){
                    if(this.agencia)
                    {
                        this.agencia = {id: this.agencia.id}
                    }
                    return OrganizacionRestangular.all(url).post(this);
                }});
            },
            $save: function() {
                var trabajador = OrganizacionRestangular.copy(this);
                if(trabajador.agencia)
                {
                    trabajador.agencia = {id: trabajador.agencia.id}
                }
                return OrganizacionRestangular.one(url, this.id).customPUT(OrganizacionRestangular.copy(this),'',{},{});
            },

            //searchers
            $find: function(id){
                return OrganizacionRestangular.one(url, id).get();
            },
            $findByTipoNumeroDocumento: function(tipoDocumento, numeroDocumento){
                return OrganizacionRestangular.one(url+'/buscar').get({tipoDocumento: tipoDocumento, numeroDocumento: numeroDocumento});
            },
            $search: function(queryParams){
                return OrganizacionRestangular.all(url).getList(queryParams);
            },

            //post operations


            //One to Many
            $addCaja: function(caja){
                return OrganizacionRestangular.all(url+'/'+this.id+'/cajas').post(OrganizacionRestangular.copy(caja));
            },
            $removeCaja: function(caja){
                return OrganizacionRestangular.one(url+'/'+this.id+'/cajas').remove();
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