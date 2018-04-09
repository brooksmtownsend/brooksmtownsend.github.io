import './style';
import { Component } from 'preact';
import { FullpageImage } from './components/FullpageImage';
import { Sidebar } from './components/Sidebar';
import { AboutMe } from './components/AboutMe';
import { Head } from './components/Head';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

export default class App extends Component {

  render() {
    return (
      <div>
        <Head />
        <body className=''>
          <FullpageImage />
          <div className='container'>
            <div className='row align-items-center justify-content-center'>
              {/* <Sidebar /> */}
              <AboutMe />
            </div>
          </div>
          <Experience />
          <Projects />
        </body>
      </div>
    );
  }
}
