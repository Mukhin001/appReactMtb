import { useRef, useState, } from 'react';
import st from './style.module.css';

const SocialNetwork = ({ userNameLogin, theme }) => {

    const wrapMessageChat = useRef();
    const inputChat = useRef('');
    const [messages, setMessages] = useState([]);
    const [bottom, setBottom] = useState('-210');
    const [opacity, setOpacity] = useState('0');
    const greetingnameArr = ['friend!', 'my boy!', 'good boy!', 'dog!']; 
    const [nameChat, setNameChat] = useState(userNameLogin);

    function sendMessageChat(elem) {
        if(elem.target.parentNode.previousSibling.children[1].value === '') { 
            return 
        }

        setMessages(prev => {
            return [...prev, elem.target.parentNode.previousSibling.children[1].value];
        });
        
        setTimeout(() => {
            elem.target.parentNode.previousSibling.children[1].value = '';
        }, 0);
    };

    function openBtnNetwork() {
     
        if(userNameLogin === 'anonimus') {
            let indexRandom = Math.floor(Math.random() * greetingnameArr.length);
            setNameChat(greetingnameArr[indexRandom]);
        } else {
            setNameChat(userNameLogin);
        }
        
            setTimeout(() => {
                setMessages(prev => {
                    return [...prev, `Hello ${nameChat}`];
                });
            }, 2000);
    
            setTimeout(() => {
                setMessages(prev => {
                    return [...prev, 'How a you?'];
                });
            }, 3000);

        
        setOpacity('1')
        setBottom('10');
    };

    function closeChat() {
        setMessages([]);
        setBottom('-210');
        setOpacity('0');
    };

    function deleteMessageChat() {
        inputChat.current.value = '';
    };

    return ( 
        <div className={st.SocialNetworkWrapper}>
            <button onClick={openBtnNetwork} className={st.btnNetwork}>network and chat</button>
            <div style={{bottom: `${bottom}px`, opacity: opacity}} className={st.wrapOpenChat}>

                <button onClick={closeChat} className={st.closeChat}>x</button>

                <div className={st.socialNetworkBtns} >
                    <a href="https://vk.com/" target='blank'><button>vk</button></a>
                    <a href="http://instagram.com/" target='blank'><button>instagram</button></a>
                    <a href="https://t.me/telegram" target='blank'><button>telegram</button></a>
                </div>

                <div className={st.onlineChat}>
                
                    <div ref={wrapMessageChat} className={st.wrapMessageChat}>
                        <p>wrapper text onlineChat</p>
                        {messages.map((p, i) => <p key={p + i} className={st.messageP}>{i} {p}</p> )}
                    </div>
                    <div>
                        <div className={st.wpapInputMessage}>
                            <label htmlFor="onlineChat">onlineChat</label>
                            <input ref={inputChat} style={{colorScheme: `${theme}`}} type="text" name='onlineChat' id='onlineChat' placeholder='onlineChat' />
                        </div>
                       <div>
                            <button onClick={sendMessageChat}>send message</button>
                            <button onClick={deleteMessageChat}>X</button>
                       </div>
                    </div>

                </div>
            </div>
        </div>
     );
};
 
export default SocialNetwork;