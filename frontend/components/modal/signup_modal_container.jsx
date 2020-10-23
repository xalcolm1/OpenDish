import React from "react";
import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = state => ({
    state: state,
    modalTitle:  <h1>Welcome to Table Ouverte!</h1>,
    formType: 'Sign Up'
})


export default connect(mapStateToProps)(Modal);