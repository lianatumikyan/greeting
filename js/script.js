'use strict';
(function () {

 function greeting (greeting) {
        var greetingWord = greeting;
        return function greeting (name) {
            return (greetingWord + ' ' +  name);
        }
    }

    function init() {
     var hello = null;

        $('.greetingType').on('submit', function (e) {
            e.preventDefault();
            hello = greeting($('#greeting').val());
            $('.greetingType').fadeOut();
            $('.name').fadeIn();
        });

        $('.name').on('submit', function (e) {
            e.preventDefault();
            var text = hello($('#name').val())
            $('.centered').text(text);
        })
    }

    init();
})();




