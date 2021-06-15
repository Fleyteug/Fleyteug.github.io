    /* modal */
    
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
  















const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
