$(document).ready(function() {
  // map
  if ($('.map').length) {
      ymaps.ready(init);
       function init(){     
          var myMap1 = new ymaps.Map('map', {
               center: [47.22261057425376,39.61439249999996],
               zoom: 17
           }),
           
           // Создаем метку с помощью вспомогательного класса.
           myPlacemark1 = new ymaps.Placemark([47.22261057425376,39.61439249999996], {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContentBody: 'Транспортная компания Вигард',
            balloonContentFooter: 'Россия, Ростов-на-Дону, улица Малиновского, 54Г, офис 204',
            hintContent: 'Транспортная компания Вигард'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [30, 50]
        });

      // Добавляем все метки на карту.
      myMap1.geoObjects.add(myPlacemark1);
      myMap1.behaviors.disable('scrollZoom');

       };

}

//Tabs
    $('.tab_item').not(':first').hide();
    $('.wrapper-tab .tab').click(function() {
      $('.wrapper-tab .tab').removeClass('tab-active').eq($(this).index()).addClass('tab-active');
      $('.tab_item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('tab-active');


//Table Mobile
// if (window.innerWidth < 728) { 
//   document.querySelectorAll('.contacts-page-table-wrapp > table')
// }



//Contacts Page Table
 $('.js-open').on('click', function(e) {
    // e.preventDefault();
    $('.js-hide').toggleClass('js-show');
})


});

// var service_sidebar_accrodion = $('.service-list li')

//   $(window).resize(function(){
//     var windowWidth = $('body').innerWidth();
//     if(windowWidth < 910){$(".service-list li").addClass('service-sidebar_hide');}
//     else{$(".service-sidebar").removeClass('service-sidebar_hide');}
//   });

// $('.accordion-item:not(:first) .content').hide();

// $(".accordion-item").click(function() {
//   var self = $(this);
//     $('.content').hide();
//     $('.content', self).show();
//     $('.hidden, .show').toggle();
//     $('.hidden', self).show();
//     $('.show', self).hide();
// });















