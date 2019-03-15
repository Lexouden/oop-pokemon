class Pokemon {
  constructor(nickname, hp, type) {
    this.nickname = nickname;
    this.hp = hp;
    this.health = hp;
    this.type = type;
  }

  // Update HP after attack
  set updateHP(hp) {
    this.hp = hp;
  }
}

class Type extends Pokemon {

}

// Build Pikachu Form Pokemon
class Pikachu extends Pokemon {
  constructor(nickname, type, hp) {
    super(nickname, hp, type)

    this.name = 'Pikachu';
    this.attack = [{
        name: 'Electric Ring',
        damage: 50
      },
      {
        name: 'Pika Punch',
        damage: 20
      }
    ];
    this.weakness = {
      type: 'Fire',
      multiplier: 1.5
    };
    this.resistance = {
      type: 'Fighting',
      value: 20
    };
  }
}

// Build Charmeleon from Pokemon
class Charmeleon extends Pokemon {
  constructor(nickname, type, hp) {
    super(nickname, hp, type)

    this.name = 'Charmeleon';
    this.attack = [{
      name: 'Head Butt',
      damage: 10
    }, {
      name: 'Flare',
      damage: 30
    }];
    this.weakness = {
      type: 'Water',
      multiplier: 2
    };
    this.resistance = {
      type: 'Lightning',
      value: 10
    };
  }
}

// Create Pikachu
/*
  'Nickname',
  'EnergyType',
  'Hitpoints'
*/
const pikachu = new Pikachu(
  'Pika',
  'Lightning',
  60);

// Create Charmeleon
/*
  'Nickname',
  'EnergyType',
  'Hitpoints'
*/
const charmeleon = new Charmeleon(
  'Char',
  'Fire',
  60)