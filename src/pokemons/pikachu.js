import {
  Pokemon,
  energyTypes
} from '../pokemon.js';

// Base class Pickachu, here are all default pokemon stats definded. 
export class Pikachu extends Pokemon {
  name = 'Pikachu';
  type = energyTypes.lightning;
  hp = 60;
  health = 60;
  resistance = [{
    type: energyTypes.fighting,
    value: 20
  }];
  weakness = [{
    type: energyTypes.fire,
    multiplier: 1.5
  }];
  attacks = {
    electricRing: {
      name: 'Electric Ring',
      damage: 50
    },
    pikapunch: {
      name: 'Pika Punch',
      damage: 20
    }
  }
}