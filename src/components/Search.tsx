type Props = {
    query?: string,
    setQuery: (query: string) => void
    error ?: string
}
const Search = ({query, setQuery, error}: Props) => {

    return (
        <div>
            <input type="text" placeholder="Search" className="search" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <p className="error-message">{error ?? ''}</p>
        </div>
    );
};

export default Search;