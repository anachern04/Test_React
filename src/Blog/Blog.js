import React from 'react';
import './Blog.css';

export default class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: []
		};
	 }

	 componentDidMount {
		 fetch("https://jordan.ashton.fashion/api/goods/30/comments")
		 .then (res => res.json())
		 .then (
			 (result) => {
				 this.setState ({
					 isLoaded: true,
					 items: result.current_page
				 });
			 },
			 (error) => {
				 this.setState ({
					 isLoaded: true,
					 error
				 });
			 }
		 )
		}
		 render() {
			 const {error, isLoaded, items} = this.state;
			 if (error) {
				 return <p>Error {error.message} </p>
			 } else if (!isLoaded) {
				return <p>Loading... </p>
			 } else {
				 return (
					 <ul>
						 {items.map(item => (
							 <li key={item.name}>
								 <h5>{item.name}</h5>
								 <p> {item.text} </p>
							 </li>
						 ))}
					 </ul>
				 )
			 }
	 }
}

