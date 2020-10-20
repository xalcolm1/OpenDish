import React from 'react';
import { connect } from 'react-redux';
import sessionForm from './session_form'
import { login, clearErrors} from '../../actions/session_actions'

const mapStateToProps = ({errors}) => ({
    user: {
        email: '',
        password: ''
    },
    formType: 'Sign In',
    errors: errors.session,
    classname: "form-box login-form"
})

const mapDispatchToProps = dispatch => ({
    action: (user) => dispatch(login(user)),
    login:  (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm)