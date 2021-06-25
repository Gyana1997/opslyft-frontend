import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { InputField } from '../../basic/InputField';
import { Toast } from '../../basic/Toast';
import {bindActionCreators } from 'redux';
// import { FormRequestFailure, FormRequestSuccess, FormRequest } from '../../actions/FormAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';


class DashComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    render() {

        return (

            <div className="container">
                <div className="row card">

                </div>
                <div className="row">
                        <div className="col-md-4 card">
                        </div>
                        <div className="col-md-4 card">
                        </div>
                        <div className="col-md-4 card">
                        </div>
                </div>

                <div className="row card">
                </div>
            </div>
            
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {

    }
}


//determines what action available in a component
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashComponent);