import React from 'react'
import { connect } from 'react-redux'
import UNCONNECTEDMemeForm from './MemeForm'

const mapStateToProps = (storeState, parentProps ) =>{
    return {
            ...props,
            images: storeState.ressources.images
    }
}

const mapDispatchToProps=(dispatch) => {
    return {
      /*  onMemeChange:(meme)=>{
                dispatch(changeMeme(meme))
        }*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UNCONNECTEDMemeForm)