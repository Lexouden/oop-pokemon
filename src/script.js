import {
  Pikachu
} from './pokemons/pikachu.js';
import {
  Charmeleon
} from './pokemons/charmeleon.js';
import {
  writeToScreen
} from './pokemon.js';

const dickButt = new Pikachu({
  nickname: 'Dickbutt'
})

const derek = new Charmeleon({
  nickname: 'Derek the doofus'
});

writeToScreen(`${dickButt.nickname} has ${dickButt.hp} health. \n ${derek.nickname} has ${derek.hp} health.`, 'orange');

dickButt.attack(derek, dickButt.attacks.electricRing);
derek.attack(dickButt, derek.attacks.flare);