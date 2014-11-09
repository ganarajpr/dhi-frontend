angular.module('function-editor')
    .factory('ExternalsModel', [
        'ExternalInFuncService',
        function (ExternalInFuncService) {

            function handleFirstFunction(parts){
                "use strict";
                var identifier;
                var first = _.first(parts);
                identifier = getFuncName(first);
                prg.addVariable(identifier);
                if(parts.length > 1){
                    var idassign = prg.getAssignment(identifier);
                    if(!idassign){
                        var newfe = new create.FunctionExpression();
                        prg.addAssignment(new create.Identifier(identifier),newfe);
                        addToFunction(newfe, _.rest(parts));
                    }
                    else{
                        if(idassign.right.type === "FunctionExpression"){
                            addToFunction(idassign.right, _.rest(parts));
                        }
                    }
                }
                else{
                    var funct = new create.FunctionExpression();
                    funct.addReturn(new create.Literal(1));
                    prg.addAssignment(new create.Identifier(identifier),funct);
                }
            }

            var enhanceExternals = function(external){
                var ext = {};
                ext.raw = external;
                var splitExternals = external.split('.');
                var lastPiece = splitExternals[splitExternals.length - 1];
                ext.isFunction = isFunction(lastPiece);
                ext.value = '';
                if(ext.isFunction){
                    ext.isSetter = false;
                }
                return ext;
            };

            function isFunction(str) {
                "use strict";
                var index = str.indexOf('()');
                return index !== -1 && index === str.length - 2;
            }

            var ExternalsModel = {
                fnSource : handleFirstFunction.toString(),
                externals : [],
                defs : {},
                updateExternalsForFn : function(){
                    ExternalInFuncService.getExternals(this.fnSource)
                        .success(function(data){
                            ExternalsModel.defs = data.defs;
                            ExternalsModel.externals = data.defs.externals
                        })
                        .error(function(data){
                            console.log(data);
                        });
                }
            };

            return ExternalsModel;
        }
    ]);