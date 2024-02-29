type Props = {
    query?: string,
    onChange: (search: any) => void
    error ?: string
}
const Search = ({query, error, onChange}: Props) => {
    const handleChange = (search: any) => {
        onChange(search)
    }
    return (
        <div>
            <input type="text" placeholder="Search" className="search" value={query} onChange={e => handleChange(e.target.value)} />
            <p className="error-message">{error ?? ''}</p>
        </div>
    );
};

export default Search;