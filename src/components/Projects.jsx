import { Component } from 'preact';
import { IOSProjectCard } from './IOSProjectCard'
import { LargeProjectCard } from './LargeProjectCard';

export class Projects extends Component {
  render() {
    return (
      <div className='container container-fluid'>
        <div className='row'>
          <div className='col-md-12 content'>
            <div className='jumbotron jumbotron-fluid'>
              <div className="container ">
                <h1 className="display-4" id='projects'>My Projects</h1>
                <div className="row">
                  <LargeProjectCard
                    src='https://i.imgur.com/cqejWjX.png'
                    title='PlanCarolina'
                    description='At UNC there are endless opportunities; however, those endless options can be overwhelming especially with only four years to seize them. We found ourselves rewriting our four-year plans over and over again on pieces of paper each time we took that art history or philosophy className and instantly wanted to add another major or minor. Could we fit it in? What about study abroad? The erasing and reoutlining became onerous, especially with the confusing UNC academic worksheets. Out of this frustration grew PlanCarolina, a tool that we hope will help you explore your indecisiveness efficiently. We are a team of three Juniors studying Computer Science, Linguistics, Economics, Math, and... who knows? We hope PlanCarolina will help you plan out your four years at this school of national champions! Cheers to planning! Kate, Hank, and Brooks.'
                    skills='HTML, CSS, TypeScript, React, MobX, Python, MySQL, Amazon AWS.'
                    link='https://github.com/hankhester/plancarolina'
                  />
                  <div class="col-md-12" style="height:15px;"></div>
                  <IOSProjectCard
                    src1='https://i.imgur.com/R1nGo6d.png'
                    src2='https://i.imgur.com/GSuFhaG.png'
                    src3='https://i.imgur.com/2wa3KC7.png'
                    title='Phi Sigma Pi Mobile Application'
                    description='Last semester, I worked with my Co-IT chair to design, develop, and maintain a cross platform application to update outdated communication and data collection systems. We also recorded detailed documentation and engineered comprehensive unit tests to simplify production and scalability. Our first goal was to release the application to over 50 unique users on Apple App store and Android Play store, which we accomplished and the majority of the fraternity now uses the app every event.'
                    skills='React-Native, React-Native-Elements, CSS, Google Firebase, Google Play Store, iTunes Connect.'
                    link='https://github.com/brooksmtownsend/PhiSigmaPiAK'
                    offset={true}
                    bgcolor='rgba(16, 79, 98, .9)'
                  />
                  {/* <div class="col-md-12" style="height:15px;"></div> */}
                  <IOSProjectCard
                    src1='https://i.imgur.com/rVX3asA.png'
                    src2='https://i.imgur.com/xIVuHgf.png'
                    src3='https://i.imgur.com/yvkO7Ah.png'
                    title='Personal Weightlifting Tracker'
                    description='I found that the apps that were on the app store for weight tracking were not exactly what I wanted. Bodybuilding.com has a cluttered app, while StrongLifts is too specific to the StrongLifts program. I chose to make this app as a personal project, because I thought it would be a great learning experience as well as something that I could actually use. Though I made a working application, I think that it is visually not my best work so I am currently in the process of remaking the weightlifting app, since I have much more experience in iOS development after my internship.'
                    skills='Skills used: Apple iOS Programming, Swift 3.0, Core Data Stack, XCode interface builder.'
                    link='https://github.com/brooksmtownsend/Personal-Lift-Tracker'
                    offset={false}
                    bgcolor='rgba(190, 37, 55, .9)'
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