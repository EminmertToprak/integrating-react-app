import { Routes, Route } from 'react-router-dom'; // <== IMPORT
import Navbar from './Components/Navbar'; // <== IMPORT
import HomePage from './pages/HomePage'; // <== IMPORT
import ProjectListPage from './pages/ProjectListPage';

function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<ProjectListPage />} />
			</Routes>
		</div>
	);
}

export default App;
