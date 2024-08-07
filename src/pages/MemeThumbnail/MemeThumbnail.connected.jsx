import React from 'react'
import MemeT from './MemeThumbnail'
import { useSelector } from 'react-redux'
function MemeThumbnail() {
  const imgs=useSelector(s=>s.ressources.images)
  const memes=useSelector(s=>s.ressources.memes)
    return (
    <MemeT memes={memes} images={imgs}/>
  )
}

export default MemeThumbnail