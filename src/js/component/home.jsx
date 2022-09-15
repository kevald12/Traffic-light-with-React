import React, { useState } from "react";


//create your first component
const Home = () => {
	const [lightOn, setLightOn] = useState(1)
	return (
		<div className="d-flex justify-content-center">
			<div className="traffic-light p-3"> 
				<div onClick={( ) =>setLightOn(1)} className={`light ${lightOn === 1 ? 'red' : 'bg-dark' } `}></div>
				<div onClick={( ) =>setLightOn(2)} className={`light ${lightOn === 2 ? 'yellow' : 'bg-dark'} `}></div>
				<div onClick={( ) =>setLightOn(3)} className={`light ${lightOn === 3 ? 'green' : 'bg-dark'} `}></div>
			</div>
		</div>
	);
};

export default Home;
