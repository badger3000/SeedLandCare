jQuery(document).ready(function($){var heroOwl=$("#hero-slides");heroOwl.owlCarousel({dots:!0,lazyLoad:!0,navigation:!1,center:!0,pagination:!0,items:1,itemsDesktop:[768,1],itemsDesktopSmall:[768,1],itemsTablet:[480,1],itemsMobile:[340,1]});slideOwl=$("#hero-slides").data('owlCarousel');slideOwl.jumpTo(0);var maintOwl=$("#maintenance-slides");maintOwl.owlCarousel({dots:!0,lazyLoad:!0,loop:!0,pagination:!0,items:3,itemsDesktop:[992,3],itemsDesktopSmall:[768,3],itemsTablet:[480,1],itemsMobile:[320,1]});$('.maintenance-carousel .thumbnail.item').matchHeight();var commercialOwl=$("#commercial-slides");commercialOwl.owlCarousel({dots:!0,lazyLoad:!0,loop:!0,pagination:!0,items:3,itemsDesktop:[992,3],itemsDesktopSmall:[768,3],itemsTablet:[480,1],itemsMobile:[320,1]});$('.commercial-carousel .thumbnail.item').matchHeight();var residentialOwl=$("#residential-slides");residentialOwl.owlCarousel({lazyLoad:!0,loop:!0,pagination:!0,items:3,itemsDesktop:[992,3],itemsDesktopSmall:[768,3],itemsTablet:[480,1],itemsMobile:[300,1]});$('.residential-carousel .thumbnail.item').matchHeight();var uniqueOwl=$("#unique-slides");uniqueOwl.owlCarousel({lazyLoad:!0,loop:!0,pagination:!0,items:3,itemsDesktop:[992,3],itemsDesktopSmall:[768,3],itemsTablet:[480,1],itemsMobile:[320,1]});$('.unique-carousel .thumbnail.item').matchHeight();var designOwl=$("#design-slides");designOwl.owlCarousel({lazyLoad:!0,loop:!0,pagination:!0,items:3,itemsDesktop:[992,3],itemsDesktopSmall:[768,3],itemsTablet:[480,1],itemsMobile:[320,1]});$('.design-carousel .thumbnail.item').matchHeight();$(".hero-next").click(function(){heroOwl.trigger('owl.next')});$(".hero-prev").click(function(){heroOwl.trigger('owl.prev')});$(".maint-next").click(function(){maintOwl.trigger('owl.next')});$(".maint-prev").click(function(){maintOwl.trigger('owl.prev')});$(".commercial-next").click(function(){commercialOwl.trigger('owl.next')});$(".commercial-prev").click(function(){commercialOwl.trigger('owl.prev')});$(".residential-next").click(function(){residentialOwl.trigger('owl.next')});$(".residential-prev").click(function(){residentialOwl.trigger('owl.prev')});$(".unique-next").click(function(){uniqueOwl.trigger('owl.next')});$(".unique-prev").click(function(){uniqueOwl.trigger('owl.prev')});$(".design-next").click(function(){designOwl.trigger('owl.next')});$(".design-prev").click(function(){designOwl.trigger('owl.prev')})})