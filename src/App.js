import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { loadDropboxData } from "./actions";
import { Dropbox } from "dropbox"
import ImgView from "./components/ImgView";


function App() {
  const dispatch = useDispatch();
  const fileArray = useSelector(state => state.dropbox.dropboxFileArray)
  const imageArray = useSelector(state => state.dropbox.thumbnailArray)
  const [imgThumbnail, setImgThumbnail] = useState(null);
  const [imgThumbnailPath, setImgThumbnailPath] = useState(null);
  const [viewContents, setViewContents] = useState(false);

  useEffect(() => {
    dispatch(loadDropboxData())
  }, [])


  
  return (
    <>
    {viewContents
    ?
    <ImgView handleViewContents={setViewContents}/> 
    :
    <img className="folder" src="/folder.png" alt="" onClick={()=>setViewContents(true)}/>
    }
    </>
  )
}

export default App

