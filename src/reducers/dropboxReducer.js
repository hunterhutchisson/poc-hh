import { LOAD_DROPBOX_DATA} from "../actions/types"


const initialState = {
    dropboxFileArray: [],
    thumbnailArray: []
}

const dropboxReducer = (state=initialState, action) => {
    switch(action.type){
        case LOAD_DROPBOX_DATA:
            return {
                ...state,
                dropboxFileArray: action.data.fileArray,
                thumbnailArray: action.data.thumbnail
            }
        default:
            return state
    }
}

export default dropboxReducer