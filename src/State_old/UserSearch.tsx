import React, { useEffect, useRef, useState } from 'react'

const UserSearch = () => {

  // Use Refs in Typescript
  const inputRef = useRef <HTMLInputElement | null>(null);
  
  const [search, setSearch] = useState('');

  //Type unions, here initially, state is undefined before it is set.
  const [users, setUsers] = useState<{name: string, age: number, profession: string} | undefined> ();

  useEffect(() => {
    inputRef?.current?.focus();
  }, [])


  const allUsers = [
    {
      name: 'Sarah',
      age: 30,
      profession: 'Writer'
    },

    {
      name: 'Sarah',
      age: 30,
      profession: 'Writer'
    },

    {
      name: 'Jogn',
      age: 25,
      profession: 'Author'
    }
  ]

  const submitHandler = (e: any) => {
    e.preventDefault();

    const usersFound = allUsers.find(user => user.name.toLowerCase() === search.toLowerCase())
    // it accepts { name, age, profession } object
    setUsers(usersFound)
  } 

  return (
    <div> 
      <form onSubmit={submitHandler}>
      <input type="text" ref= {inputRef} value={search} placeholder="Search user" onChange={(e) => setSearch(e.target.value)} />
      <button>Find</button>
      </form>

      <h3>Found Users</h3>
      Name: {users?.name}, Age: {users?.age}, Profession: {users?.profession}


      
    </div>
  )
}

export default UserSearch;