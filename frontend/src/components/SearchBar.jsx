import React, { useEffect, useState } from 'react'
import "./SearchBar.css"
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({input, setInput}) => {
	const [searchedItems, setSearchedItems] = useState([])
	const [relevantSearchItems, setRelevantSearchItems] = useState([])
	const [disableFilter, setDisableFilter] = useState(false);

	const updatedSearchedItems = () => {
		setSearchedItems((prevSearched) => {
			return [...prevSearched, input]
		})
	}

	const handleItemClick = (item) => {
		setInput(item);
		setDisableFilter(true);
		setRelevantSearchItems([]); 
	};

	useEffect(() => {
		if (!disableFilter) {
			setRelevantSearchItems(searchedItems.filter(containsChars))
		}else{
			setDisableFilter(false)
		}
	}, [input, searchedItems])

	const containsChars = (item) => {
		console.log("item: " + item.substring(0, input.length))
		console.log("input: " + input)
		return (item.substring(0, input.length)).toLowerCase() === input.toLowerCase() & input.length != 0
	}

  return (
		<div className='search-container'>
			<div className='search-bar-container'>
				<input className='search-bar-textarea' value={input} onChange={(e) => setInput(e.target.value)}/>
				<button className="search-bar-button" onClick={() => updatedSearchedItems()}><FaMagnifyingGlass className='search-bar-button-icon'/></button>
			</div>
			{relevantSearchItems.length > 0 &&
			<div className="searched-items-container">
				{relevantSearchItems.map((item, index) => (
					<div className="searched-item-row" key={index} onClick={() => handleItemClick(item)}>{item}</div>
				))}
			</div>
			}
		</div>
  )
}

export default SearchBar