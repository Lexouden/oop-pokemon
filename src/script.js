import {
  Pikachu
} from './pokemons/pikachu.js';
import {
  Charmeleon
} from './pokemons/charmeleon.js';

const dickButt = new Pikachu({
  nickname: 'Dickbutt'
})

const derek = new Charmeleon({
  nickname: 'Derek the doofus'
});

dickButt.attack(derek, dickButt.attacks.electricRing);
derek.attack(dickButt, derek.attacks.flare);