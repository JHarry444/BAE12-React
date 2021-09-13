const Search = ({value, setValue}) => {
    return (
    <label>
        Filter
        <input onChange={e => setValue(e.target.value)} value={value}/>
    </label>
    )
}

export default Search;