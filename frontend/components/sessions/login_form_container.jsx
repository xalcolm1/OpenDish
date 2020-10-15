import React from 'react';
import { connect } from 'react-redux';
import sessionForm from './session_form'
import { login } from '../../actions/session_actions'

const mapStateToProps = ({errors}) => ({
    user: {
        email: '',
        password: ''
    },
    formType: 'Sign In',
    errors: errors.session
})

const mapDispatchToProps = dispatch => ({
    action: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm)