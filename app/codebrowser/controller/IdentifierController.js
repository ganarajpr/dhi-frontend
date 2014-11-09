angular.module('codebrowser')
    .controller('IdentifierController',
    [
        '$scope',
        function ( $scope ){

            this.highlight = function(state){
                $scope.shouldHighlight = state;


            };

            $scope.onClick = function(){
                $scope.shouldHighlight = !$scope.shouldHighlight;
            };
        }
    ]);
