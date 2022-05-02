/*!
* Start Bootstrap - Shop Item v5.0.5 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$(document).ready(function() {
  $('.carousel').carousel({
    interval: 5000
  })
  $('.carousel').carousel('cycle')

  $('.carousel-control-prev').click(() => {
    $('.carousel').carousel('prev')
  })
  $('.carousel-control-next').click(() => {
    $('.carousel').carousel('next')
  })
})
