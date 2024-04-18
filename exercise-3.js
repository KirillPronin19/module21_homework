document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, есть ли имя в localStorage
    var userName = localStorage.getItem('userName');
    var lastVisit = localStorage.getItem('lastVisit');

    // Если нет имени, показываем prompt и записываем данные
    if (!userName) {
        userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
        if (userName) {
            var now = new Date();
            localStorage.setItem('userName', userName);
            localStorage.setItem('lastVisit', now);
        }
    } else {
        // Если имя есть, показываем alert и обновляем дату последнего визита
        var now = new Date();
        alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${lastVisit}.`);
        localStorage.setItem('lastVisit', now);
    }
});