import { useState } from "react";
import './SearchBar.css';

/**
 * Prevents default form input and calls the event handler based on the term
 * Sets the term to empty with useState then watches for a change in the input
 * Uses setTerm to set the value from the input
 * @param {string} term Search term provided by user
 * @returns A form which is used to get the term from the user
 */
function SearchBar({ onSubmit}) {
const [term, setTerm] = useState("");


 const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
 };

 const handleChange = (event) => {
    setTerm(event.target.value);

 };

    return (
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>
    );
}
export default SearchBar;
