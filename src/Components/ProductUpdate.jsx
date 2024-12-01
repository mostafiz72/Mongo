import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function ProductUpdate() {

    const Updatedcoffee = useLoaderData();
    console.log(Updatedcoffee);
    
    const { _id, name, Chef, Supplier, Taste, Category, Details, Photo } = Updatedcoffee;

    const handleUpdate = (e) => {
     e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const Chef = form.Chef.value;
    const Supplier = form.Supplier.value;
    const Taste = form.Taste.value;
    const Category = form.Category.value;
    const Details = form.Details.value;
    const Photo = form.url.value;
    const UpdatedCoffee = {name, Chef, Supplier, Taste, Category, Details, Photo}
    console.log(UpdatedCoffee);

    /// send data to the server in my updated information's--------------------------------
     
    fetch(`http://localhost:5000/coffe/${_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(UpdatedCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Success',
          text: 'Coffee Updated Successfully',
          icon:'success',
          confirmButtonText: 'Ok'
        })
      }
      else{
        Swal.fire({
          title: 'Something went wrong',
          text: 'Your are not changes anything',
          icon: 'info',
          confirmButtonText: 'Ok'
        })
      }
    })

  };
   

  return (
    <>
     <div className=' container mx-auto my-10 border p-5 rounded-lg'>
        <h2 className=' text-3xl font-bold text-center my-3'>Updated User Info</h2>
     <form onSubmit={handleUpdate}>
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                name='name'
                type="text"
                id="firstName"
                placeholder="Name"
                defaultValue={name}
                className="mt-1 w-full border border-green-500 rounded-md p-2 shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Chef
              </label>
              <input
                name='Chef'
                type="text"
                id="lastName"
                placeholder="Chef"
                defaultValue={Chef}
                className="mt-1 w-full border border-green-500 rounded-md p-2 shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Supplier
              </label>
              <input
                name='Supplier'
                type="text"
                id="phone"
                placeholder="Supplier"
                defaultValue={Supplier}
                className="mt-1 w-full border border-green-500 rounded-md p-2 shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Taste
              </label>
              <input
                name='Taste'
                type="text"
                id="email"
                placeholder="Taste"
                defaultValue={Taste}
                className="mt-1 w-full border border-green-500 rounded-md p-2 shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                name='Category'
                type="text"
                id="email"
                placeholder="Category"
                defaultValue={Category} 
                className="mt-1 w-full border border-green-500 rounded-md p-2 shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Details
              </label>
              <input
                name='Details'
                type="text"
                id="email"
                placeholder="Details"
                defaultValue={Details}
                className="mt-1 w-full border border-green-500 rounded-md p-2 shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>
          </div>

          {/* Connection to Project */}
          <div className="mb-6">
            <label htmlFor="connection" className="block text-sm font-medium text-gray-700">
              URL
            </label>
            <input
              name='url'
              type="text"
              id="connection"
              placeholder="Your Photo URL"
              defaultValue={Photo}
              className="mt-1 w-full border border-green-500 rounded-md p-2 shadow-sm focus:ring-green-600 focus:border-green-600"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2  w-full bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-lime-600"
            >
              Updated Coffee
            </button>
          </div>
        </form>
     </div>
    </>
  )
}
