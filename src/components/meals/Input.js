import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center">
      <label className="font-bold mr-2" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        className="w-12 pl-2 rounded border-solid border-2 border-red-400"
        ref={ref}
        {...props.input}
      />
    </div>
  );
});

export default Input;
