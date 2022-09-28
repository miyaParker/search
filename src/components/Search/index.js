const Search=()=>{
    const pathGet=()=>{
        console.log('getting path')
    }
    return(
        <section>
            <input type="text" className="form-control"/>
            <button id="search" onClick={pathGet}>Search</button>
        </section>
    )
}
export default Search