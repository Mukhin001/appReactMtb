import st from './style.module.css';
import {photoServer} from './photoServer';
import mobile from '../../../mobileFile/mobile.module.css';

const HtmlPhoto = ({name, sliderOpacity, closeSlider, addImgArr, imgActive, openImg, slideWrapper, slideClickLeft, slideClickRight, sliderWrapperLeft, userName}) => {

    function getUserComment(value) {
        console.log(value.target.parentNode[0].value);
        console.log(userName);
          
    }

    return ( 
        <div className='htmlPhoto'>
            <div onClick={openImg} className={`${st.pagePhotoContainer} ${mobile.pagePhotoContainer}`}>
                {photoServer.map((elem) => {
                    
                    return (
                        (elem.name === name) &&
                            elem.url.map((el, i) => {
                                return (
                                    <div className={st.pagePhotoImg} key={i}>
                                        <img src={el} alt={el.substring(26)} />
                                    </div>
                                )
                            }) 
                    )
                }     
            )
                }
            </div>
            
            <div style={{ left: `${sliderWrapperLeft}`, opacity: `${sliderOpacity}`}} className={st.sliderWrapper}>
                <div className={st.sliderContainer}>
                    <button onClick={slideClickLeft} className={st.btn}>left</button>
                    <div ref={slideWrapper} className={st.photoSlide}>
                        {
                        addImgArr.map(e => {
                                
                        return  (imgActive === e.src) 
                            ?
                                <div key={e.src.substring(26)} className={`${st.slideImg} ${st.slideImgActive}`}>
                                    <img src={e.src} alt={e.src.substring(26)} />
                                </div>  
                            :   
                                <div key={e.src.substring(26)} className={`${st.slideImg}`}>
                                    <img src={e.src} alt={e.src.substring(26)} />
                                </div>
                        }
                        )};
    
                    </div>
                    <button onClick={slideClickRight} className={st.btn}>right</button>
                </div>
                <button onClick={closeSlider} className={st.closeSlider}>close</button>
            </div> 

            <div className='comment'>

                <div>
                    <form>
                        <div>
                            <label htmlFor="userName">userName</label>
                            <input type="text" name='userName' id='userName' placeholder='userName' />
                        </div>
                        <div>
                            <label htmlFor="userComment">userComment</label>
                            <textarea name="userComment" id="userComment" placeholder='userComment' required ></textarea>
                        </div>
                        <button type='reset'>reset</button>
                        <button onClick={getUserComment}>submit</button>
                    </form>
                </div>        

                 { photoServer.map(elem =>  {
                    
                    return (
                        (elem.name === name) &&
                            elem.comments.map(objComment => {
                                return (
                                    <article key={objComment.userName}>
                                        <h5>{objComment.userName}</h5>
                                        <p>{objComment.userComment}</p> 
                                        <time dateTime={objComment.date}>{objComment.date}</time>       
                                    </article>
                                )
                            })
                    )
                 })}       
            </div>
        </div>    
     );
};
 
export default HtmlPhoto;