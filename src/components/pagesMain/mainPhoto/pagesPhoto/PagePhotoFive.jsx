import HtmlPhoto from './htmlPhoto/HtmlPhoto';

const PagePhotoFive = ({name, sliderOpacity, closeSlider, addImgArr, imgActive, openImg, slideWrapper, slideClickLeft, slideClickRight, sliderWrapperLeft, userNameLogin}) => {

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
                userNameLogin={userNameLogin}
            />
        </>    
     );
};
 
export default PagePhotoFive;