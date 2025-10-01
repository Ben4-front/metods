function sortHeroes(heroes) {
  // создаём копию массива, чтобы не мутировать исходный
  return [...heroes].sort((a, b) => b.health - a.health);
}

module.exports = sortHeroes;