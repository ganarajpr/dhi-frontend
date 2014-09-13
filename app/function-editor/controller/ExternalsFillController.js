angular.module('function-editor')
    .controller('ExternalsFillController',
    [
        '$scope',
        'ExternalsModel',
        function ( $scope , ExternalsModel){

            $scope.externalModel = ExternalsModel;


        }
    ]);
