import React, { useEffect } from 'react';
import Homescreen from './screens/homescreen'
import { 
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom';
import './App.css';
import Loginscreen from './screens/loginscreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser} from './features/userSlice';
import { auth } from './firebase';
import Profile from './screens/profilescreen';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else {
        dispatch(logout())
      }
    });return unsubscribe
  }, [dispatch])

  return(
    <div className='app'>
      <Router>
          {!user ? (<Loginscreen />) : (
          <Routes>
            <Route path='/' element={<Homescreen />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          )}
      </Router>
    </div>
  )
}

export default App;
