import { Component } from 'preact';
import { IOSProjectCard } from './IOSProjectCard'
import { LargeProjectCard } from './LargeProjectCard';

export class Experience extends Component {
  render() {
    return (
      <div className='container container-fluid'>
        <div className='row'>
          <div className='col-md-12 content'>
            <div className='jumbotron jumbotron-fluid'>
              <div className="container">
                <h1 className="display-4" id='experience'>My Experience</h1>
                <div className="row">
                  <ExperienceCard
                    src='https://i.imgur.com/P8viX1u.jpg'
                    title='SentryOne'
                    description='I worked at SentryOne last summer as an iOS development intern. As a sophomore intern, I was the youngest one in the office that was doing development. Working for a company was very different than me just coding in my room. Agile development, TDD, and code reviews were a huge part of what I was doing, and what makes me a better programmer today. This is me with all of the other engineering interns with some of our new SentryOne swag.'
                  />
                  <div class="col-md-12" style="height:15px;"></div>
                  <ExperienceCard
                    src='https://i.imgur.com/7BiRKAY.jpg'
                    title='COMP110 UTA'
                    description='I work as a COMP110 UTA at UNC Chapel Hill along with all of these other wonderful people. COMP110 is the introduction to programming course at UNC, and is the largest undergraduate course at over 900 students per semester. I personally tutor hundreds of students a month, and I lead review sessions along with another UTA. I am also a part of the team leads, which is a special team of the head TAs that meet with the professor once a week to discuss the course.'
                  />
                  <div class="col-md-12" style="height:15px;"></div>
                  <ExperienceCard
                    src='https://i.imgur.com/iPBrKKA.gif'
                    description='Something that I have loved about being an UTA for COMP110 is the sheer number of students that we help every day. Over the last two semesters, I have accumulated 300 office hours tickets for over 240 students, and seeing their feedback is incredibly rewarding.'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

class ExperienceCard extends Component {
  render() {
    const src = this.props.src
    const title = this.props.title
    const description = this.props.description

    return (
      <div className="col-md-10 offset-md-1">
        <div className="card experience-card">
          <img className="card-img-top" src={src} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {/* <p className="card-text text-muted">{"Skills used: " + skills}</p> */}
            {/* <a href={link} className="btn btn-primary">View on Github</a> */}
          </div>
        </div>
      </div>

    )
  }
}