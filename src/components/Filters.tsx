import { FILTERS_BUTTONS } from "../consts";
import { FilterValue } from "../types";

interface Props {
  onFilterChange: (filter: FilterValue) => void;
  filterSelected: FilterValue; 
};

export const FIlters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {

  const handleClicl = (key: FilterValue) => {
    onFilterChange(key);
  }

  return (
    <ul className="filters">

      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => { 
        const isSelected = key === filterSelected;
        const classname = isSelected ? 'selected' : ''
        return (
        <li key={key}>
          <a
            href={href}
            className={classname}
            onClick={(event) => {
              event.preventDefault();
              handleClicl(key as FilterValue);
            }}
          >
            {literal}
          </a>
        </li>
      )})};
    </ul>
  );
}