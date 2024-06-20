// import './styles.css'
export default function Search({ search, setSearch, handleSearch }) {

  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter a city name"
        name="search"
        value={search}
        onChange={(event) => {setSearch(event.target.value)}}
      />
      <button onClick={handleSearch} disabled={(search.length !== 0) ? false : true}>Search</button>
    </div>
  );
}
