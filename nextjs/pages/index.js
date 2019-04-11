import React from 'react';

import Layout from '../components/Layout';
import Support from '../components/Support';
import Mission from '../components/Mission';
import Box from '../components/Box';
import Contact from '../components/Contact';
import Activities from '../components/Activities';

const index = () => {

	return (
		<Layout>
			<Support/>
			<Mission/>
			<Box/>
			<Contact/>
			{/* <Activities/> */}
		</Layout>
	)
}

export default index;