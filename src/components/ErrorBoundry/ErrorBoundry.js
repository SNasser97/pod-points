import React, {Component} from "react";

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError:false
		}
		
	}
	
	componentDidCatch(error, errorInfo) {
		this.setState({hasError:true});
	}
	render() {
		if(this.state.hasError) {
			return <p className="title fs--3">Sorry, that wasn't supposed to happen <span role="img" aria-label="server asleep">😳</span></p>
		} // else
		return this.props.children;
	}
}

export default ErrorBoundry;