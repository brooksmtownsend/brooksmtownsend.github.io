import { Component } from 'preact';

export class FullpageImage extends Component {
  render() {
    return (
        <div className='fullpageImage' id='top'>
          <div className='container container-fluid '>
            <div className='row align-items-end justify-content-center' style="height: 100vh;">
              <div className='col- text-dark-background text-center'>
                {/* <h4 className='page-title text-light'> Hey, I'm</h4> */}
                <h2 className='display-3 text-light page-title'>BROOKS TOWNSEND</h2>
                <h4 className='page-title'> Software Engineer and Student</h4>
              </div>
            </div>
          </div>
        </div>
    );
  }
}