import React from 'react';
import './Blog.css';

export default class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: [],
		  currentPage: 1,
		};
	 };

	 componentDidMount() {
		this.loadComments();
	}

	handleLoadMore = e => {
 e.preventDefault();
 this.loadComments();
};

	loadComments () {
		 fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${this.state.currentPage++}`)
			  .then(response => response.json())
			  .then(res => this.setState({
					isLoaded: true,
				  items: this.state.items.concat(res.data)
			  }), error => {
					this.setState({
						 isLoaded: true,
						 error
					});
			  });

		 fetch("https://jordan.ashton.fashion/api/goods/30/comments")
		 .then (res => res.json())
		 .then (
			 (result) => {
				 this.setState ({
					 isLoaded: true,
					 items: result.data
				 });
			 },
			 (error) => {
				 this.setState ({
					 isLoaded: true,
					 error
				 });
			 });
		};

	
		 render() {
			 const {error, isLoaded, items} = this.state;
			 if (error) {
				 return <p>Error {error.message} </p>
			 } else if (!isLoaded) {
				return <p>Loading... </p>
			 } else {
				 return (
					 <div  className="Blog">
						 <ul>
						{items.map(item => (
							<li key={item.id}>
								<h5>{item.name}</h5>
								<p> {item.text} </p>
							</li>
					 ))}
				 		</ul>
						 <button className="commentButton"
                            onClick={this.handleLoadMore}>
                        Показать еще
                    </button>
				 	</div>

					
				 )  
				
			 }
	 }
}

