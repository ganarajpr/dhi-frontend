angular.module('codebrowser')
    .directive('memberexpression', function () {

        return {
            require : ['^scopeCreator','memberexpression'],
            restrict : 'EAC',
            link: function (scope, element, attrs,ctrls) {


                var context = ctrls[0];
                var myCtrl = ctrls[1];
                myCtrl.context = context;

            },
            controller : 'MemberExpressionController'
        }
    });