setup();

/* Runs whatever we need to get the page started */
function setup() {
  getPokemonList();
}

/*
  Reaches out to Pokedex API and gets list of pokemon
  It runs attachPokeList when done
*/
function getPokemonList() {
  /* TODO 1 */
}

/*
  Reaches out to Pokedex API and gets stats of individual pokemon
  It runs attachPokeView when it is done

  It should accept a URL to fetch
*/
function getPokemon(url) {
  /* TODO 2 */
}

/*
  Makes a pokelist node, appends it as a child to the container
*/
function attachPokeList(pokemon) {
  let pokelist = makePokeList(pokemon);
  let container = document.querySelector(".pokelist-container");

  container.appendChild(pokelist);
}

/*
  Removes pokelist from container if it exists
*/
function removePokeList() {
  let pokelist = document.querySelector(".pokelist");
  if (pokelist) {
    pokelist.remove();
  }
}

/*
  Makes a pokelist DOM node (made up of a ul and many lis)
*/
function makePokeList(pokemon) {
  let ul = document.createElement("ul");
  ul.classList.add("pokelist");

  pokemon.forEach((p) => {
    let li = makePokeListItem(p);
    ul.appendChild(li);
  });

  return ul;
}

/*
  Makes a pokelist item DOM node 
*/
function makePokeListItem(pokemon) {
  let li = document.createElement("li");
  let text = document.createTextNode(pokemon.name);

  li.appendChild(text);
  li.dataset.url = pokemon.url;
  li.addEventListener("click", handlePokeListItemClick);
  return li;
}

/*
  Defines an event handler for when a pokelist item is clicked
*/
function handlePokeListItemClick(e) {
  getPokemon(e.target.dataset.url);
}

/*
  Makes a pokeview node, appends it as a child to the container
*/
function attachPokeView(pokemon) {
  let container = document.querySelector(".pokeview-container");
  let pokeview = makePokeView(pokemon);

  removePokeView();
  container.appendChild(pokeview);
}

/*
  Removes pokeview from container if it exists
*/
function removePokeView() {
  let pokeview = document.querySelector(".pokeview");
  if (pokeview) {
    pokeview.remove();
  }
}

/*
  Makes a pokelist DOM node (made up of wrapping div, h1, img, ul of moves)
*/
function makePokeView(pokemon) {
  let div = document.createElement("div");
  div.classList.add("pokeview");

  let h1 = makePokeViewHeading(pokemon.name);
  let img = makePokeViewImage(pokemon.sprites);
  let ul = makePokeViewMoveList(pokemon.moves);

  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(ul);

  return div;
}

/*
  Makes a pokeview heading DOM node 
*/
function makePokeViewHeading(name) {
  let h1 = document.createElement("h1");
  let text = document.createTextNode(name);

  h1.appendChild(text);

  return h1;
}

/*
  Makes a pokeview image DOM node 
*/
function makePokeViewImage(sprites) {
  let img = document.createElement("img");
  img.src = sprites.front_default;

  return img;
}

/*
  Makes a pokeview move list DOM node (has many li items that are moves)
*/
function makePokeViewMoveList(moves) {
  let ul = document.createElement("ul");

  moves.forEach((move) => {
    let li = makePokeViewMoveListItem(move);
    ul.appendChild(li);
  });

  return ul;
}

/*
  Makes a pokeview move list item DOM node 
*/
function makePokeViewMoveListItem(move) {
  let li = document.createElement("li");
  let text = document.createTextNode(move.move.name);

  li.appendChild(text);

  return li;
}