$('#modal-production-button').click(function() {
  $('#modal-production').addClass("section-about__modal-active");
});

$('#modal-protect-button').click(function() {
  $('#modal-protect').addClass("section-about__modal-active");
});

$('#modal-delivery-button').click(function() {
  $('#modal-delivery').addClass("section-about__modal-active");
});

$('#modal-idea-button').click(function() {
  $('#modal-idea').addClass("section-about__modal-active");
});

$('#modal-perfect-button').click(function() {
  $('#modal-perfect').addClass("section-about__modal-active");
});

$('#modal-individual-button').click(function() {
  $('#modal-individual').addClass("section-about__modal-active");
});

$('#modal-call__me-button').click(function() {
  $('#modal-call__me').addClass("section-about__modal-active");
})

$('#modal-call__me-button__mobile-menu').click(function() {
  $('#modal-call__me').addClass("section-about__modal-active");
  $('.menu-mobile__popup').toggle();
  $('.mobile-menu__overlay').toggle();
})

$('#modal-call__me-button__header').click(function() {
  $('#modal-call__me').addClass("section-about__modal-active");
})

$('#modal-call__me-button__footer').click(function() {
  $('#modal-call__me').addClass("section-about__modal-active");
})

$('#modal-individual__project-button').click(function() {
  $('#modal-individual__project').addClass("section-about__modal-active");
})

$('#modal-individual__project-button__mobile').click(function() {
  $('#modal-individual__project').addClass("section-about__modal-active");
})

$('.section-about__modal-close').click(function() {
  $('.section-about__modal').removeClass('section-about__modal-active');
});

// Pay and warranty
$(function() {
  var tab = $('#tabs .tabs-items > div');
  tab.hide().filter(':first').show();

  // Клики по вкладкам.
  $('#tabs .tabs-nav a').click(function(){
    tab.hide();
    tab.filter(this.hash).show();
    $('#tabs .tabs-nav a').removeClass('active');
    $(this).addClass('active');


    $('.section-breadcrumb__item-active').text($(this).text());

    return false;
  }).filter(':first').click();

  // Клики по якорным ссылкам.
  $('.tabs-target').click(function(){
    $('#tabs .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
  });

});

// Sub pay and warranty
$(function() {
  var tab = $('#tab2 .tabs-items__sub > div');
  tab.hide().filter(':first').show();

  // Клики по вкладкам.
  $('#tab2 .tabs-nav__sub a').click(function(){
    tab.hide();
    tab.filter(this.hash).show();
    $('#tab2 .tabs-nav__sub a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();

  // Клики по якорным ссылкам.
  $('.tabs-target').click(function(){
    $('#tabs .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
  });

});

// Products
$(function() {
  var tab = $('#product-tabs .section-product__tabs-items > div');
  tab.hide().filter(':first').show();

  // Клики по вкладкам.
  $('#product-tabs .section-product__tabs-nav__item a').click(function(){
    tab.hide();
    tab.filter(this.hash).show();
    $('.section-product__tabs-nav__item a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();

});


// Уменьшение количества товара в корзине
$('.section-cart__count-dec').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});

// Уменьшение количества товара в корзине
$('.section-cart__count-inc').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});

// Уменьшение количества товара в карточке товара
$('.section-product__dec').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});

// Увеличение количества товара в карточке товара
$('.section-product__inc').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});

// Mobile menu
$('.btn-burger').click(function () {
  $('.menu-mobile__popup').toggle();
  $('.mobile-menu__overlay').toggle();
});

$('.menu-mobile__close').click(function () {
  $('.menu-mobile__popup').toggle();
  $('.mobile-menu__overlay').toggle();
});

$('.mobile-menu__overlay').click(function () {
  $('.menu-mobile__popup').toggle();
  $('.mobile-menu__overlay').toggle();
});

$('.menu-mobile__parent').click(function () {
  $(this).siblings("ul").toggle();
});

$('.menu-mobile__item-sub').click(function () {
  $('.menu-mobile__popup').toggle();
  $('.mobile-menu__overlay').toggle();
});


// Оплата и доставка select
$('#select-tabs').bind('change', function(){
  var idTab = $(this).val();
  $('#tab1').hide();
  $('#tab2').hide();
  $('#tab3').hide();

  $(idTab).show();

  if (idTab == '#tab2') {
    $('.tabs-nav__sub').hide();
    $('#tab1-sub').show();
    $('#tab2-sub').show();
  }
});
