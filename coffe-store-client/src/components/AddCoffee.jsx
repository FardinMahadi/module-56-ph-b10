const AddCoffee = () => {
  return (
    <div className="bg-[#f4f3f0] p-24 text-black">
      <h2 className="text-3xl font-extrabold">Add Coffee</h2>
      <form>
        <div className="md:flex gap-5 ">
          <div className="join">
            <button className="btn join-item rounded-r-full">
              Coffee Name
            </button>
            <input
              type="text"
              className="input input-bordered join-item"
              placeholder="Coffee Name"
            />
          </div>

          <div className="join">
            <button className="btn join-item rounded-r-full">
              Available Quantity
            </button>
            <input
              type="number"
              className="input input-bordered join-item"
              placeholder="Available Quantity"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
