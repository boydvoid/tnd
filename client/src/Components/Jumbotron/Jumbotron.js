import React from 'react';

const Jumbotron = (props) => (
	<div class="jumbotron jumbotron-fluid" style={{backgroundImage: `url(${props.mainImage})`, backgroundSize: `cover`, backgroundPosition: `center`, margin: `0`, height: `70vh`}}>
  <div class="container">
    <h1 class="display-4">{props.h1}</h1>
    <p class="lead">{props.lead}</p>
  </div>
</div>
)

export default Jumbotron;