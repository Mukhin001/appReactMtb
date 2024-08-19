import HtmlPhoto from './htmlPhoto/HtmlPhoto';

const PagePhotoOne = ({name, sliderOpacity, closeSlider, addImgArr, imgActive, openImg, slideWrapper, slideClickLeft, slideClickRight, sliderWrapperLeft, userNameLogin}) => {
    return ( 
        <div>
            {name}
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
        </div>
     );
}
 
export default PagePhotoOne;