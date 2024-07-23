// src\components\Lists.jsx

import { useState } from "react";

const Lists = () => {
  return (
    <div
      className="w-full max-w-4xl mt-4 p-6"
      style={{ backgroundColor: "#f4faff", borderColor: "#219ebc" }}
    >
      <div className="flex justify-between mb-4">
        <button
          className="px-4 py-2 font-semibold text-white rounded-md"
          style={{ backgroundColor: "#fb8500" }}
        >
          Sort By
        </button>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 font-semibold text-white rounded-md"
            style={{ backgroundColor: "#8ecae6" }}
          >
            List
          </button>
          <button
            className="px-4 py-2 font-semibold text-white rounded-md"
            style={{ backgroundColor: "#8ecae6" }}
          >
            Grid
          </button>
        </div>
      </div>
      <div
        className="grid grid-cols-3 gap-4 mb-4 p-2 rounded-md"
        style={{ backgroundColor: "#e5f7ff" }}
      >
        <p className="font-bold" style={{ color: "#023047" }}>
          Title
        </p>
        <p className="font-bold" style={{ color: "#023047" }}>
          Due Date
        </p>
        <p className="font-bold" style={{ color: "#023047" }}>
          Importance
        </p>
      </div>
      <ul className="space-y-2">
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
      </ul>
    </div>
  );
};

const ListItems = () => {
  const [check, setCheck] = useState(false);
  const [imp, setImp] = useState(false);
  function handleChange(e) {
    setCheck(e.target.checked);
  }
  const fill0 = (
    <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
  );
  const fill1 = (
    <path d="m213-93 71-304L48-601l311-26 121-286 121 286 311 26-236 204 71 304-267-161L213-93Z" />
  );
  return (
    <li
      className="grid grid-cols-3 gap-4 p-2 border-2 rounded-md shadow-sm"
      style={{ backgroundColor: "#8ecae6", borderColor: "#219ebc" }}
    >
      <p className="flex items-center">
        <input
          type="checkbox"
          onChange={handleChange}
          className="cursor-pointer"
        />
        <span
          className={
            check ? "line-through ml-2 text-gray-500" : "ml-2 text-gray-700"
          }
        >
          This is Task
        </span>
      </p>
      <p className="flex items-center text-gray-700">Date</p>
      <button
        className="flex items-center justify-end"
        onClick={() => setImp(!imp)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={imp ? "#F19E39" : ""}
        >
          {imp ? fill1 : fill0}
        </svg>
      </button>
    </li>
  );
};

export default Lists;
