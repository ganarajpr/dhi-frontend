angular.module('function-editor')
    .controller('FunctionEditorController',
    [
        '$scope',
        function FunctionEditorController(
            $scope){
            $scope.codemirrorOptions = {
                lineNumbers: true,
                mode : 'javascript',
                theme : 'base16-dark'
            };
        }
    ]);
