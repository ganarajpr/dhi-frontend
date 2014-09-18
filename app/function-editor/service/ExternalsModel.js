angular.module('function-editor')
    .factory('ExternalsModel', [
        'ExternalInFuncService',
        function (ExternalInFuncService) {


            var enhanceExternals = function(external){
                var ext = {};
                ext.raw = external;
                var splitExternals = external.split('.');
                var lastPiece = splitExternals[splitExternals.length - 1];
                ext.isFunction = isFunction(lastPiece);
                ext.value = '';
                if(ext.isFunction){
                    ext.isSetter = false;
                }
                return ext;
            };

            function isFunction(str) {
                "use strict";
                var index = str.indexOf('()');
                return index !== -1 && index === str.length - 2;
            }

            var ExternalsModel = {
                fnSource : '',
                externals : [],
                updateExternalsForFn : function(){
                    ExternalInFuncService.getExternals(this.fnSource)
                        .success(function(data){
                            ExternalsModel.externals = _.map(data.defs,enhanceExternals);
                        })
                        .error(function(data){
                            console.log(data);
                        });
                }
            };

            return ExternalsModel;
        }
    ]);