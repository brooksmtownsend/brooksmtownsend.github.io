import { h, render, Component } from 'preact';

export class AboutMe extends Component {
  render() {
    return (
      <div className='col-md-10 content'>
        <div className='jumbotron jumbotron-fluid'>
          <div className="container">
            <h1 className="display-4" id="about-me">About me</h1>
            <p className="lead">
              I am a Senior computer science student at the University of North Carolina at Chapel Hill. I just completed the Technology Internship
              Program at Capital One after engineering a full stack web application for their case management department to improve letter provisioning time tenfold. Currently I work as an Undergraduate teaching assistant for the Introduction to Programming class (COMP110).
            </p>
          </div>
        </div>
      </div>
    );
  }
}
