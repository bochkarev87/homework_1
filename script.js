document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const foodIcon = document.querySelector('.food-icon');
    const foodName = document.querySelector('.food-name');
    const lunchDisplay = document.querySelector('.lunch-display');
    
    // Исправленный массив с рабочими иконками Font Awesome 6.4
    const lunchMenu = [
        { name: "Pizza", icon: "fas fa-pizza-slice" },
        { name: "Sushi", icon: "fas fa-fish" },
        { name: "Burger", icon: "fas fa-hamburger" },
        { name: "Salad", icon: "fas fa-leaf" },
        { name: "Tacos", icon: "fas fa-pepper-hot" },
        { name: "Ramen", icon: "fas fa-utensils" },
        { name: "Sandwich", icon: "fas fa-bread-slice" },
        { name: "Pasta", icon: "fas fa-utensils" },
        { name: "Curry", icon: "fas fa-pepper-hot" },
        { name: "Steak", icon: "fas fa-drumstick-bite" },
        { name: "Soup", icon: "fas fa-utensils" },
        { name: "BBQ", icon: "fas fa-fire" }
    ];
    
    // Функция генерации случайного блюда
    function generateRandomLunch() {
        // Убираем класс анимации, если он есть
        lunchDisplay.classList.remove('fade-in');
        
        // Выбираем случайное блюдо
        const randomIndex = Math.floor(Math.random() * lunchMenu.length);
        const selectedLunch = lunchMenu[randomIndex];
        
        // Показываем состояние загрузки
        foodIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        foodName.textContent = "Thinking...";
        
        // Через полсекунды показываем выбранное блюдо
        setTimeout(() => {
            foodIcon.innerHTML = `<i class="${selectedLunch.icon}"></i>`;
            foodName.textContent = selectedLunch.name;
            
            // Добавляем анимацию
            lunchDisplay.classList.add('fade-in');
        }, 500);
    }
    
    // Привязываем клик к кнопке
    generateBtn.addEventListener('click', generateRandomLunch);
    
    // Генерируем блюдо при загрузке страницы
    generateRandomLunch();
});
