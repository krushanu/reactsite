import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './views/Landing';
import Intro from './views/Intro';
import Guide from './views/Guide';
import Reference from './views/Reference';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Switch>
						<Route path="/developer/en/api/dummy1/intro">
							<IntroPage />
						</Route>
						<Route path="/developer/en/api/dummy1/guide">
							<GuidePage />
						</Route>
						<Route path="/developer/en/api/dummy1/reference">
							<ReferencePage />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

function Home() {
	return <Landing />;
}

function IntroPage() {
	return <Intro />;
}

function GuidePage() {
	return <Guide />;
}

function ReferencePage() {
	return <Reference />;
}

export default App;
