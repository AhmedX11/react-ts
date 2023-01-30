import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { searchRepos } from './redux/action-creators';

function App() {
  const data = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const [packageName, setPackageName] = useState <string>('')



  dispatch(searchRepos(packageName))

  const onSubmit :any = (e: React.FormEvent<HTMLFormElement>) =>  {
    e.preventDefault();
   
  } 

  return (
    <div className="App">
      <form onSubmit = {onSubmit} >
          <input value={packageName} onChange={(e) => setPackageName(e.target.value)} />
          <button>Find</button>
      </form>
    </div>
  );
}

export default App;
