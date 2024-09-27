import { photoServer } from "../../../../../../server/photoServer";
import React, { useState, useEffect, useRef } from "react";

const Comments = ({name, userNameLogin}) => {
    const [userNameServer, setUserNameServer] = useState(userNameLogin);
    const [userCommentServer, setUserCommentServer] = useState('');
    const [userAnswerComment, setUserAnswerComment] = useState('');
    const [, setServer] = useState(photoServer);
    const inputName = useRef();
    const textarea = useRef(); 
    const blockCommetsResf = useRef([])
   

    const [clickAnswer, setClickAnswer] = useState({userName: '', idComment: 0,});

    useEffect(() => {
        if(userNameLogin !== 'anonimus') {
            inputName.current.setAttribute('value', userNameLogin);
            inputName.current.setAttribute('readonly', '');
        }
        
    }, [userNameLogin, clickAnswer]);

    //useEffect(() => {}, [clickAnswer]);
  
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

    function addUserComment() {
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
                                        idComment: obj.comments.at(-1).idComment + 1,
                                        userComment: userCommentServer,
                                        date: `${commentDateDay}.${commentDateMonth}.${commentDateYear}`, 
                                        time: `${commentHours}:${commentMinutes}`,
                                        like: 0,
                                        dislike: 0,
                                        answer: [],
                    });
                    setServer({ userName: userNameServer,
                                idComment: obj.comments.at(-1).idComment + 1,
                                userComment: userCommentServer,
                                date: `${commentDateDay}.${commentDateMonth}.${commentDateYear}`, 
                                time: `${commentHours}:${commentMinutes}`,
                                like: 0,
                                dislike: 0,
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
                            idComment: `${elem.target.getAttribute('data-userid')}`,
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
                    
                    if(object.userName === clickAnswer.userName && object.idComment === +clickAnswer.idComment) {
                    
                        object.answer.push({ userNameAnswer: userNameServer,
                                             idAnswer: object.answer.length + 1,
                                             userCommentAnswer: userAnswerComment,
                                             date: `${commentDateDay}.${commentDateMonth}.${commentDateYear}`, 
                                             time: `${commentHours}:${commentMinutes}`,
                                             likeAnswer: 0,
                                             dislikeAnswer: 0,
                        });

                        setServer({ userNameAnswer: userNameServer,
                                    idAnswer: object.answer.length + 1,
                                    userCommentAnswer: userAnswerComment,
                                    date: `${commentDateDay}.${commentDateMonth}.${commentDateYear}`, 
                                    time: `${commentHours}:${commentMinutes}`,
                                    likeAnswer: 0,
                                    dislikeAnswer: 0,
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
                
                if(objComment.userName === elem.target.parentNode.nextSibling.getAttribute('data-username') && objComment.idComment === +elem.target.parentNode.nextSibling.getAttribute('data-userid')) {
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
                
                if(objComment.userName === elem.target.parentNode.nextSibling.getAttribute('data-username') && objComment.idComment === +elem.target.parentNode.nextSibling.getAttribute('data-userid')) {
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

                if(objComment.userName === elem.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].getAttribute('data-username') && objComment.idComment === +elem.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].getAttribute('data-userid')) {
                     objComment.answer.forEach(objAnswer => {
                        if(objAnswer.userNameAnswer === elem.target.parentNode.parentNode.getAttribute('data-usernameanswer') && objAnswer.idAnswer === +elem.target.parentNode.parentNode.getAttribute('data-idanswer')) {
                            objAnswer.likeAnswer += 1;

                            setClickAnswer({   
                                likeAnswer: objAnswer.likeAnswer,
                            });             
                        }   
                    })

                }
            })
        })
        
    };

    function increaseDisLikeAnswer(elem) {
        photoServer.forEach(obj => {
            obj.comments.forEach(objComment => {

                if(objComment.userName === elem.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].getAttribute('data-username') && objComment.idComment === +elem.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].getAttribute('data-userid')) {
                     objComment.answer.forEach(objAnswer => {
                        if(objAnswer.userNameAnswer === elem.target.parentNode.parentNode.getAttribute('data-usernameanswer') && objAnswer.idAnswer === +elem.target.parentNode.parentNode.getAttribute('data-idanswer')) {
                            objAnswer.dislikeAnswer += 1;

                            setClickAnswer({   
                                dislikeAnswer: objAnswer.dislikeAnswer,
                            });             
                        }   
                    })

                }
            })
        })
    };

    function getValueSortCommet(elem) {
        
        if(elem.target.value === 'like') {
           const sortedLikes = blockCommetsResf.current.sort((a, b) => +a.getAttribute('data-popular') - +b.getAttribute('data-popular'));
            
            for(let i = 0; i < sortedLikes.length; i++) {
                elem.target.parentNode.parentNode.insertBefore(sortedLikes[i], blockCommetsResf[i])
            };
        } else if(elem.target.value === 'date') {
            const sortedDate = blockCommetsResf.current.sort((a, b) => new Date(a.getAttribute('data-datecomment').split('.').reverse().join('-')) - new Date(b.getAttribute('data-datecomment').split('.').reverse().join('-')));
            
            for(let i = 0; i < sortedDate.length; i++) {
                elem.target.parentNode.parentNode.insertBefore(sortedDate[i], blockCommetsResf[i])
            };
        }
    };

    return ( 
        <div className='comment'>

            <div>
                <label htmlFor="sortComment">sort-comment</label>
                <select name="sortComment" id="sortComment" onChange={getValueSortCommet}>
                    <option value="">shoose</option>
                    <option value="date">date</option>
                    <option value="like">like</option>
                </select>
            </div>

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
                    <button onClick={addUserComment}>submit</button>
                {/* </form> */}
            </div>        

            { photoServer.map(obj =>  {

                return (
                    (obj.name === name) &&
                        
                        obj.comments.map((objComment, index) => {
                            return (
                                <div ref={(elem) => {if(elem !== null) {blockCommetsResf.current.push(elem)}}} data-datecomment={objComment.date} data-popular={objComment.like} key={objComment.userName + index}>
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

                                    <button onClick={answerComment} data-username={objComment.userName} data-userid={objComment.idComment}>answer</button>

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
                                                        <div data-usernameanswer={objAnswer.userNameAnswer} data-idanswer={objAnswer.idAnswer} className='answer' key={objAnswer.userNameAnswer + 'answer' + i} style={{marginLeft: '30px',}}>
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