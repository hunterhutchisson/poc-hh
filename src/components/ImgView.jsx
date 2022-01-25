import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { loadDropboxData } from "../actions";
import { Dropbox } from "dropbox"



function ImgView({handleViewContents}) {
  const dispatch = useDispatch();
  const fileArray = useSelector(state => state.dropbox.dropboxFileArray)
  const imageArray = useSelector(state => state.dropbox.thumbnailArray)
  const [imgThumbnail, setImgThumbnail] = useState(null);
  const [imgThumbnailPath, setImgThumbnailPath] = useState(null);

  useEffect(() => {
    dispatch(loadDropboxData())
  }, [])


  const handleGetImg = (path) => {
    if(!imgThumbnail || path != imgThumbnailPath){
      try{
        let dbx = new Dropbox({ 
            accessToken: REACT_APP_ACCESS_TOKEN
        });
        dbx.filesGetThumbnailBatch({
                entries :[
                  {path:`${path}`,
                  size: "w1024h768"}
              ]
        }).
        then(res => {
          console.log(res);
          setImgThumbnail(`data:image/jpeg;base64, ${res.result.entries[0].thumbnail}`)
          setImgThumbnailPath(path)
        })
        .catch(function(error) {
            console.error(error);
        });
    } catch(err){
        console.log('err:', err)
    }
    } else {
        setImgThumbnail(null)
    }
  };
  
  return (
    <>
    <img className="back" src="/back.png" alt="" onClick={()=>handleViewContents(false)}/>
    {fileArray.map(fileObj=>{
      return( 
        <>
        <div onClick={()=>handleGetImg(fileObj.path_lower)}>{fileObj.name}</div>
        </>
      )
    })}
    <div>{imgThumbnail
    ?
    <img src={imgThumbnail} alt="" />
    :
    null
  }</div>
    </>
  )
}

export default ImgView