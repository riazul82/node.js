const url = new URL('https://hellomeaw.mw/?name=meaaaw');

const getName = url.searchParams.get('name');

console.log(getName); // meaaaw