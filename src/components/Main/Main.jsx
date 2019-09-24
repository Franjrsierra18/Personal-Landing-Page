import React, { Component } from 'react';
import './main.scss';
import Proyectos from '../Proyectos/Proyetos';

export default class Main extends Component {

  
  render() {
    return (
      <div>
        <section className="welcome-section">
          <h1>Hi, i'am Francisco Sierra</h1>
          <p>a Fullstack Developer</p>
        </section>
        <br/>
        <div className="bd-example" style={{margin:'auto 1em'}}>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://picsum.photos/id/651/450/300" className="" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Travel Agency web</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://picsum.photos/id/650/450/300" className="" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Orquidea Nails web</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://picsum.photos/id/652/450/300" className="" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Movie app</h5>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <br/>
        <Proyectos />
      </div>
    )
  }
}
