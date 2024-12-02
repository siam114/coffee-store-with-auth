import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://5th-coffee-store-server.vercel.app/coffee/${_id}`,{
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side shadow-xl bg-[#F5F4F1] p-4">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between pl-4 items-center w-full">
        <div>
          <h2 className="card-title">Name : {name}</h2>
          <p>Quantity : {quantity}</p>
          <p>Supplier : {supplier}</p>
          <p>Taste : {taste}</p>
          <p>Category : {category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item bg-[#D2B48C] text-white">
              View
            </button>
            <Link to={`/updateCoffee/${_id}`}>
            <button className="btn join-item bg-[#3C393B] text-white">
              Edit
            </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-[#EA4744] text-white"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
  coffees: PropTypes.array.isRequired,
  setCoffees: PropTypes.func.isRequired
};
export default CoffeeCard;
