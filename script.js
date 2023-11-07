//https://pokeapi.co/api/v2/pokemon/

//get input value from form
//search data base for pokemon
//display pokemon number to user


const form = document.querySelector(`form`)

const currentList = [];
form.addEventListener (`submit`, async (event) => {
	event.preventDefault();

	const input = document.querySelector(`input`);
	const pokeName = input.value;

	const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
	// console.log(response);
	const pokemon = await response.json();

	console.log(pokemon);
	// console.log(pokemon.id);
	const list = document.querySelector(`ul`);
	list.style.textAlign = `center`

	for (i = 0; i <= currentList.length; i++) {
		if (currentList.includes(pokemon.name)) {
			alert(`${pokemon.name} is already in the Pokedex`)
			form.reset();
			input.focus();
			return;
		} else {
			currentList.push(pokemon.name);
			const newPoke = document.createElement(`p`);
			const pokePic = document.createElement(`img`)
			newPoke.innerText = `${pokemon.id}: ${pokemon.name.toUpperCase()}`;
			pokePic.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
			pokePic.style.height = `200px`
			pokePic.style.marginTop = `-40px`
			list.appendChild(newPoke);
			list.appendChild(pokePic);
			// console.log(currentList)
			form.reset();
			input.focus();
			return;
		}
	}

});








































// const form = document.querySelector(`form`);

// form.addEventListener(`submit`, async (event) => {
// 	event.preventDefault();
// 	const input= document.querySelector(`input`);
// 	const pokeNumber = input.value

// 	console.log(pokeNumber);
// 	const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`);
// 	const pokemon = await response.json();

// 	console.log(pokemon)

// 	const newPokemon = document.createElement(`li`);
// 	newPokemon.innerText = pokemon.name
	
// 	const ol = document.querySelector(`ul`);
// 	ol.appendChild(newPokemon);

// 	form.reset();
// 	input.focus();
// })
