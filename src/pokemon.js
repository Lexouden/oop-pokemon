const dialogue = document.getElementById('dialogue');

// Function to write text to screen; with optional coloring.
export const writeToScreen = (text, color) => {
  const element = document.createElement('p');
  element.innerText = text;
  if (color) {
    element.style.color = color;
  }
  dialogue.appendChild(element);
}

// All available energy types
export const energyTypes = {
  lightning: 'lighting',
  fire: 'fire',
  water: 'water',
  fighting: 'fighting'
}

// Main pokemon class
export class Pokemon {
  // Assign nickname to Pokemon
  constructor({
    nickname
  }) {
    this.nickname = nickname;
  }

  // Attack method
  attack(enemy, attack) {
    // Checking if arguments are present
    if (!attack) {
      writeToScreen('You need to specify an attack!', 'red');
      return;
    }
    if (!enemy) {
      writeToScreen("Your pokemon can't fight its self, choose an opponent!", 'red');
    }

    // Getting the pokemon names to show
    const displayName = this.nickname || this.name;
    const enemyDisplayName = enemy.nickname || enemy.name;

    // Getting the enemy weakness and resistance
    const enemyWeakness = enemy.weakness.find(weakness => weakness.type === attack.type);
    const enemyResistance = enemy.resistance.find(resistance => resistance.type === attack.type);
    let effectiveness = '';
    let damage = attack.damage;

    // See if the enemy has a weakness against your energy type
    if (enemyWeakness) {
      damage *= enemyWeakness.multiplier;
      effectiveness = 'it was super effective, Now that\'s a lot a damage! ~Phil Swift';
    }

    // Check if the enemy has a resistance against your energy type
    if (enemyResistance) {
      damage -= enemyResistance.value;
      if (damage < 0) damage = 0;
      effectiveness = 'but you\'re useless against him..';
    }

    // Remove damage from enemy health
    enemy.health -= damage;

    // Write result to screen
    let msg = `${displayName} used ${attack.name} to attack ${enemyDisplayName} ${effectiveness}. \n ${enemyDisplayName} has ${enemy.health} health left.`;
    writeToScreen(msg);
  }
}