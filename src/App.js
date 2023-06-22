import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
/**
 *  Uses the handleSubmit function to comunicate the search term 'term' through the props system
 *  Uses state to watch for change in the form in order to rerender the component and all it's children when the image list is provided
 * @param {string} term Search term provided by user
 * @param {object} result Gets assigned the return value of the API through searchImages, updates tate through setImages
 * @param {array} images Works as a piece of state in App, starts empty, then is used to pass the image list to the ImageList component as a prop
 * @returns SearchBar and ImageList component
 */
function App() {
const [images, setImages] = useState([]);

    const handleSubmit = async(term) => {
        const result = await searchImages(term);

        setImages(result);
    }
    return(
    <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images}/>
    </div>
    );
}
export default App;
