import { Component } from 'preact';

export class LargeProjectCard extends Component {
  render() {
    const src = this.props.src
    const title = this.props.title
    const description = this.props.description
    const skills = this.props.skills
    const link = this.props.link

    return (
      <div className="col-md-10 offset-md-1">
        <div className="card project-card">
          <img className="card-img-top" src={src} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text font-weight-light">{"Skills used: " + skills}</p>
            <a href={link} className="btn btn-primary">View on Github</a>
          </div>
        </div>
      </div>

    );
  }
}