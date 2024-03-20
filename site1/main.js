discover = document.querySelector('.main-button')



function scrolling(){
    window.scrollTo({
        top: 800,
        behavior: "smooth"
    });
}

function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " opacity-off";
  }

  var modal = $modal({
    title: 'Заказная картина',
    content: '<img src="gallery1.jpg" style="width: 800px; height: 470px;>',
    footerButtons: [
      
    ]
  });
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal.show();
  });

  var modal1 = $modal({
    title: 'Заказная картина',
    content: '<img src="gallery2.jpg" style="width: 800px; height: 470px;>',
    footerButtons: [
     
    ]
  });
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal1').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal1.show();
  });

  var modal2 = $modal({
    title: '3D графика',
    content: '<img src="gallery3.jpg" style="width: 800px; height: 667px;>',
    footerButtons: [
      
    ]
  });
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal2').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal2.show();
  });

  var modal3 = $modal({
    title: 'Заказная картина',
    content: '<img src="gallery4.jfif" style="width: 800px; height: 470px;>',
    footerButtons: [
      
    ]
  });
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal3').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal3.show();
  });

  var modal4 = $modal({
    title: 'Фотошоп',
    content: '<img src="gallery5.jfif" style="width: 800px; height: 705px;>',
    footerButtons: [
      
    ]
  });
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal4').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal4.show();
  });

  var modal5 = $modal({
    title: 'Фотошоп',
    content: '<img src="gallery6.jpg" style="width: 800px; height: 800px;>',
    footerButtons: [
      
    ]
  });
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal5').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal5.show();
  });

  var modal6 = $modal({
    title: 'Заказная картина',
    content: '<img src="gallery7.jpg" style="width: 800px; height: 533px;>',
    footerButtons: [
      
    ]
  });
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal6').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal6.show();
  });

  var modal7 = $modal({
    title: 'Заказная картина',
    content: '<img src="gallery8.jfif" style="width: 800px; height: 510px;>',
    footerButtons: [
      
    ]
  });
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal7').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal7.show();
  });

  var modal8 = $modal({
    title: 'Заказная картина',
    content: '<img src="gallery9.jfif" style="width: 800px; height: 500px;>',
    footerButtons: [
      
    ]
  });
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal8').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal8.show();
  });