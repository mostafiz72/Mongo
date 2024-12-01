import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard';

export default function App() {
  const CoffeesData = useLoaderData();
  const [coffes, setCoffes] = useState(CoffeesData)
  return (
    <>
    <div className=' container mx-auto my-5 flex justify-between'>
    <h2>All Coffee Data:-{CoffeesData.length}</h2>

    <Link to='/addcoffes' className=' btn btn-accent'>Add Coffe</Link>
    </div>
      <div className=' grid grid-cols-3 container mx-auto gap-5'>
        {
          coffes.map((item, index) => <CoffeeCard key={index} coffes={coffes} setCoffes={setCoffes} coffeeCard={item}></CoffeeCard>)
        }
      </div>
    </>
  )
}
