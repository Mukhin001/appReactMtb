import { useRef, useState, } from 'react';
import st from './style.module.css';

const SocialNetwork = () => {

    const wrapMessageChat = useRef();
    const [messages, setMessages] = useState([]);
    const [display, setDisplay] = useState('none');
    const [greetingChat, setGreetingChat] = useState(true);

    function sendMessageChat(elem) {
            
        if(elem.target.previousSibling.children[1].value === '') { 
            return 
        }

        setMessages(prev => {
            return [...prev, elem.target.previousSibling.children[1].value];
        });
        
        setTimeout(() => {
            elem.target.previousSibling.children[1].value = '';
        }, 0);
    };

    function openBtnNetwork() {
        
        if(greetingChat === true) {

            setGreetingChat(false);

            setTimeout(() => {
                setMessages(prev => {
                    return [...prev, 'Hello friend!'];
                });
            }, 1000);
    
            setTimeout(() => {
                setMessages(prev => {
                    return [...prev, 'How a you?'];
                });
            }, 3000);

        }
        
        setDisplay('block');
    };

    function closeChat() {
        setDisplay('none');
    };

    return ( 
        <div className={st.SocialNetworkWrapper}>
            <button onClick={openBtnNetwork} className={st.btnNetwork}>network and chat</button>
            <div style={{display}} className={st.wrapOpenChat}>

                <button onClick={closeChat} className={st.closeChat} style={{display}}>x</button>

                <div className={st.socialNetworkBtns} >
                    <button>vk</button>
                    <button>insta</button>
                    <button>telega</button>
                </div>

                <div className={st.onlineChat}>
                
                    <div ref={wrapMessageChat}>
                        <p>wrapper text onlineChat</p>
                        {messages.map((p, i) => <p key={p + i} className={st.messageP}>{i} {p}</p> )}
                    </div>
                    <div>
                        <div className={st.wpapInputMessage}>
                            <label htmlFor="onlineChat">onlineChat</label>
                            <input type="text" name='onlineChat' id='onlineChat' placeholder='onlineChat' />
                        </div>
                        <button onClick={sendMessageChat}>send message</button>
                    </div>

                </div>
            </div>
        </div>
     );
};
 
export default SocialNetwork;