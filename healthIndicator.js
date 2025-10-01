function healthIndicator(character) {
  const { health } = character;

  if (health > 50) {
    return 'healthy';
  }

  if (health <= 50 && health >= 15) {
    return 'wounded';
  }

  return 'critical';
}

module.exports = healthIndicator;