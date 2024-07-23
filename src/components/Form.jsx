// src\components\Form.jsx

import { useState } from "react";

const Form = () => {
  const [text, setText] = useState(false);

  return (
    <div className="flex justify-center  w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full max-w-lg flex flex-col items-center p-6"
        style={{ backgroundColor: "#f4faff", borderColor: "#219ebc" }}
      >
        <label
          htmlFor="addInput"
          className="w-full flex items-center mb-4 border-b-2"
          style={{ borderColor: "#219ebc" }}
        >
          <span
            className="material-symbols-outlined"
            style={{ color: "#219ebc" }}
          >
            {text ? "check_box_outline_blank" : "add"}
          </span>
          <input
            type="text"
            id="addInput"
            onFocus={() => setText(true)}
            onBlur={() => setText(false)}
            className="w-full ml-2 p-2 text-gray-700 bg-gray-100 border-none focus:outline-none"
            placeholder="Add item"
          />
        </label>
        <div className="w-full flex items-center justify-between mb-4">
          <input
            type="date"
            className="mb-2 p-2 text-gray-700 bg-gray-100 border-none focus:outline-none"
          />
          <button
            type="submit"
            className="px-8 py-2 font-semibold text-white rounded-md"
            style={{ backgroundColor: "#219ebc" }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
