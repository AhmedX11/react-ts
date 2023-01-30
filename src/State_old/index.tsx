import React, { useState } from 'react'

const index = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState<string[]>([])

  const submit = () => {
    setState([...state, name]);

  }
  return (
    <>
    <button onClick={() => submit()}>hello</button>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </>
  )
}

export default index;