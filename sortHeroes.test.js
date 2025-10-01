const sortHeroes = require('./sortHeroes');

describe('sortHeroes', () => {
  test('сортирует героев по убыванию здоровья', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortHeroes(input);

    // проверим, что содержимое совпадает по структуре
    expect(result).toEqual(expected);

    // и отдельно убедимся, что исходный массив не изменился
    expect(input).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
  });

  test('корректно работает с массивом из одного героя', () => {
    const oneHero = [{ name: 'маг', health: 100 }];
    expect(sortHeroes(oneHero)).toEqual([{ name: 'маг', health: 100 }]);
  });

  test('корректно работает с пустым массивом', () => {
    expect(sortHeroes([])).toEqual([]);
  });
});