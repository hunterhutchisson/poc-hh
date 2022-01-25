
import { LOAD_DROPBOX_DATA } from "./types"
import { Dropbox } from "dropbox"

export const loadDropboxData = () => async dispatch => {
    try{
        let dbx = new Dropbox({ 
            accessToken: REACT_APP_ACCESS_TOKEN
        });
        dbx.filesListFolder({path: ''})
        .then(function(response) {
            dispatch({
                type: LOAD_DROPBOX_DATA,
                data: {
                    fileArray: response.result.entries,
                }
            })
        })
        .catch(function(error) {
            console.error(error);
        });

    } catch(err){
        console.log('err:', err)
    }
}




