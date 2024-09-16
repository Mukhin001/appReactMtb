import SliderClickHome from './sliderHome/sliderClickHome/SliderClickHome';
import SliderMouseHome from './sliderHome/sliderMouseHome/SliderMouseHome';

const MainHome = ({ widthDisplay }) => {

    return ( 
        <main>
            <h3>Home</h3>
            <SliderClickHome />
            <SliderMouseHome widthDisplay={widthDisplay} />
        </main>

     );
}
 
export default MainHome;