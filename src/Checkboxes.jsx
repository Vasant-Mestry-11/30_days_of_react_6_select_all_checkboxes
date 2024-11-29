import { useState } from "react";

const Checkboxes = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Dogs", checked: false },
    { id: 2, label: "Cats", checked: false },
    { id: 3, label: "Cows", checked: false },
    { id: 4, label: "Deers", checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    const tempCheckboxes = [...checkboxes];
    tempCheckboxes.forEach((ele) => {
      if (ele.id === id) {
        ele.checked = !ele.checked;
      }
    });
    setCheckboxes(tempCheckboxes);
  };

  const handleSelectAll = () => {
    const tempCheckboxes = [...checkboxes];
    tempCheckboxes.forEach((ele) => {
      ele.checked = true;
    });
    setCheckboxes(tempCheckboxes);
  };

  return (
    <div className="h-screen w-full p-8 bg-stone-400">
      <div className="flex flex-col gap-3">
        {checkboxes.map(({ id, label, checked }) => {
          return (
            <div key={id} className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={checked}
                key={id}
                id={id}
                onChange={() => handleCheckboxChange(id)}
              />
              <label htmlFor={id} className="text-xl">
                {label}
              </label>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleSelectAll}
        className="mt-4 bg-slate-900 text-orange-300 px-4 p-2 rounded-md"
      >
        Select All
      </button>
    </div>
  );
};

export default Checkboxes;
