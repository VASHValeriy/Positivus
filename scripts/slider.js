document.addEventListener('DOMContentLoaded', () => {
    const trackItemButtons = document.querySelector('.reviews__pagination .pagination__Item'); // Список звездочек
    const paginationButtons = document.querySelectorAll('.pagination__button'); // Кнопки-звездочки
    const sliderWrapper = document.querySelector('.reviews__slider'); // Общий Контейнер со слайдами
    const trackSlides = document.querySelector('.reviews__slider-list'); // Контейнер со слайдами
    const sliderItems = document.querySelectorAll('.reviews__slider-item'); // Список слайдов
    const leftArrow = document.getElementById('buttonLeft'); // Левая стрелка
    const rightArrow = document.getElementById('buttonRight'); // Правая стрелка
    const slideCount = sliderItems.length - 1; // Количество слайдов
    const slideWidth = sliderItems[0].offsetWidth; // Ширина одного слайда
    let currentSlide = 0; // Индекс текущего слайда
    

    // Функция обновления активного состояния звездочек

    function updatePagination(index) {
      paginationButtons.forEach((button, idx) => {
          button.classList.toggle('is-current', idx === index); // Добавляем класс активной кнопке
      });
  }
    
  
    paginationButtons.forEach((buttons, index) => {
      buttons.addEventListener('click', () => {
        paginationButtons.forEach((btn) => btn.classList.remove('is-current')); // Убираем класс у всех кнопок
        buttons.classList.add('is-current'); // Добавляем класс текущей кнопке
          moveToSlide(index);
      });
  });
  
    // Функция перемещения карусели
    function moveToSlide(index) {
      if (index < 0) index = slideCount - 1; // Цикличность влево
      if (index >= slideCount) index = 0; // Цикличность вправо

      if (currentSlide === index) return;
  
        currentSlide = index; // Обновляем текущий слайд

        updatePagination(index)
        
          const offset = (currentSlide) * slideWidth;// Корректный сдвиг с учетом сдвига
          trackSlides.scrollTo({ left: offset, behavior: 'smooth' }); // Перемещаемся к нужному слайду
    }

    window.addEventListener('resize', () => {
        const newWidth = sliderWrapper.offsetWidth;
        moveToSlide(currentSlide); // Обновляем позицию слайда
    });

    // Обработчики для стрелок
    leftArrow.addEventListener('click', () => {
      moveToSlide(currentSlide - 1);
    });
  
    rightArrow.addEventListener('click', () => {
      moveToSlide(currentSlide + 1);
    });
  
    // Обработчики для кнопок-звездочек
    paginationButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        moveToSlide(index);
      });
    });



      // Инициализация
      updatePagination(currentSlide); // Устанавливаем активный класс для текущего слайда
  });
  