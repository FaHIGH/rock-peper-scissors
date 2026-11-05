function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}
console.log(getRandomInt(1,3))

function getRandom() {
  return Math.random();
}