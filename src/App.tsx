import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { searchRepos } from './redux/action-creators';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux';

function App() {
  const state = useSelector((state: RootState) => state.repositories);
  const dispatch = useDispatch();

  const { searchRepos } = bindActionCreators(actionCreators, dispatch);

  const [packageName, setPackageName] = useState <string>('')

  const onSubmit :any = (e: React.FormEvent<HTMLFormElement>) =>  {
    e.preventDefault();
    searchRepos(packageName)
  } 


  return (
    <div className="App">
      <form onSubmit = {onSubmit} >
          <input value={packageName} placeholder="Enter post number" onChange={(e) => setPackageName(e.target.value)} />
          <button>Find</button>
      </form>

      <h3>All Searched Posts</h3>
      {state.loading ? <p>Loading...</p> : 
      
      state?.data.map((post) => (
        <div>
        <h3>{post.title}</h3>
        </div>
      )) 


      }
    </div>
  );
}

export default App;
