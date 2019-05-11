import React from 'react';

const AdminNav = (props) => (
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
	<span className="ml-auto">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link " href="/admin">Blog</a>
      <a class="nav-item nav-link" href="#">Media</a>
      <a class="nav-item nav-link" href="#">Products</a>
    </div>
  </div>
	</span>
</nav>
)

export default AdminNav;