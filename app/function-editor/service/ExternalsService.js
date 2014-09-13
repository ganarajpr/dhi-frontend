angular.module('function-editor')
    .factory('ExternalInFuncService', [
        '$http',
        function ($http) {
            return {
                getExternals : function(fnSource){
                    return $http.post("http://localhost/api/v1/Projects/externals", {
                        fn : fnSource
                    });
                }
            };
        }
    ]);