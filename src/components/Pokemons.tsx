import { useState, useEffect } from "react";

const pokes = [];
function Pokemons() {
	const [pokemons, setPokemon] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		if (pokemons.length === 0) {
			const handlePokes = (arr: URL) => {
				fetch(arr)
					.then((resp) => resp.json())
					.then((data) => setPokemon((prevState) => [...prevState, data]));
				// setPokemon((prevState) => [...prevState, arr]);
			};

			// coloca os pokémons no Array poke, depois de "fetchar" o limite
			fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
				.then((resp) => resp.json())
				.then((data) => data.results.map((item: any) => handlePokes(item.url)));

			setLoading(false);
		}
	}, []);

	// const showData = (arr) => {
	// 	arr.map((item) =>
	// 		fetch(item)
	// 			.then((resp) => resp.json())
	// 			.then((data) => {
	// 				return (
	// 					<div>
	// 						<p> {data.name} </p>
	// 					</div>
	// 				);
	// 			})
	// 	);
	// };

	// showData(pokemons);

	return (
		<div onClick={() => console.log(pokemons)} className="grid grid-cols-3">
			{isLoading ? <p>Loading...</p> : ""}
			{pokemons.map((pokemon) => {
				return (
					<div className="flex items-center justify-evenly">
						<p>{pokemon.name}</p>
						<img src={pokemon.sprites.front_default} />
						<div>
							{/* {pokemon.types[0].type.name} */}
							{pokemon.types.map((tipo) => (
								<p>{tipo.type.name}</p>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Pokemons;
