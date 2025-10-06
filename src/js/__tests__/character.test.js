// __tests__/character.test.js

import Character, {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../character.js';

// Тестирование успешного создания ВСЕХ дочерних классов
describe('Character subclasses creation', () => {
  const characterData = [
    // [Class, name, type, attack, defence]
    [Bowerman, 'Alex', 'Bowerman', 25, 25],
    [Swordsman, 'John', 'Swordsman', 40, 10],
    [Magician, 'Gendalf', 'Magician', 10, 40],
    [Undead, 'Skelet', 'Undead', 25, 25],
    [Zombie, 'Walker', 'Zombie', 40, 10],
    [Daemon, 'Diablo', 'Daemon', 10, 40],
  ];

  test.each(characterData)(
    'should create a new %s correctly',
    (CharacterClass, name, type, attack, defence) => {
      const character = new CharacterClass(name);
      const expected = {
        name,
        type,
        health: 100,
        level: 1,
        attack,
        defence,
      };
      expect(character).toEqual(expected);
    },
  );
});

// Тестирование ошибок в конструкторе базового класса
describe('Character class error handling', () => {
  test('should throw an error for a name shorter than 2 characters', () => {
    expect(() => new Character('A', 'Bowerman')).toThrow('Name must be a string with a length between 2 and 10 characters.');
  });

  test('should throw an error for a name longer than 10 characters', () => {
    expect(() => new Character('LooooooooongName', 'Swordsman')).toThrow('Name must be a string with a length between 2 and 10 characters.');
  });
  
  test('should throw an error if name is not a string', () => {
    expect(() => new Character(12345, 'Magician')).toThrow('Name must be a string with a length between 2 and 10 characters.');
  });

  test('should throw an error for an invalid character type', () => {
    expect(() => new Character('ValidName', 'Elf')).toThrow('Invalid character type.');
  });
});

// Тесты для метода levelUp
describe('levelUp method', () => {
  test('should correctly level up a living character', () => {
    const magician = new Magician('Gendalf');
    magician.health = 50;
    magician.levelUp();

    expect(magician.level).toBe(2);
    expect(magician.attack).toBeCloseTo(12); // Используем toBeCloseTo для чисел с плавающей точкой
    expect(magician.defence).toBeCloseTo(48);
    expect(magician.health).toBe(100);
  });

  test('should throw an error when trying to level up a dead character', () => {
    const swordsman = new Swordsman('John');
    swordsman.health = 0;

    expect(() => swordsman.levelUp()).toThrow('Cannot level up a dead character.');
  });
});

// Тесты для метода damage
describe('damage method', () => {
  let bowerman;

  beforeEach(() => {
    bowerman = new Bowerman('Robin');
  });

  test('should correctly calculate damage taken', () => {
    bowerman.damage(20);
    expect(bowerman.health).toBe(85);
  });

  test('should not allow health to go below zero', () => {
    bowerman.damage(200);
    expect(bowerman.health).toBe(0);
  });

  test('should not change health if character is already dead', () => {
    bowerman.health = 0;
    bowerman.damage(50);
    expect(bowerman.health).toBe(0);
  });
});