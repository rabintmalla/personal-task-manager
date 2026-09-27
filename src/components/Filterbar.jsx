const FILTERS = ['All', 'Active', 'Completed']

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar">
      {FILTERS.map((f) => (
        <button key={f} className={f === activeFilter ? 'active' : ''} onClick={() => onFilterChange(f)}>
          {f}
        </button>
      ))}
    </div>
  )
}

export default FilterBar