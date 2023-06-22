import axios from "axios";
/**
 * GET request using axios 
 * @param {string} term Search term provided by user 
 * @returns Links to the photos
 */
const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: "Client-ID tRMFhcNw9sDcGMScDrNRGqUpFprSWKiX6_qGZ16piJo"
        },
        params:{
            query: term,
        }
        });
        return response.data.results;
};

export default searchImages