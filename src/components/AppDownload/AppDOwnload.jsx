import React from 'react'
import './AppDOwnload.css'
import { assets } from '../../assets/assets'

const AppDOwnload = () => {
  return (
    <div className='app-download' id='app-download'><p>
        
        Download App for better experience
        
        </p>
        <div className="app-download-platforms">

<img src={assets.play_store} alt=""></img>
<img src={assets.app_store} alt=""></img>

        </div>
        </div>
  )
}

export default AppDOwnload