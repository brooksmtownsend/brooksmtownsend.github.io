import { Component } from 'preact';

export class FullpageImage extends Component {
  render() {
    return (
        <div className='fullpageImage' id='top'>
          <div className='container container-fluid'>
            <div className='row align-items-center justify-content-center' style="height: 100vh;">
              <div className='col-12 text-center'>
                <h4 className='page-title'><em>Hey, I'm</em></h4>
                <h2 className='display-3 page-title'>BROOKS TOWNSEND</h2>
              </div>
            </div>
          </div>
        </div>
    );
  }
}