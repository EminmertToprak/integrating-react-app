// src/pages/EditProjectPage.jsx

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const API_URL = 'https://project-management-api-4641927fee65.herokuapp.com';

function EditProjectPage(props) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { projectId } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${API_URL}/projects/${projectId}`)
			.then((response) => {
				setTitle(response.data.title);
				setDescription(response.data.description);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleSubmitForm = (e) => {
		e.preventDefault();

		const requestBody = {
			title: title,
			description: description,
		};

		axios
			.put(`${API_URL}/projects/${projectId}`, requestBody)
			.then((response) => {
				navigate(`/projects/${projectId}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="EditProjectPage">
			<h3>Edit the Project</h3>

			<form onSubmit={handleSubmitForm}>
				<label>Title:</label>
				<input
					type="text"
					name="title"
					placeholder="enter the title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label>Description:</label>
				<textarea
					name="description"
					placeholder="short description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<button type="submit">Update Project</button>
			</form>
		</div>
	);
}

export default EditProjectPage;
