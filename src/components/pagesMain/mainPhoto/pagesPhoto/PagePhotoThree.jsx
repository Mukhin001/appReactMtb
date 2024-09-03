import HtmlPhoto from './htmlPhoto/HtmlPhoto';

const PagePhotoThree = ({name, userNameLogin}) => {
    return ( 
        <div>
            Page PhotoThree
            <HtmlPhoto 
                name={name}
                userNameLogin={userNameLogin}
            />
        </div>
     );
}
 
export default PagePhotoThree;