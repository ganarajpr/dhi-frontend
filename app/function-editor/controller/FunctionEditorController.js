angular.module('function-editor')
    .controller('FunctionEditorController',
    [
        '$scope',
        'ExternalsModel',
        function ( $scope , ExternalsModel){
            $scope.codemirrorOptions = {
                lineNumbers: true,
                mode : 'javascript',
                theme : 'base16-dark'
            };

            $scope.externalModel = ExternalsModel;

            $scope.onFunctionSend = function(){
                if($scope.externalModel.fnSource){
                    $scope.externalModel.updateExternalsForFn();
                }
            };
        }
    ]);
