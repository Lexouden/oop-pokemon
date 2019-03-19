import {
  Pokemon,
  energyTypes
} from '../pokemon.js';

// Base class Charmeleon, here are all default pokemon stats definded. 
export class Charmeleon extends Pokemon {
  name = 'Charmeleon';
  type = energyTypes.fire;
  hp = 60;
  health = 60;
  resistance = [{
    type: energyTypes.lightning,
    value: 10
  }];
  weakness = [{
    type: energyTypes.water,
    multiplier: 2
  }];
  attacks = {
    headbutt: {
      type: energyTypes.fighting,
      name: 'Headbutt',
      damage: 10
    },
    flare: {
      type: energyTypes.fire,
      name: 'Flare',
      damage: 30
    }
  }
}