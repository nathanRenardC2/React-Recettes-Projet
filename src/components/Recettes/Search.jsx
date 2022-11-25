
export default function Search({ search, setSearch }) {
  return (
    <div className="search flex flex-col items-center dark:text-white">
      <label className="mb-3" htmlFor="search">Recherche d'une recette ( en anglais )</label>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}