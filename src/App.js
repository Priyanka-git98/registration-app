import {connect} from 'react-redux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App({user}) {
  const renderForm = user ? <LoginForm/> : <SignupForm/>
  return (
    <div>
      {renderForm}
        </div>
  );
};

const mapStateToProps = (state) => ({
  user : state.auth.user, 
});

export default connect(mapStateToProps)(App);
