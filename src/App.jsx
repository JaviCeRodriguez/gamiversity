import React, { useState, useEffect } from 'react';
import { 
	BrowserRouter as Router, 
	Route, 
	Switch 
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Roadmap from "./pages/Roadmap/Roadmap";
import Perfil from "./pages/Perfil/Perfil";
import Menu from "./components/Menu/Menu";
import styled from "styled-components";
import { db } from './lib/firebase';

function App() {
	const AppStyle = styled.main`
		background-color: #13699c;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	`
	
	const Content = styled.div`
		border: 0.1rem solid #222;
		border-radius: 0.5rem;
		width: 90%;
		height: 90%;
		display: flex;
		box-shadow: 0.4rem 0.4rem 0rem black;
	`
	const [user, setUser] = useState([]);
 
	useEffect(() => {
		const userName = "javo" // Hardcodeado porque no implementé autenticación

		const getUser = async () => {
			db.onSnapshot(snapshot => {
				const userData = snapshot.docs.map(doc => 
					doc.data().name === userName ?   
						{
							id: doc.id,
							...doc.data()
						} : ''
				)
				setUser(userData);
			});
		}
   
	  	getUser();
	}, []);

	return (
		<AppStyle>
			<Router>
				<Content>
					<Switch>
						<Route exact path='/' >
							<Home />
						</Route>
						<Route exact path='/roadmap' >
							<Roadmap user = {user[0]} />
						</Route>
						<Route exact path='/perfil' >
							<Perfil user = {user[0]} />
						</Route>
					</Switch>
					<Menu />
				</Content>
			</Router>
		</AppStyle>
	);
}

export default App;
