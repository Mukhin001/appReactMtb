import HtmlPhoto from './htmlPhoto/HtmlPhoto';

const PagePhotoOne = ({name, userNameLogin}) => {
    return ( 
        <div>
            {name}
            <HtmlPhoto 
                name={name}
                userNameLogin={userNameLogin}
            />
        </div>
     );
}
 
export default PagePhotoOne;