const CartItem = (props) => {
  return (
    <li className="flex justify-between items-center  border-b-2 border-solid border-orange-700 py-4 my-4">
      {/* <div>{props.name}</div> */}
      <div>
        <h2 className="mb-2 text-gray-900">{props.name}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-bold text-orange-700 ">{props.price}</span>
          <span className="font-bold border-2 border-solid border-gray-500 py-1 px-3 rounded-md text-grey-600">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex">
        <button
          className="font-bold border-2 border-solid border-orange-700 w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1 hover:text-white hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300"
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className="font-bold border-2 border-solid border-orange-700 w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1 hover:text-white hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};
export default CartItem;
