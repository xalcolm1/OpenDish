import React from 'react';
import { connect } from 'react-redux';
import sessionForm from './session_form'
import { login } from '../../actions/session_actions'

const mapStateToProps = state => ({
    user: {
        email: '',
        password: ''
    },
    formType: 'Sign In'
})

const mapDispatchToProps = dispatch => ({
    action: () => dispatch(login)
})

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm)