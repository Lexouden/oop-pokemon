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

  get weakness() {
    return this.weakness;
  }

  get resistance() {
    return this.resistance;
  }

  get health() {
    return this.health < 1 ? this.hp : this.health;
  }

  get displayName() {
    return this.nickname || this.name;
  }

  set takeDamage(damage) {
    this.health -= damage;
  }

  calculateDamage(attack) {
    // Find weakness and resistance
    let weakness = this.weakness.find(weakness => weakness.type === attack.type);
    let resistance = this.resistance.find(resistance => resistance.type === attack.type);

    let effectiveness = ''; 
    let damage = attack.damage;

    // See if the enemy has a weakness against your energy type
    if (weakness) {
      damage *= weakness.multiplier;
      effectiveness = 'it was super effective, Now that\'s a lot a damage! ~Phil Swift';
    }

    // Check if the enemy has a resistance against your energy type
    if (resistance) {
      damage -= resistance.value;
      if (damage < 0) damage = 0;
      effectiveness = 'but you\'re ineffective against him..';
    }

    // Let the pokemon take take its damage
    this.takeDamage = damage;

    return effectiveness;
  }

  // Attack method
  attack(enemy, attack) {
    // Checking if arguments are present
    if (!attack) {
      writeToScreen('You need to specify an attack!', 'red');
      return;
    }
    if (!enemy) {
      writeToScreen("Your pokemon can't fight by it self, choose an opponent!", 'red');
      return;
    }
    if (enemy.nickname === this.nickname) {
      writeToScreen("Your pokemon can't fight it self, choose an opponent!", 'red');
      return;
    }

    // Getting the pokemon names to show
    const displayName = this.nickname || this.name;
    const enemyDisplayName = enemy.displayName;

    let effectiveness = enemy.calculateDamage(attack);

    // Write result to screen
    let msg = `${displayName} used ${attack.name} to attack ${enemyDisplayName} ${effectiveness}. \n ${enemyDisplayName} has ${enemy.health} health left.`;
    writeToScreen(msg);
  }
}