angular.module('function-editor')
    .factory('ExternalsModel', [
        'ExternalInFuncService',
        function (ExternalInFuncService) {



            var ExternalsModel = {
                fnSource : '',
                externals : [],
                updateExternalsForFn : function(){
                    ExternalInFuncService.getExternals(this.fnSource)
                        .success(function(data){
                            console.log(data);
                            debugger;

                        })
                        .error(function(data){
                            console.log(data);
                            debugger;
                        });
                }
            };

            return ExternalsModel;
        }
    ]);