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
        <div className="bd-example">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.madgraphic.ro/wp-content/uploads/2019/01/featured-product-img.jpg" className="d-block" style={{Width:'600px', Height:'450px', margin:'auto'}} alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Travel Agency web</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://themeforest.img.customer.envatousercontent.com/files/222175359/beauty-theme-psd-previews/02-home.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=94b59266bcda48647933b4f6f97ec909" className="d-block img-fluid" style={{Width:'600px', Height:'450px', margin:'auto'}} alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Orquidea Nails web</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://cnet1.cbsistatic.com/img/717YrQWhNRTS_8DUszwvK8Q1x9A=/2018/11/28/a0704ad2-287f-4a8e-bf17-dfa7e4f13890/vudu-free-movies.jpg" className="d-block" style={{Width:'600px', Height:'450px', margin:'auto'}} alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Movie app</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
