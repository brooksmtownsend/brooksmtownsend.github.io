import { Component } from 'preact';

export class Head extends Component {
  render() {
    // this.ga(window,document,'script','https://www.google-analytics.com/analytics.js','ga')
    // this.ga('create', 'UA-XXXXX-Y', 'auto');
    // this.ga('send', 'pageview');

    return (
      <head>
        {/* <!-- Bootstrap CSS --> */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous" />
      </head>
    );
  }
  ga(i,s,o,g,r,a,m){
    i['GoogleAnalyticsObject']=r;i[r]=i[r] ||
    function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    }
}