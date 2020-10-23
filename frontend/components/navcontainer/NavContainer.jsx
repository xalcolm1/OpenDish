import { connect } from 'react-redux';
import Navbar from './nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({session, entities : {users}}) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout:  () => dispatch(logout()),
    
});

export default connect (mapStateToProps, mapDispatchToProps)(Navbar);