'Use strict'

document.addEventListener('DOMContentLoaded', function () {

    //burgerMenu

    const iconMenu = document.querySelector('.menu__icon');
    if (iconMenu) {
        const menuBody = document.querySelector('.menu__body');
        iconMenu.addEventListener('click', function(e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
        const smoothLinks = document.querySelectorAll('.menu__link');
        for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }); 
        } 
    };

    //formValidation

    const email = document.getElementById("mail");

    email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Please, enter your Email in a correct way");
        } else {
            email.setCustomValidity("");
        }
    });


    //popup

    const overlay = document.querySelector('.overlay');
    const popupThx = document.querySelector('.popup__thx');
    const thxCloseBtn = document.querySelector('[data-close]');

    

    function openPopup() {
        overlay.classList.add('_show');
        overlay.classList.remove('_hidden');
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        overlay.classList.add('_hidden');
        overlay.classList.remove('_show');
        document.body.style.overflow = '';
    }

    thxCloseBtn.addEventListener('click', function() {
        closePopup();
      });



    //formSend
    const ajaxSend = async (formData) => {
        const fetchResp = await fetch('send.php', {
            method: 'POST',
            body: formData
        });
        if (!fetchResp.ok) {
            throw new Error(`Error on ${url}, error status ${fetchResp.status}`);
        }
        return await fetchResp.text();
      };
      
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
      
            ajaxSend(formData)
                .then((response) => {
                    console.log(response);
                    form.reset(); 
                    openPopup();
                })
                .catch((err) => console.error(err))
        });
      });































});