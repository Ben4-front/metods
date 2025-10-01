const healthIndicator = require('./healthIndicator');

describe('healthIndicator', () => {
  test('возвращает healthy, если здоровье больше 50', () => {
    expect(healthIndicator({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('возвращает wounded, если здоровье равно 50', () => {
    expect(healthIndicator({ name: 'Воин', health: 50 })).toBe('wounded');
  });

  test('возвращает wounded, если здоровье между 15 и 50', () => {
    expect(healthIndicator({ name: 'Лучник', health: 30 })).toBe('wounded');
  });

  test('возвращает critical, если здоровье меньше 15', () => {
    expect(healthIndicator({ name: 'Разбойник', health: 10 })).toBe('critical');
  });

  test('возвращает critical, если здоровье равно 0', () => {
    expect(healthIndicator({ name: 'Некромант', health: 0 })).toBe('critical');
  });

  test('возвращает wounded, если здоровье равно 15', () => {
    expect(healthIndicator({ name: 'Гном', health: 15 })).toBe('wounded');
  });
});