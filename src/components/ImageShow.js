/**
 * Shows one instance of an image
 * @returns One image or alt text
 */
function ImageShow({image}) {
    return <div>
        <img src={image.urls.small} alt={image.alt_description}/>
    </div>;
}
export default ImageShow;