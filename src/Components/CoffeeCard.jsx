import React from 'react'
import { AiTwotoneEye } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CoffeeCard({ coffeeCard, coffes, setCoffes }) {
  console.log(coffeeCard);
  const { name, Chef, Supplier, Taste, Photo, _id } = coffeeCard;


  const handlePreview = id => {
    console.log(id);

  }
  const handleEdit = id => {
    console.log(id);

  }
  const handleDelete = id => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffe/${_id}`, {
          method: 'DELETE'
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              setCoffes(coffes.filter(c => c._id !== _id))
            }

          })
      }
    });


  }

  return (
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

        {/* Card Actions */}
        <div className="flex flex-col justify-center items-center pr-4 space-y-2">
          <Link to={`/details/${_id}`}>
            <button onClick={() => handlePreview(_id)} className=" text-xl btn btn-accent"><AiTwotoneEye /></button>
          </Link>
          <Link to={`/updates/${_id}`}>
            <button onClick={() => handleEdit(_id)} className=" text-xl btn btn-warning"><CiEdit /></button>
          </Link>
          <button onClick={() => handleDelete(_id)} className=" text-xl btn btn-error"> <MdDeleteForever />
          </button>
        </div>
      </div>
      <div className=' flex justify-end my-5'>
        <Link to={`/details/${_id}`}>
          <button className=' btn btn-accent'>View Details</button>
        </Link>
      </div>
    </div>
  )
}
