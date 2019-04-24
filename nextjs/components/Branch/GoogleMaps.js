import React from 'react';
import styled from 'styled-components';

const GoogleMapsStyled = styled.div`
	position: relative;
	padding: 150px 0;

	h1 {
		position: absolute;
		top: 0;
		left: 0;
		margin-left: 96px;
	}

	iframe {
		width: 100%;
		height: 385px;
		border: none;
		overflow: none; 
		cursor: grab;
		border-top: 8px solid var(--pink);
		border-bottom: 8px solid var(--pink);
	}

	@media screen and (max-width: 768px) {
		iframe {
			margin-left: -16px;
		}
	}
`;



const GoogleMaps = ({branch}) => {
	return (
		<GoogleMapsStyled>
			<h1>We are here!</h1>
			<iframe height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${branch.acf.google_maps.lat},${branch.acf.google_maps.lng}&t=&z=11&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
		</GoogleMapsStyled>
	);
};

export default GoogleMaps;