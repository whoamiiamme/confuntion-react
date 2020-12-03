import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";


function SearchFormComponent(props) {
  const [searchTerm, setSearchTerm] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const handleInputChange = (event) => {
		const searchTerm = event.target.value;
		setSearchTerm(searchTerm);
	};

	const handleSearch = (event) => {
		event.preventDefault();
		if (searchTerm.trim() !== "") {
			setErrorMsg("");
			props.handleSearch(searchTerm);
		} else {
			setErrorMsg("Please enter a search term.");
		}
	};
  return (
    <React.Fragment>
      <Form onSubmit={handleSearch} className="searchForm-header">
				{errorMsg && <p className="errorMsg">{errorMsg}</p>}
				<Form.Group controlId="formBasicEmail" className="searchGroup">
					<Form.Control
						type="search"
						name="searchTerm"
						value={searchTerm}
						className="searchInput"
						placeholder="Search for album, artist or playlist"
						onChange={handleInputChange}
						autoComplete="off"
					/>
				</Form.Group>
				<Button variant="info" type="submit">
					Search
				</Button>
			</Form>
    </React.Fragment>
  )
}

export default  SearchFormComponent