/*Carrusel*/

const carousel = document.querySelector(".carousel");
    let slideIndex = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % carousel.children.length;
        showSlide(slideIndex);  
    }

    setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos.//


    window.addEventListener('scroll', function () {
        var redesociales = document.getElementById('myRedesociales');
        var offset = window.scrollY;
        
        if (offset >= 20) {
            redesociales.classList.add('active');
        } else {
            redesociales.classList.remove('active');
        }
    });



