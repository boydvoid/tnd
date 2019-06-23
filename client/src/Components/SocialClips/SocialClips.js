import React from 'react';
import './SocialClips.css'
const SocialClips = (props) => {

  return (
    <div className="container-fluid social">
      <div className="row">
        <div className="col-xl-4">
          <h1>Pinterest</h1>
        </div>
        <div className="col-xl-4">
          <h1>Facebook</h1>
        </div>
        <div className="col-xl-4">
          <h1>Instagram</h1>
        </div>
      </div>
    </div>
  )
}

export default SocialClips;