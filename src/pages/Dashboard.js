import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import DashComponent from '../components/dashboard/DashComponent';

class Dashboard extends React.Component {
    
    constructor(props, context) {
		super(props, context);
        this.props = props;
    }
    
    componentWillMount() {
        
    }

    render() {

        return ( 
            <DashComponent />
        );
    }
}

//accessing state from reducer 
function mapStateToProps(state, ownProps) {
	return {

	}
}

//determines what action available in a component
function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
