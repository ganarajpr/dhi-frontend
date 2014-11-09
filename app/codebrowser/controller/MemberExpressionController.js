angular.module('codebrowser')
    .controller('MemberExpressionController',
    [
        '$scope',
        function ( $scope ){

            this.registerSymbol = function(identifier,end){
                if(end){
                    this.right = identifier;
                }
                else{
                    this.left = identifier;
                    this.context.registerIdentifier(identifier.identName,false,this);
                }
            };

            this.highlight = function(state){
                if(this.left){
                    this.left.highlight(state);
                }
                if(this.right){
                    this.right.highlight(state);
                }
            };
        }
    ]);
