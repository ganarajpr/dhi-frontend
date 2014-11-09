angular.module('codebrowser')
    .controller('MemberExpressionController',
    [
        '$scope',
        function ( $scope ){

            this.registerSymbol = function(name,end){
                if(end){
                    this.right = name;
                }
                else{
                    this.left = name;
                }
                if(this.left && this.right){
                    console.log(this.left,'.',this.right);
                }

            };
        }
    ]);
