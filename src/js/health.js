// Полностью замените ваш код в health.js на этот

export default function getHealthStatus(character) {
  // 1. Проверяем верхнюю границу. Если health > 50,
  //    возвращаем 'healthy' и функция на этом завершается.
  if (character.health > 50) {
    return 'healthy';
  }

  // 2. Если мы дошли сюда, значит health <= 50.
  //    Проверяем среднюю границу. Если health >= 15,
  //    возвращаем 'wounded' и выходим.
  if (character.health >= 15) {
    return 'wounded';
  }

  // 3. Если мы дошли досюда, значит health < 15.
  //    Это единственный оставшийся вариант.
  return 'critical';
}