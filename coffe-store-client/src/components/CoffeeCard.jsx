const CoffeeCard = ({ coffee }) => {
  const { name, chef, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="card card-side bg-base-300 shadow-xl hover:shadow-2xl mt-20 p-3">
      <figure>
        <img
          className="rounded-md object-fit h-full mr-5"
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="flex justify-between w-full">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>{chef}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button className="btn join-item">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
