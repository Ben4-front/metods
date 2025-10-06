// __tests__/character.test.js

import Character, {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../character.js';

// Тестирование успешного создания дочерних классов
describe('Character subclasses creation', () => {
  const characterData = [
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

// Тестирование ошибок в конструкторе базового класса Character
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