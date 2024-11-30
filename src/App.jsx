import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function App() {
  const CoffeesData = useLoaderData();
  return (
    <>
      <h2>All Coffee Data:-{CoffeesData.length}</h2>
      <Link to='/addcoffes' className=' btn btn-accent'>Add Coffe User</Link>
   
    </>
  )
}
