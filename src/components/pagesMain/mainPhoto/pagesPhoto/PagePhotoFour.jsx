import HtmlPhoto from "./HtmlPhoto";


const PagePhotoFour = ({name, sliderOpacity, closeSlider, addImgArr, imgActive, openImg, slideWrapper, slideClickLeft, slideClickRight, sliderWrapperLeft}) => {
    return ( 
        <>
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
        </>    
     );
}
 
export default PagePhotoFour;