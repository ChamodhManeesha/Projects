import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
        <div class="container-fluid">

           
            <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">
            <a class="btn btn-outline-success me-2" aria-current="page" href="/">Tenders</a>
                <a class="nav-link " aria-current="page" href="#">Home</a>
                <a class="nav-link " aria-current="page" href="#">Community Request</a>
                <a class="nav-link " aria-current="page" href="#">Estimation</a>
                <a class="nav-link " aria-current="page" href="#">Contracts</a>
                <a class="nav-link " aria-current="page" href="#">Monetary Accounts</a>
                <a class="nav-link " aria-current="page" href="#">Inquary</a>
                <a class="nav-link " aria-current="page" href="#">About</a>
            
       
     </div>
    </div>
  </div>
</nav>

        


      </div>
    )
  }
}
