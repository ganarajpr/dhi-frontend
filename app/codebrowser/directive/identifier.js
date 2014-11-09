angular.module('codebrowser')
    .directive('identifier', function () {

        return {
            require : ['^scopeCreator','identifier','?^memberexpression'],
            scope : {
                identifier : '@'
            },
            templateUrl : 'app/codebrowser/templates/identifier.html',
            link: function (scope, element, attrs,ctrls) {

                var parentContext = ctrls[0];
                var identifierController = ctrls[1];
                identifierController.identName = scope.identifier;
                var memberExpressionController = ctrls[2];
                var isCreated = attrs.hasOwnProperty('origin');
                var isExcluded = attrs.hasOwnProperty('excludeAddition');

                if(memberExpressionController){
                    memberExpressionController.registerSymbol(identifierController,isExcluded);
                }
                else{
                    parentContext.registerIdentifier(scope.identifier, isCreated , identifierController);
                }

                scope.shouldHighlight = false;
                scope.getClass = function() {
                    return {
                        highlight: scope.shouldHighlight
                    };
                };

                scope.onMouseOver = function(){
                    if(!isExcluded){
                        parentContext.highlightIdentifier(scope.identifier,true);
                    }
                };
                scope.onMouseOut = function(){
                    if(!isExcluded) {
                        parentContext.highlightIdentifier(scope.identifier, false);
                    }
                };


            },
            controller : 'IdentifierController'
        }
    });