
import sortHeroesByHealth from '../sorting.js';

test('should sort heroes by health in descending order', () => {
  // Входные данные
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  // Ожидаемый результат
  const expectedOrder = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  // Вызываем нашу функцию
  const sortedHeroes = sortHeroesByHealth(heroes);

  // Этот тест провалится, так как toBe сравнивает ссылки на объекты,
  // а sortedHeroes и expectedOrder — это два разных массива в памяти.
  // expect(sortedHeroes).toBe(expectedOrder);

  // А этот тест пройдет, так как toEqual рекурсивно сравнивает
  // содержимое объектов и массивов.
  expect(sortedHeroes).toEqual(expectedOrder);
});