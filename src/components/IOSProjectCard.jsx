import { Component } from 'preact';

export class IOSProjectCard extends Component {
  render() {
    const src1 = this.props.src1
    const src2 = this.props.src2
    const src3 = this.props.src3
    const title = this.props.title
    const description = this.props.description
    const skills = this.props.skills
    const link = this.props.link
    const offset = this.props.offset ? "offset-md-1" : ""
    const bgcolor = this.props.bgcolor

    return (
    <div className={"col-md-5 " + offset}>
      <div className="card project-card">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner justify-content-md-center">
            <div className="carousel-item active" style={{backgroundColor: bgcolor}}>
              <img className="d-block h-50 w-50" src={src1} alt="First slide" />
            </div>
            <div className="carousel-item" style={{backgroundColor: bgcolor}}>
              <img className="d-block h-50 w-50" src={src2} alt="Second slide" />
            </div>
            <div className="carousel-item" style={{backgroundColor: bgcolor}}>
              <img className="d-block h-50 w-50" src={src3} alt="Third slide" />
            </div>
          </div>
          {/* <a className="carousel-control-prev" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a> */}
        </div>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text font-weight-light">{"Skills used: " + skills}</p>
          <a href={link} className="btn btn-primary">View on Github</a>
        </div>
      </div>
    </div>
    )
  }
}