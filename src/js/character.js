// src/js/character.js

export default class Character {
  constructor(name, type) {
    const validTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be a string with a length between 2 and 10 characters.');
    }

    if (!validTypes.includes(type)) {
      throw new Error('Invalid character type.');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  /**
   * Increases level, attack, defence and restores health.
   * Throws an error if the character's health is 0.
   */
  levelUp() {
    if (this.health <= 0) {
      throw new Error('Cannot level up a dead character.');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  /**
   * Applies damage to the character.
   * Health cannot be negative.
   * @param {number} points - The amount of damage points.
   */
  damage(points) {
    if (this.health <= 0) {
      // Не наносим урон, если персонаж уже мертв
      return;
    }
    const damageTaken = points * (1 - this.defence / 100);
    this.health -= damageTaken;

    if (this.health < 0) {
      this.health = 0;
    }
  }
}

// ... дочерние классы остаются без изменений
export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}