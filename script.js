(function ($) {
    $(document).ready(function () {

        console.log("ja jsem připravený!");
        ///Vyskakovací okno kontaktů
        $(".clickpop").click(function (event) {
            $(".contacts").show();
            $(".halfopacity").css('opacity', 0.5);
            event.preventDefault();
        });
        $(".cross").click(function () {
            $(".contacts").hide();
            $(".halfopacity").css('opacity', 1);
            $(".halfopacity1").css('opacity', 1);
        });
        ////////////////////////////////////////////
        //Scrollování

        var menu = $(".firstblock");
        var menuLinks = menu.find("a");
        menuLinks.on("click", function (event) {
            $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
            event.preventDefault();
        });

        //Back to Top
        var backToTop = $('<a>', {
            href: '#home',
            class: 'back-to-top',
            html: '<i class="fa fa-caret-up fa-5x"></i>'
        });
        backToTop.hide();
        backToTop.appendTo("body");
        backToTop.on("click", function (event) {
            $("html,body").animate({ scrollTop: 0 });
            event.preventDefault();
        });

        var win = $(window);
        win.on('scroll', function () {
            if (win.scrollTop() >= 500) backToTop.fadeIn(500);
            else backToTop.hide();
        });
    });
})(jQuery);