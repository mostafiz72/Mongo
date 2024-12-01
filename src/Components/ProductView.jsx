import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ProductView() {
  
  const productView = useLoaderData();
  console.log(productView);
  const { name, Chef, Supplier, Taste, Photo, _id } = productView;
  
    
  return (
    <>
    
     <div className="container mx-auto">
     <div className=" shadow-md p-3 border rounded-lg">
      {/* Card Container */}
      <div className=" flex justify-between">
        {/* Coffee Image */}
        <figure className="pl-4">
          <img
            src={Photo}
            alt="Coffee"
          />
        </figure>

        {/* Card Content */}
        <div className=" flex flex-col justify-center p-4">
          <h2 className=" text-lg font-semibold">{_id}</h2>
          <h2 className=" text-lg font-semibold">{name}</h2>
          <p>{Chef}</p>
          <p>{Taste}</p>
        </div>
    </div>
    </div>
     </div>

    </>
  )
}
