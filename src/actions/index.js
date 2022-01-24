
import { LOAD_DROPBOX_DATA } from "./types"
import axios from 'axios'
import { Dropbox } from "dropbox"

export const loadDropboxData = () => async dispatch => {
    try{
        let dbx = new Dropbox({ 
            accessToken: 'sl.BAuDa9rsvD6TVigfwU7jc2bs9v9-BYtPVBdaMnPUKisLFzxpCQqC4nI7lZ5KA0oOvSWixLQH3CTPb17_-6eQgxSoUIJV9qKWILaQ2WGfW1yVqrjhpA3j8SlYKlCEGgmV1na3ISg4gKe_',
            
          });
        dbx.filesListFolder({path: ''})
        .then(function(response) {
            let paths = response.result.entries.map(file =>({
                path: file.path_lower,
                size: "w1024h768"
            }))
            console.log(paths);
            dbx.filesGetThumbnailBatch({
                entries: paths
            }).then(res => {
                console.log(res.result.entries);
                dispatch({
                    type: LOAD_DROPBOX_DATA,
                    data: {
                        fileArray: response.result.entries,
                        thumbnail: res.result.entries
                    }
                })
            })
            
        })
        .catch(function(error) {
          console.error(error);
        });

    } catch(err){
        console.log('err:', err)
    }
}



