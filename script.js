var pikadata = document.getElementById('pikadata');
var chardata = document.getElementById('chardata');
var attack1 = document.getElementById('attack1');
var attack2 = document.getElementById('attack2');

pikadata.innerHTML = `Base HP ${pikachu.nickname}(${pikachu.name}): <b>${pikachu.hp}</b>`;
chardata.innerHTML = `Base HP ${charmeleon.nickname}(${charmeleon.name}): <b>${charmeleon.hp}</b>`;

battle1(pikachu, charmeleon, pikachu.attack[0]);
battle2(charmeleon, pikachu, charmeleon.attack[1]);

function battle1(attacker, defender, attack) {
  var was_weak = false;
  var had_resistance = false;

  if (defender.resistance.type === attacker.type) {
    attack.damage - defender.resistance.value;
    had_resistance = true;
  } else if (defender.weakness.type === attacker.type) {
    attack.damage = attack.damage * defender.weakness.multiplier;
    was_weak = true;
  }

  if (had_resistance) {
    defender.hp -= attack.damage;
    attack1.innerHTML = `${defender.nickname}(${defender.name}) had a resistance for ${attacker.nickname}(${attacker.name}) he did only <b>${attack.damage}</b> damage... <br> Current HP ${attacker.nickname}(${attacker.name}): <b>${attacker.hp}</b> <br> Current HP ${defender.nickname}(${defender.name}): <b>${defender.hp}</b>`;
  } else if (was_weak) {
    defender.hp -= attack.damage;
    attack1.innerHTML = `${defender.nickname}(${defender.name}) had a weakness for ${attacker.nickname}(${attacker.name}), he did <b>${attack.damage}</b> damage! <br> Current HP ${attacker.nickname}(${attacker.name}): <b>${attacker.hp}</b> <br> Current HP ${defender.nickname}(${defender.name}): <b>${defender.hp}</b>`;
  } else {
    defender.hp -= attack.damage;
    attack1.innerHTML = `${defender.nickname}(${defender.name}) took <b>${attack.damage}</b> damage form ${attacker.nickname}(${attacker.name})'s attack. <br> Current HP ${attacker.nickname}(${attacker.name}): <b>${attacker.hp}</b> <br> Current HP ${defender.nickname}(${defender.name}): <b>${defender.hp}</b>`;
  }
}

function battle2(attacker, defender, attack) {
  var was_weak = false;
  var had_resistance = false;

  if (defender.resistance.type === attacker.type) {
    attack.damage - defender.resistance.value;
    had_resistance = true;
  } else if (defender.weakness.type === attacker.type) {
    attack.damage = attack.damage * defender.weakness.multiplier;
    was_weak = true;
  }

  if (had_resistance) {
    defender.hp -= attack.damage;
    attack2.innerHTML = `${defender.nickname}(${defender.name}) had a resistance for ${attacker.nickname}(${attacker.name}) he did only <b>${attack.damage}</b> damage... <br> Current HP ${attacker.nickname}(${attacker.name}): <b>${attacker.hp}</b> <br> Current HP ${defender.nickname}(${defender.name}): <b>${defender.hp}</b>`;
  } else if (was_weak) {
    defender.hp -= attack.damage;
    attack2.innerHTML = `${defender.nickname}(${defender.name}) had a weakness for ${attacker.nickname}(${attacker.name}), he did <b>${attack.damage}</b> damage! <br> Current HP ${attacker.nickname}(${attacker.name}): <b>${attacker.hp}</b> <br> Current HP ${defender.nickname}(${defender.name}): <b>${defender.hp}</b>`;
  } else {
    defender.hp -= attack.damage;
    attack2.innerHTML = `${defender.nickname}(${defender.name}) took <b>${attack.damage}</b> damage form ${attacker.nickname}(${attacker.name})'s attack. <br> Current HP ${attacker.nickname}(${attacker.name}): <b>${attacker.hp}</b> <br> Current HP ${defender.nickname}(${defender.name}): <b>${defender.hp}</b>`;
  }
}