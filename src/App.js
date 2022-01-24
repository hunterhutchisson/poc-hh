import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { loadDropboxData } from "./actions";

function App() {
  const dispatch = useDispatch();
  const fileArray = useSelector(state => state.dropbox.dropboxFileArray)
  const imageArray = useSelector(state => state.dropbox.thumbnailArray)

  useEffect(() => {
    dispatch(loadDropboxData())
  }, [])

  return (
    <>
    {imageArray.map((imageObj, index)=>{
      let thumbnail = `data:image/jpeg;base64, ${imageObj.thumbnail}`
      return (
        <>
          <img key={imageObj.metadata.name} src={thumbnail} alt="" />
          <br/>
        </>
      )
    })}
    </>
  )
}

export default App

