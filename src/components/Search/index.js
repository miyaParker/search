import {useState} from "react";
import './styles.scss';

const Search = () => {
    const [query, setQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [result, setResult] = useState("");
    const arr = {
        user: {
            id: 1,
            name: {
                firstName: "James",
                lastName: "Ibori"
            },
            location: {
                city: "Ikoyi",
                state: "Lagos",
                address: "One expensive house like that"
            }
        }
    };

    const updateQuery = (e) => {
        setResult('');
        setErrorMessage('');
        setQuery(e.target.value);
    }

    let resultFound = false;
    let currentPath = [];
    const searchObject = () => {
        if (!query.length) {
            console.error('Please enter a search value');
            setErrorMessage("Please enter a search value");
            return;
        }
        pathGet(arr, query.trim());
        resultFound ? setResult(currentPath.join('.')) : setResult('No results found for your query');

    }

    const pathGet = (arr, query) => {
        for (const key of Object.keys(arr)) {
            if (!resultFound) {
                console.log('looping arr')
                if (typeof arr[key] === "object") {
                    console.log(arr[key], 'is object');
                    currentPath.push(key)
                    pathGet(arr[key], query);
                }
                if (typeof arr[key] === "string") {
                    if (arr[key].toLowerCase() === query.toLowerCase()) {
                        console.log('result found');
                        resultFound = true;
                        console.log(key)
                        currentPath.push(key)
                        setResult(arr[key]);
                    }
                }
            }
        }
    }
    return (
        <>
            <section>
                <input type="text" className="form-control" onChange={updateQuery} value={query}/>
                <button id="search" onClick={searchObject}>Search</button>
            </section>
            <section className={'result'}>
                {errorMessage && <p className={'error'}>{errorMessage}</p>}
                {result && <p className={'result'}>{result}</p>}
            </section>
        </>
    )
}
export default Search