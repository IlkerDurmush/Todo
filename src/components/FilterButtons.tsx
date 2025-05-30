import React from "react";

type Filter = "all" | "active" | "completed";

interface FilterButtonsProps {
  currentFilter: Filter;
  onChangeFilter: (filter: Filter) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  currentFilter,
  onChangeFilter,
}) => {
  return (
    <div className="filter-buttons">
      <button
        className={currentFilter === "all" ? "active" : ""}
        onClick={() => onChangeFilter("all")}
      >
        All
      </button>
      <button
        className={currentFilter === "active" ? "active" : ""}
        onClick={() => onChangeFilter("active")}
      >
        Active
      </button>
      <button
        className={currentFilter === "completed" ? "active" : ""}
        onClick={() => onChangeFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
