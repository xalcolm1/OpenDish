import React from 'react'
import { connect } from 'react-redux';
import sessionForm from './session_form';
import { signup } from '../../actions/session_actions'

const mapStateToProps = ({errors}) => ({
    user: {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    },
    formType: 'Sign Up',
    errors: errors.session
})

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);