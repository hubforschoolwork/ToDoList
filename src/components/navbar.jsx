// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MyNavbar = () => {
  return (
<div class="container">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<nav class="navbar bg-info border-bottom border-body" data-bs-theme="primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TO DO LIST</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">To Do</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contacts</a>
        </li>

      </ul>

      <span class="navbar-text">
        Extra!
      </span>
    </div>
  </div>
  </nav>
</nav>
</div>


  );
};

export default MyNavbar;

