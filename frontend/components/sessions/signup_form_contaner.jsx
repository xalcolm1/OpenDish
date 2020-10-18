import React from 'react'
import { connect } from 'react-redux';
import sessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions'

const mapStateToProps = ({errors}) => ({
    user: {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    },
    formType: 'Sign Up',
    errors: errors.session,
    classname: "form-box signup-form"
})

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);