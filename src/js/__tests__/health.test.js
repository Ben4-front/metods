
import getHealthStatus from '../health.js';

describe('getHealthStatus', () => {
  
  test('should return "healthy" when health is more than 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  // Название теста 2: "должен вернуть 'wounded'..."
  test('should return "wounded" when health is between 50 and 15', () => {
    const character = { name: 'Маг', health: 40 };
    expect(getHealthStatus(character)).toBe('wounded');
  });

  // Название теста 3: "должен вернуть 'critical'..."
  test('should return "critical" when health is less than 15', () => {
    const character = { name: 'Маг', health: 10 };
    expect(getHealthStatus(character)).toBe('critical');
  });

  // Добавим тест для пограничного значения 50
  test('should return "wounded" for health exactly 50', () => {
    const character = { name: 'Маг', health: 50 };
    expect(getHealthStatus(character)).toBe('wounded');
  });

  // Добавим тест для пограничного значения 15
  test('should return "wounded" for health exactly 15', () => {
    const character = { name: 'Маг', health: 15 };
    expect(getHealthStatus(character)).toBe('wounded');
  });
});

