'use strict';
(function () {

        function greeting (greeting) {
            return function (name) {
                return (greeting + ' ' +  name);
            }
        }

         function submitType(e, variables) {
             e.preventDefault();
             variables.hello = greeting(variables.greetVal.val());
             variables.type.fadeOut();
             variables.name.fadeIn();
         }

         function submitName(e, variables) {
             e.preventDefault();
             let text = variables.hello(variables.nameVal.val());
             variables.centered.text(text);
        }

        function init() {
            let variables = {
                hello: null,
                type: $('.greetingType'),
                name: $('.name'),
                greetVal: $('#greeting'),
                nameVal: $('#name'),
                centered: $('.centered')
            };

            if (variables.type){
                variables.type.on("submit", e => submitType(e, variables));
            }
            if (variables.name){
                variables.name.on("submit", e => submitName(e, variables));
            }

        }

        init();

    })();
