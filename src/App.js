import {connect} from 'react-redux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App({user}) {
  const renderForm = user ? <LoginForm/> : <SignupForm/>
  return (
    <div>
      <h1>Redux Login/Signup Form</h1>
      {renderForm}
    
    </div>
  );
};

const mapStateToProps = (state) => ({
  user : state.auth.user, 
});

export default connect(mapStateToProps)(App);
