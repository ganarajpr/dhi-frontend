angular.module('codebrowser')
    .directive('scopeCreator', function () {

        return {
            scope : {},
            bindToController : true,
            link: function (scope, element, attrs,ctrl) {

                var parentContext = element.parent().controller('scopeCreator') ;
                if(parentContext){
                    parentContext.registerChildContext(ctrl);
                }

            },
            controller : 'ScopeCreatorController'
        }
    });