import React from 'react'
import { Child, ChildAsFC } from './Child';


const Parent = () => {
  return (
    <ChildAsFC color="red" onClick ={() => console.log('hello')}>
       sdcs
    </ChildAsFC>
  )
}

export default Parent;