'use strict';
(function () {

    class Init {
        constructor() {
            let variables = {
                hello: null,
                type: $('.greetingType'),
                name: $('.name'),
                greetVal: $('#greeting'),
                nameVal: $('#name'),
                centered: $('.centered')
            };
            if (variables.type){
                variables.type.on("submit", e => this.submitType(e, variables));
            }
            if (variables.name){
                variables.name.on("submit", e => this.submitName(e, variables));
            }

        }

        submitType(e, variables) {
            e.preventDefault();
            variables.hello = this.greeting(variables.greetVal.val());
            variables.type.fadeOut();
            variables.name.fadeIn();
        }

        submitName(e, variables) {
            e.preventDefault();
            let text = variables.hello(variables.nameVal.val());
            variables.centered.text(text);
        }


        greeting (greeting) {
            return function (name) {
                return (greeting + ' ' +  name);
            }
        }
    }

    new Init();
})();
