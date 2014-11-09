angular.module('codebrowser')
    .controller('ScopeCreatorController',
    [
        '$scope',
        '$element',
        function ( $scope,$element ){

            console.log($element,'controller created');
            this.elem = $element;
            this.childContexts = [];

            this.variables = {};

            this.registerChildContext = function(context){
                this.childContexts.push(context);
                context.parent = this;
            };
            this.registerIdentifier = function(idName,isCreate,identifier){

                if(!this.variables.hasOwnProperty(idName)){
                    this.variables[idName] = {
                        creation : {},
                        usage : []
                    };
                }
                if(isCreate){
                    this.variables[idName].creation.location = identifier;
                }
                else{
                    if(!this.variables[idName].usage){
                        console.log(idName);
                    }
                    this.variables[idName].usage.push(identifier);
                }

            };

            this.highlightUsagesOfIdentifier = function(idName,toggle){
                var ident = this.variables[idName];
                if(ident){
                    ident.usage.map(function(varLoc){
                        varLoc.highlight(toggle);
                    });
                }
                this.childContexts.map(function(cc){
                    cc.highlightUsagesOfIdentifier(idName,toggle);
                });
            };

            this.highlightIdentifier = function(identifier,toggle){
                var ident = this.variables[identifier];
                if(ident && ident.creation && ident.creation.location){
                    ident.creation.location.highlight(toggle);
                    this.highlightUsagesOfIdentifier(identifier,toggle);
                }
                else{
                    if(this.parent){
                        this.parent.highlightIdentifier(identifier,toggle);
                    }
                }

            };

        }
    ]);
