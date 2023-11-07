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

	//moved code to enable replace vs list
	const newPoke = document.querySelector(`p`);
	const pokePic = document.querySelector(`ul > img`);
	const message = document.querySelector(`div`)

	if (pokeName == `69420`) {
		console.log(`Test`)
		
		newPoke.innerText =`Hu hu hu hu hu`;
		pokePic.src = `https://i.imgflip.com/29gymp.jpg?a471720`;
		const list = document.querySelector(`ul`);
		list.style.textAlign = `center`;
		pokePic.style.margin = `10px`;
		pokePic.style.height = `250px`;
		message.innerText = `You're all muppets`;
	} else {
		const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
		// console.log(response);
		const pokemon = await response.json();
		
		console.log(`Why is this not appearing`);
		// console.log(pokemon);
		// console.log(pokemon.id);
		const list = document.querySelector(`ul`);
		list.style.textAlign = `center`
		
		// list.appendChild(newPoke);
	// list.appendChild(pokePic);

	// for (i = 0; i <= currentList.length; i++) {
	//  if (currentList.includes(pokemon.name)) {
		// 		alert(`${pokemon.name} is already in the Pokedex`)
		// 		form.reset();
		// 		input.focus();
		// 		return;
	// 	} else {
			// currentList.push(pokemon.name);
			// const newPoke = document.createElement(`p`);
			// const pokePic = document.createElement(`img`)
				
			newPoke.innerText = `${pokemon.id}: ${pokemon.name.toUpperCase()}`;
				
			pokePic.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
			pokePic.style.height = `200px`
			pokePic.style.marginTop = `-40px`
			message.innerText = `Are you happy now Nick? Ya muppet`
			// list.appendChild(newPoke);
			// list.appendChild(pokePic);
			// console.log(currentList)
			form.reset();
			input.focus();
			return;
		}
		// }
	// }

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
