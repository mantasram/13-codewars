function removeChar(str) {
  const removedChar = str.slice(1, -1);

  return removedChar;
}

console.log(removeChar("eloquent"), "loquen");
console.log(removeChar("country"), "ountr");
console.log(removeChar("person"), "erso");
console.log(removeChar("place"), "lac");
