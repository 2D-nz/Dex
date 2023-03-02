import React from "react";
import "./App.css";
import Pokemons from "./components/Pokemons";
import SearchBar from "./components/SearchBar";

const App = () => {
	return (
		<div>
			<h1> Pokemon </h1>
			<SearchBar />
			<Pokemons />
		</div>
	);
};

export default App;
