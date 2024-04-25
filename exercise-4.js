function generateRandomNumber() {
    const min = 1;
    const max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // Генерация случайного числа
    return randomNumber;
  }
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function createPromise() {
    try {
      // Задержка в 3 секунды
      await delay(3000);
      const randomNumber = generateRandomNumber();
      console.log(`Завершено успешно. Сгенерированное число — ${randomNumber}`);
      return randomNumber;
    } catch (error) {
      console.log(`Завершено с ошибкой. Сгенерированное число — ${randomNumber}`);
      throw error;
    }
  }
  
  createPromise()
    .then(number => {
      console.log(`Обработка результата: ${number}`);
    })
    .catch(error => {
      console.error(error);
    });