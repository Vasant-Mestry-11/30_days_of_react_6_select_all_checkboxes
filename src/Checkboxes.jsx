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
    setCheckboxes(tempCheckboxes)
  };

  return (
    <div className="container">
      <div>
        {checkboxes.map(({ id, label, checked }) => {
          return (
            <div key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                type="checkbox"
                checked={checked}
                key={id}
                id={id}
                onChange={() => handleCheckboxChange(id)}
              />
            </div>
          );
        })}
      </div>
      <button onClick={handleSelectAll}>Select All</button>
    </div>
  );
};

export default Checkboxes;
