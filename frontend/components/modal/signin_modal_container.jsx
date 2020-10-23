import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from '../sessions/login_form_container'
import Modal from './modal';

const mapStateToProps = state => ({
    state: state,
    modalTitle:  <h1>Please Sign in!</h1>,
    formType: 'Sign In',



})



export default connect(mapStateToProps)(Modal);