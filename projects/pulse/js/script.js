$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        adaptiveHeight: true,
        prevArrow: '<button_l type="button" class="slick-prev"><img src="icons/4catalog/carousel/chevron_l.png"></button_l>',
        nextArrow: '<button_r type="button" class="slick-next"><img src="icons/4catalog/carousel/chevron_r.png"></button_r>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
              }
            },
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });

    $('.catalog-item__back').each(function(i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });


    /* modal */
    
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut();
    });
    $('.button_buy').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn();
      })
    });

    // Form Validation


    function valideForms(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Введите своё ФИО",
          phone: "Введите свой номер телефона",
          email: {
            required: "Введите свою почту",
            email: "Ваша почта не соответствует формату"
          }
        }
      });
    }

    valideForms('#consultation-first');
    valideForms('#consultation form');
    valideForms('#order form');

    // MASKED NUMBER

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function () {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow')


        $('form').trigger('reset');
      })
      return false;
    })

  });