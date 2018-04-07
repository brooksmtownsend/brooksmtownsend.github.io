import { h, render, Component } from 'preact';

export class AboutMe extends Component {
  render() {
    return (
      <div className='col-md-9 content'>
        <div className='jumbotron jumbotron-fluid'>
          <div className="container">
            <h1 className="display-4" id="about-me">About me</h1>
            <p className="lead">
              I am a Junior computer science student at the University of North Carolina at Chapel Hill. Currently I work as an Undergraduate
              teaching assistant for the Introduction to Programming class (COMP110), and I am an incoming Technology Development
              Program Intern at Capital One. I loved working in the software industry over the summer and developing apps,
              and now that I am headed to work for Capital One I am excited to extend my knowledge in computer science once
              again. I am not yet sure what team I will be placed in at Capital One, but I put down that I would like to
              work either in the mobile division or in the cloud engineering department as I feel like those are two great
              places to further my career.
              </p>
          </div>
        </div>
      </div>
    );
  }
}