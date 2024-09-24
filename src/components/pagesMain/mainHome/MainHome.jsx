import ImageHome from './imageHome/ImageHome';
import CarouselHome from './sliderHome/carouselHome/CarouselHome';
import SliderClickHome from './sliderHome/sliderClickHome/SliderClickHome';
import SliderMouseHome from './sliderHome/sliderMouseHome/SliderMouseHome';

const MainHome = ({ widthDisplay }) => {

    return ( 
        <main>
            <h3>Home</h3>
            <SliderClickHome />
            <SliderMouseHome widthDisplay={widthDisplay} />
            <CarouselHome />
            <ImageHome />
        </main>

     );
}
 
export default MainHome;