import HtmlPhoto from './htmlPhoto/HtmlPhoto';

const PagePhotoFive = ({name, userNameLogin}) => {

    return ( 
        <>
            <HtmlPhoto 
                name={name}
                userNameLogin={userNameLogin}
            />
        </>    
     );
};
 
export default PagePhotoFive;