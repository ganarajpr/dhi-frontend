angular.module('codebrowser')
    .controller('IdentifierController',
    [
        '$scope',
        function ( $scope ){

            this.highlight = function(state){
                $scope.shouldHighlight = state;


            };
        }
    ]);
