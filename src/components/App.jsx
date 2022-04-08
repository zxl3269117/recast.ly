import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
// import searchYouTube from '../lib/searchYouTube';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      videoList: [],
      currentVideo: {
        'kind': '',
        'etag': '',
        'id': {
          'kind': '',
          'videoId': ''
        },
        'snippet': {
          'publishedAt': '',
          'channelId': '',
          'title': '',
          'description': '',
          'thumbnails': {
            'default': {
              'url': '',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': '',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': '',
              'width': 480,
              'height': 360
            }
          }
        }
      }
    };
  }

  updateState (video) {
    // passing video inside this function as arg
    // changing the state
    // update this.state to
    // currentVideo is the video got clicked

    this.setState({currentVideo: video});
  }



  componentDidMount() {
    console.log(this);
    this.props.searchYouTube('react tutorial', (data) => {
      this.setState({
        videoList: data,
        currentVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <nav className='navbar'>
          <div className='col-md-6 offset-md-3'>
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className='row'>
          <div className='col-md-7'>
            <VideoPlayer video = {this.state.currentVideo}/>
          </div>
          <div className='col-md-5'>
            <VideoList videos = {this.state.videoList} detectClick = {(video) => { this.updateState(video); }}/>
          </div>
        </div>
      </div>
    );
  }
}
// var App = () => (
//   <div>
//     <nav className='navbar'>
//       <div className='col-md-6 offset-md-3'>
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className='row'>
//       <div className='col-md-7'>
//         <VideoPlayer video = {exampleVideoData[0]}/>
//       </div>
//       <div className='col-md-5'>
//         <VideoList videos = {exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are 'modules' and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

