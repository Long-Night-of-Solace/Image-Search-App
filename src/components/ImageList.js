import ImageShow from "./ImageShow";
import "./ImageList.css";
/**
 * Maps through the images array and runs an instance of Image show for each element.
 * @param {array} renderedImages gets assigned each image through an instance of imageShow
 * @returns imaged through renderedImages variable
 */
function ImageList({images}) {
    const renderedImages = images.map((image) =>{
        return <ImageShow key={image.id} image={image}/>;
    })
    return <div className="image-list">{renderedImages}</div>;
}
export default ImageList;
