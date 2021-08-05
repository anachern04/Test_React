import { Component } from "react";
import './Form.css';

export class Form extends Component {
	state = {
		autorName: '',
		comment: ''
	};

	handleAutorNameChange = e => {
		this.setState({
			autorName: e.target.value
		})
	};

	handleCommentChange = e => {
		this.setState({
			comment: e.target.value
		})
	};

	handleClick = e => {
		e.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name:this.state.autorName, text: this.state.comment })
	  }
	  fetch('https://jordan.ashton.fashion/api/goods/30/comments', requestOptions)
			.then(response => response.json())
			.then(data => this.setState({ postId: data.id }));
	};
	
	render() {
		return (
			<form className="comment">
				<h3 className="commentTitle">Добавить комментарий</h3>
				<div className="commentAutor">
					<label
						className="control-label">
						Имя
						<span className="red">
							*
						</span>
					</label>
					<input type="text"
						className="form-control"
						id="name"
						name="autorName"
						placeholder="Имя"
						required
						value={this.state.autorName}
						onChange={this.handleAutorNameChange}>
					</input>
				</div>
				<div className="commentText">
					<textarea id="comment"
						name="comment"
						cols="45"
						rows="8"
						maxLength="65525"
						required="required"
						value={this.state.comment}
						onChange={this.handleCommentChange}>
					</textarea>
				</div>
				<button type="submit"
					className="commentButton"
					id="submit"
					onClick={this.handleClick}>
					Отправить коментарий
				</button>
			</form >
		)
	}
}