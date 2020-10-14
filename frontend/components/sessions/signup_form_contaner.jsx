import { connect } from 'redux';
import sessionForm from './session_form';
import { signup } from '../../actions/session_actions'

const mapStateToProps = state => ({
    user: {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    },
    formType: 'Sign Up'
})

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm)