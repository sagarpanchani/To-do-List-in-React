import React from "react";
class Header extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			like: 0,
			dislike: 0,
			likeClass: false,
			dislikeClass: false
		}
	}

	handleLike = () => {
		const { like, dislike, likeClass, dislikeClass } = this.state;
		
		if (!likeClass) {
			this.setState({
				like: this.state.like + 1,
				likeClass: true
			})
		} else {
			this.setState({
				like: this.state.like - 1,
				likeClass: false
			})
		}
		if (!likeClass && dislikeClass) {
			this.setState({
				like: this.state.like + 1,
				dislike: this.state.dislike - 1,
				likeClass: true,
				dislikeClass: false
			})
		}
	}
	
	handleDislike = () => {
		const { like, dislike, likeClass, dislikeClass } = this.state;
		
		if (!dislikeClass) {
			this.setState({
				dislike: this.state.dislike + 1,
				dislikeClass: true
			})
		} else {
			this.setState({
				dislike: this.state.dislike - 1,
				dislikeClass: false
			})
		}
		if (!dislikeClass && likeClass) {
			this.setState({
				like: this.state.like - 1,
				dislike: this.state.dislike + 1,
				likeClass: false,
				dislikeClass: true
			})
		}
	}
	
	render() {
		const { like, dislike, likeClass, dislikeClass } = this.state;
		
		return (
			<div>
				<button
					type="button"
					className={likeClass ? "like-button liked" : "like-button"}
					onClick={this.handleLike}
				>
					<span>{like}</span> Like
				</button>
				<button
					type="button"
					className={dislikeClass ? "dislike-button disliked" : "dislike-button"}
					onClick={this.handleDislike}
				>
					<span>{dislike}</span> Dislike
				</button>
			</div>
		)
	}
}


export  default Header;