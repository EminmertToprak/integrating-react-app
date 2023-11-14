import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'https://project-management-api-4641927fee65.herokuapp.com';

function ProjectListPage() {
	const [project, setProjects] = useState([]);

	const getAllProjects = () =>
		axios
			.get(`${API_URL}/projects?_embed=tasks`)
			.then((response) => {
				console.log('success');
				setProjects(response.data);
			})
			.catch((error) => {
				console.log('failed to connect');
				console.log(error);
			});

	useEffect(() => {
		getAllProjects();
	}, []);

	return (
		<div className="ProjectListPage">
			<h1>Projects</h1>

			{project.map((projectObj, i) => {
				return (
					<section className="card" key={projectObj.id}>
						<Link to="/projects">
							<h1>{projectObj.title}</h1>
						</Link>
					</section>
				);
			})}
		</div>
	);
}

export default ProjectListPage;
