import React from 'react'
import Swal from 'sweetalert2';

export default function AddCoffee() {

   const handleSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const Chef = form.Chef.value;
    const Supplier = form.Supplier.value;
    const Taste = form.Taste.value;
    const Category = form.Category.value;
    const Details = form.Details.value;
    const Photo = form.url.value;
    const UserInfo = {name, Chef, Supplier, Taste, Category, Details, Photo}
    console.log(UserInfo);
    form.reset();

    fetch('http://localhost:5000/coffe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(UserInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'User Added Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
    

   }


  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Primary Contact</h2>

        <form onSubmit={handleSubmit}>
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
                required
                className="mt-1 w-full border border-yellow-500 rounded-md p-2 shadow-sm focus:ring-yellow-600 focus:border-yellow-600"
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
                className="mt-1 w-full border border-yellow-500 rounded-md p-2 shadow-sm focus:ring-yellow-600 focus:border-yellow-600"
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
                className="mt-1 w-full border border-yellow-500 rounded-md p-2 shadow-sm focus:ring-yellow-600 focus:border-yellow-600"
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
                className="mt-1 w-full border border-yellow-500 rounded-md p-2 shadow-sm focus:ring-yellow-600 focus:border-yellow-600"
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
                placeholder="Category
"
                className="mt-1 w-full border border-yellow-500 rounded-md p-2 shadow-sm focus:ring-yellow-600 focus:border-yellow-600"
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
                className="mt-1 w-full border border-yellow-500 rounded-md p-2 shadow-sm focus:ring-yellow-600 focus:border-yellow-600"
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
              required
              className="mt-1 w-full border border-yellow-500 rounded-md p-2 shadow-sm focus:ring-yellow-600 focus:border-yellow-600"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2  w-full bg-lime-500 text-white font-medium rounded-md shadow hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600"
            >
              Add Coffe
            </button>
          </div>
        </form>
      </div>
    </>
  )
}