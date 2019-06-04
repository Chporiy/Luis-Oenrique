document.addEventListener("DOMContentLoaded", () => {

  let slideIndex = 1,
      slides = document.getElementsByClassName("slider__block"),
      dotsWrap = document.querySelector(".slider__dots"),
      dots = document.getElementsByClassName("slider__dot");

  showSlides(slideIndex);

  function showSlides(n) {

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('slider__dot_active');
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].classList.add("slider__dot_active");

  }


  const next = setInterval (function plusSlides() {
    showSlides(slideIndex += 1);
  }, 5000);

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  dotsWrap.addEventListener("click", (event) => {
    let target = event.target;
    for (let i = 0; i < dots.length + 1; i++) {
      if (target.classList.contains("slider__dot") && target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });

  setTimeout(next, 1000);

  //Плавная прокрутка до элементов

  function animate(draw, duration) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
      // определить, сколько прошло времени с начала анимации
      let timePassed = time - start;
      // возможно небольшое превышение времени, в этом случае зафиксировать конец
      if (timePassed > duration) {
        timePassed = duration;
      }
      // нарисовать состояние анимации в момент timePassed
      draw(timePassed);
      // если время анимации не закончилось - запланировать ещё кадр
      if (timePassed < duration) {
        requestAnimationFrame(animate);
      }

    });
  }

  let menu = document.getElementsByTagName('nav')[0];

  menu.addEventListener('click', function (event) {
    event.preventDefault();
    animate(function () {
      let target = event.target;
      let section = document.getElementById(target.getAttribute('href').slice(1));
      window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
    }, 1500);
  });

  // Отправка данных на почту
  let form = document.querySelector(".form"),
    name = document.querySelector(".form__name"),
    email = document.querySelector(".form__email"),
    message = document.querySelector(".form__message"),
    formButton = document.querySelector(".form__button");

  formButton.addEventListener("click", (event) => {
    event.preventDefault();
    // fetch("../send.php", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: name.value,
    //     email: email.value,
    //     message: message.value
    //   })
    // }).then(function (response) {
    //   console.log(response.text());
    //   alert(response.text());      
    // });
    fetch("send.php", {
      method: "POST",
      body: new FormData(form)
    })
  }); 
    

});
