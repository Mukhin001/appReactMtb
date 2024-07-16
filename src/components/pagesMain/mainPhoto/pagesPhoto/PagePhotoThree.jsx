import HtmlPhoto from "./HtmlPhoto";

const PagePhotoThree = ({name, sliderOpacity, closeSlider, addImgArr, imgActive, openImg, slideWrapper, slideClickLeft, slideClickRight, sliderWrapperLeft}) => {
    return ( 
        <div>
            Page PhotoThree
            <HtmlPhoto 
                name={name}
                sliderOpacity={sliderOpacity} 
                closeSlider={closeSlider}
                addImgArr={addImgArr} 
                imgActive={imgActive} openImg={openImg}
                slideWrapper={slideWrapper}
                slideClickLeft={slideClickLeft}
                slideClickRight={slideClickRight}
                sliderWrapperLeft={sliderWrapperLeft}
            />
        </div>
     );
}
 
export default PagePhotoThree;