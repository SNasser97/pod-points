import React from "react";

const SearchField = ({children, onSearchChange, onSearchSubmit, searchField}) => {
	return (
		<div className="SearchField">
			<h2 className="title fs--1">Find what interests you</h2>
			<div className="SearchField__field ">
				<input onChange={ onSearchChange }  type="text" className="SearchField__input fs--3" placeholder="Search for an episode"/>
			</div>
			<div className="SearchField__field ">
				<input onClick={ ()=> onSearchSubmit(searchField) } type="submit" value="Search" className="btn btn__full--secondary SearchField__btn "/>
			</div>
				{children}
		</div>
	)
}

export default SearchField;