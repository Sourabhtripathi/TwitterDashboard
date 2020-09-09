export const configureAuth = (setLoading ,loginUser) => {
    if(!localStorage.oauth_token){
        setLoading(false);
    }else{
        loginUser(localStorage.user_id);
        setLoading(false);
    }
}

export const setLocalStorage = ({oauth_token, oauth_token_secret, user_id, screen_name}) => {
    localStorage.oauth_token = oauth_token;
    localStorage.oauth_token_secret = oauth_token_secret;
    localStorage.user_id = user_id;
    localStorage.screen_name = screen_name;
}