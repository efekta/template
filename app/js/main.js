ymaps.ready(init);
 function init(){     
    var myMap1 = new ymaps.Map("map_contacts", {
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

 
