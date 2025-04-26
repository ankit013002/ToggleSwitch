import React, { useEffect, useRef, useState } from 'react'
import "./TopNavBar.css"

const TopNavBar = ({options, selectedOption, setSelectedOption}) => {
  const itemRefs = useRef([]);
  const [barLeft, setBarLeft] = useState('0px');
  const [barWidth, setBarWidth] = useState('0px');
	
	useEffect(() => {
		const index = options.indexOf(selectedOption);
		if(index !== -1 && itemRefs.current[index]){
			const el = itemRefs.current[index];
			setBarLeft(`${el.offsetLeft}px`);
      setBarWidth(`${el.offsetWidth}px`);
		}
	},  [selectedOption, options])

	return (
    <div className="top-nav-container">
			{options.map((item, index) => (
					<div 
						key={index} ref={el => itemRefs.current[index] = el} className="nav-bar-item" onClick={() => setSelectedOption(item)}>
						<div className='nav-bar-item-icon'>
							{item.icon}
						</div>
						<div className='nav-bar-item-title'>
							{item.title}
						</div>
				</div>
			))}
			<div className="nav-bar-item-selected-container" style={{left: barLeft, width: barWidth}}>
					<div className="nav-bar-item-selected-light"/>
					<div className="nav-bar-item-selected-bar"/>
			</div>
		</div>
  )
}

export default TopNavBar