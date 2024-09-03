import HtmlPhoto from './htmlPhoto/HtmlPhoto';

const PagePhotoTwo = ({name, userNameLogin}) => {
    return ( 
        <div>
            Page PhotoTwo
            <HtmlPhoto 
                name={name}
                userNameLogin={userNameLogin}
            />
        </div>
     );
}
 
export default PagePhotoTwo;