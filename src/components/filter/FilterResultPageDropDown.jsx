import FilterResultPageContent from './FilterResultPageContent';

export default function FilterResultPageDropDown({
  title,
  LowerBoundPrice,
  upperBoundPrice,
  setLowerBoundPrice,
  setUpperBoundPrice,
  setRating,
  setDuration,
  setOrder,
}) {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" class="btn btn-ghost" htmlFor="price">
        <div className="flex justify-between gap-2">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </label>
      <div
        tabIndex="0"
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <FilterResultPageContent
          title={title}
          LowerBoundPrice={LowerBoundPrice}
          upperBoundPrice={upperBoundPrice}
          setLowerBoundPrice={setLowerBoundPrice}
          setUpperBoundPrice={setUpperBoundPrice}
          setRating={setRating}
          setDuration={setDuration}
          setOrder={setOrder}
        />
      </div>
    </div>
  );
}
