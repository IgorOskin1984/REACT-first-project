import React from "react";
import preloader from './../../../img/Spinner-1.5s-201px.svg'

const Preloader = (props) => {
	return (
		<div style={{ backgroundColor: 'white' }}>
			<img role={'main'} src={preloader} />
		</div>
	)
}
export default Preloader;