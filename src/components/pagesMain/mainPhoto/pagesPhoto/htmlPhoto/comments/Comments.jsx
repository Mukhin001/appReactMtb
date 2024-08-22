import { photoServer } from "../../../../../../server/photoServer";
import { useState, useEffect, useRef } from "react";

const Comments = ({name, userNameLogin}) => {
    const [userNameServer, setUserNameServer] = useState(userNameLogin);
    const [userCommentServer, setUserCommentServer] = useState('');
    const [userAnswerComment, setUserAnswerComment] = useState('');
    const [, setServer] = useState(photoServer);
    const inputName = useRef();
    const textarea = useRef(); 
    const [clickAnswer, setClickAnswer] = useState({userName: '', id: 0,});

    useEffect(() => {
        if(userNameLogin !== 'anonimus') {
            inputName.current.setAttribute('value', userNameLogin);
            inputName.current.setAttribute('readonly', '');
        }
        
    });

    useEffect(() => {}, [clickAnswer]);
  
    function clearTextArea() {
        if(userNameLogin !== 'anonimus') {
            inputName.current.setAttribute('value', userNameLogin);
            inputName.current.setAttribute('readonly', '');
        }  else {
            inputName.current.value = '';
        }
        
        textarea.current.value = '';
    };
    
    function setUserNameServerFn(value) {
        setUserNameServer(value.target.value);
    };

    function setUserCommentServerFn(value) {
        setUserCommentServer(value.target.value);
    }; 

    function getUserComment() {
        if(userCommentServer === '') {
            alert('add comment!');
            return;
        }
        const date = new Date();

        let commentMinutes;
            (date.getMinutes() < 10) ? commentMinutes = `0${date.getMinutes()}` : commentMinutes = date.getMinutes();
        let commentHours; 
            (date.getHours() < 10) ? commentHours = `0${date.getHours()}` : commentHours = date.getHours();
        let commentDateDay;
            (date.getDate() < 10) ? commentDateDay = `0${date.getDate()}` : commentDateDay = date.getDate();
        let commentDateMonth;
            (date.getMonth() < 10) ? commentDateMonth = `0${date.getMonth() + 1}` : commentDateMonth = date.getMonth() + 1;

        const commentDateYear = date.getFullYear();


        photoServer.forEach(obj => {
            
            if(obj.name === name) { 
                    
                    obj.comments.push({ userName: userNameServer,
                                        id: obj.comments.at(-1).id + 1,
                                        userComment: userCommentServer,
                                        date: `${commentDateDay}.${commentDateMonth}.${commentDateYear}`, 
                                        time: `${commentHours}:${commentMinutes}`,
                                        answer: [],
                    });
                    setServer({ userName: userNameServer,
                                id: obj.comments.at(-1).id + 1,
                                userComment: userCommentServer,
                                date: `${commentDateDay}.${commentDateMonth}.${commentDateYear}`, 
                                time: `${commentHours}:${commentMinutes}`,
                                answer: [],
                    });     
            } 
 
        });
        
        if(userNameLogin !== 'anonimus') {
            inputName.current.setAttribute('value', userNameLogin);
            inputName.current.setAttribute('readonly', '');
        }  else {
            inputName.current.value = '';
        }
        textarea.current.value = ''; 
    };

    function answerComment(elem) {
        setClickAnswer({   
                            userName: `${elem.target.getAttribute('data-username')}`,
                            id: `${elem.target.getAttribute('data-userid')}`,
                            //userComment: `${elem.target.getAttribute('data-usercomment')}`,
                        });             
        elem.target.nextSibling.style.display = 'block'; 
       
    };

    function closeUserAnswerComment(elem) {
        elem.target.previousSibling.value = '';
      
        elem.target.parentNode.nextSibling.children[1].value = '';
        elem.target.parentNode.parentNode.style.display = 'none';
    };

    function setUserAnswerCommentFn(value) {
        setUserAnswerComment(value.target.value);
    };

    function submitAnswer(elem) {
        if(userAnswerComment === '') {
            alert('add comment!');
            return;
        }

        const date = new Date();

        let commentMinutes;
            (date.getMinutes() < 10) ? commentMinutes = `0${date.getMinutes()}` : commentMinutes = date.getMinutes();
        let commentHours; 
            (date.getHours() < 10) ? commentHours = `0${date.getHours()}` : commentHours = date.getHours();
        let commentDateDay;
            (date.getDate() < 10) ? commentDateDay = `0${date.getDate()}` : commentDateDay = date.getDate();
        let commentDateMonth;
            (date.getMonth() < 10) ? commentDateMonth = `0${date.getMonth() + 1}` : commentDateMonth = date.getMonth() + 1;

        const commentDateYear = date.getFullYear();

        photoServer.forEach(obj => {
            
            if(obj.name === name) {
                obj.comments.forEach(object => {
                    
                    if(object.userName === clickAnswer.userName && object.id === +clickAnswer.id) {
                        //console.log(object.answer);
                        object.answer.push({ userNameAnswer: userNameServer,
                                             userCommentAnswer: userAnswerComment,
                                             date: `${commentDateDay}.${commentDateMonth}.${commentDateYear}`, 
                                             time: `${commentHours}:${commentMinutes}`,
                        });

                        setServer({ userNameAnswer: userNameServer,
                                    userCommentAnswer: userAnswerComment,
                                    date: `${commentDateDay}.${commentDateMonth}.${commentDateYear}`, 
                                    time: `${commentHours}:${commentMinutes}`,
                        });
                        }
                })
            } 
        });
            
            elem.target.parentNode.firstChild.children[1].value = '';
            elem.target.parentNode.children[1].children[1].value = '';
            elem.target.parentNode.style.display = 'none';
    };

    function showAnswersFn(elem) {
        elem.target.style.display = 'none';
        elem.target.nextSibling.style.display = 'block';
        elem.target.parentNode.lastChild.style.display = 'block';
    };

    function hiddenAnswersFn(elem) {
        elem.target.style.display = 'none';
        elem.target.previousSibling.style.display = 'block';
        elem.target.nextSibling.style.display = 'none';
    };

    function increaseLikeComment(elem) {
        photoServer.forEach(obj => {
            obj.comments.forEach(objComment => {
                
                if(objComment.userName === elem.target.parentNode.nextSibling.getAttribute('data-username') && objComment.id === +elem.target.parentNode.nextSibling.getAttribute('data-userid')) {
                    objComment.like += 1;
                    
                      setClickAnswer({   
                        like: objComment.like,
                    }); 
                }
            })
        })
    };

    function increaseDisLikeComment(elem) {
        photoServer.forEach(obj => {
            obj.comments.forEach(objComment => {
                
                if(objComment.userName === elem.target.parentNode.nextSibling.getAttribute('data-username') && objComment.id === +elem.target.parentNode.nextSibling.getAttribute('data-userid')) {
                    objComment.dislike += 1;
                    
                      setClickAnswer({   
                        dislike: objComment.dislike,
                    }); 
                }
            })
        })
    };


    function increaseLikeAnswer(elem) {
        
        photoServer.forEach(obj => {
            obj.comments.forEach(objComment => {

                if(objComment.userName === elem.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].getAttribute('data-username') && objComment.id === +elem.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].getAttribute('data-userid')) {
                    objComment.answer.forEach(objAnswer => {
                        objAnswer.likeAnswer += 1;

                    setClickAnswer({   
                        likeAnswer: objAnswer.likeAnswer,
                    }); 
                    })
                    
                    
                }

               
                
            })
        })
        
    };

    function increaseDisLikeAnswer(elem) {

    };

    return ( 
        <div className='comment'>

            <div>
                {/* <form> */}
                    <div>
                        <label htmlFor="userName">userName</label>
                        <input ref={inputName} type="text" name='userName' id='userName' placeholder='userName' onChange={setUserNameServerFn} />
                    </div>
                    <div>
                        <label htmlFor="userComment">userComment</label>
                        <textarea ref={textarea} name="userComment" id="userComment" placeholder='userComment' required onChange={setUserCommentServerFn}></textarea>
                    </div>
                    <button onClick={clearTextArea} type='reset'>reset</button>
                    <button onClick={getUserComment}>submit</button>
                {/* </form> */}
            </div>        

            { photoServer.map(obj =>  {

                return (
                    (obj.name === name) &&
                        
                        obj.comments.map((objComment, index) => {
                            return (
                                <div key={objComment.userName + index}>

                                    <article>
                                        <h5>{objComment.userName}</h5>
                                        <p>{objComment.userComment}</p> 
                                        <time dateTime={objComment.date}>{objComment.date}</time>
                                        <span> in </span>
                                        <time dateTime={objComment.time}>{objComment.time}</time>       
                                    </article>

                                    <div>
                                        <button onClick={increaseLikeComment}>{`Like ${objComment.like}`}</button>
                                        <button onClick={increaseDisLikeComment}>{`Dislike ${objComment.dislike}`}</button>
                                    </div>

                                    <button onClick={answerComment} data-username={objComment.userName} data-userid={objComment.id}>answer</button>

                                    <div style={{marginLeft: '60px', display: 'none',}}>
                                        <div>
                                            <label htmlFor={`userNameAnswer ${index}`}>answer</label>
                                            <input type="text" name='userNameAnswer' id={`userNameAnswer ${index}`} onChange={setUserNameServerFn}/>
                                            <button onClick={closeUserAnswerComment} style={{marginLeft: '20px',}}>x</button>
                                        </div>
                                        <div>
                                            <label htmlFor={`userAnswerComment ${index}`}>answer</label>
                                            <textarea name="userAnswerComment" id={`userAnswerComment ${index}`} onChange={setUserAnswerCommentFn}></textarea>
                                        </div>
                                        <button>reset</button>
                                        <button onClick={submitAnswer}>submit</button>
                                    </div>

                                    {(objComment.answer.length <= 1) ? 
                                        objComment.answer.map((objAnswer, i) => {
                                        
                                            return (
                                                <div  key={objAnswer.userNameAnswer + 'answer' + i} >
                                                    <div>
                                                        <div className='answer' style={{marginLeft: '30px',}}>
                                                            <div>
                                                                <button onClick={increaseLikeAnswer}>{`Like ${objAnswer.likeAnswer}`}</button>
                                                                <button onClick={increaseDisLikeAnswer}>{`Dislike ${objAnswer.dislikeAnswer}`}</button>
                                                            </div>
                                                            <article>
                                                                <h6>{objAnswer.userNameAnswer}</h6>
                                                                <p>{objAnswer.userCommentAnswer}</p>
                                                                <time dateTime={objAnswer.date}>{objAnswer.date}</time>
                                                                <span> in </span>
                                                                <time dateTime={objAnswer.time}>{objAnswer.time}</time>
                                                            </article>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }) 
                                        : 
                                        <div>
                                            <button onClick={showAnswersFn}>{`Show answers ${objComment.answer.length}`}</button>
                                            <button onClick={hiddenAnswersFn} style={{display: 'none',}}>Hidden answers</button>
                                            <div style={{display: 'none',}}>
                                                {objComment.answer.map((objAnswer, i) => {
                                                    
                                                    return (
                                                        <div className='answer' key={objAnswer.userNameAnswer + 'answer' + i} style={{marginLeft: '30px',}}>
                                                            <div>
                                                                <button onClick={increaseLikeAnswer}>{`Like ${objAnswer.likeAnswer}`}</button>
                                                                <button onClick={increaseDisLikeAnswer}>{`Dislike ${objAnswer.dislikeAnswer}`}</button>
                                                            </div>
                                                            <article>
                                                                <h6>{objAnswer.userNameAnswer}</h6>
                                                                <p>{objAnswer.userCommentAnswer}</p>
                                                                <time dateTime={objAnswer.date}>{objAnswer.date}</time>
                                                                <span> in </span>
                                                                <time dateTime={objAnswer.time}>{objAnswer.time}</time>
                                                            </article>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    }

                                </div>
                            )
                        })      
                )
            })}       
        </div>
     );
};
 
export default Comments;