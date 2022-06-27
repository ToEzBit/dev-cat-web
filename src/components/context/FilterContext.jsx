import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();
function FilterContextProvider({ children }) {
  const [reviewRating, setReviewRating] = useState(5);
  return (
    <FilterContext.Provider value={{ reviewRating, setReviewRating }}>
      {children}
    </FilterContext.Provider>
  );
}

const useFilter = () => {
  const ctx = useContext(FilterContext);
  return ctx;
};

export default FilterContextProvider;
export { useFilter };
