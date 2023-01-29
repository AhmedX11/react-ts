import React from 'react'

interface Childprops{
    color: string,
    onClick: () => void,
    children?: React.ReactNode; //In React 18, children has to be added in interface props 
}

export const Child = ({color}: Childprops) => {
  return (
    <div>check color: {color}</div>
  )
}

export const ChildAsFC: React.FC <Childprops> = ({color, onClick, children }) => {
    return (
        <>
    {children}
      <div onClick={() => onClick()}>React FC - check color: {color}</div>
      </>
    )
    
  }