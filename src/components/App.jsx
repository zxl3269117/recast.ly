import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
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
    this.setSearchText = _.debounce(this.setSearchText.bind(this), 5000, {leading: true});
    this.updateState = this.updateState.bind(this);
    this.searchOnClick = this.searchOnClick.bind(this);
  }

  updateState (video) {
    this.setState({currentVideo: video});
  }

  componentDidMount() {
    this.props.searchYouTube('react tutorial', (data) => {
      this.setState({
        videoList: data,
        currentVideo: data[0]
      });
    });
  }

  setSearchText(searchText) {
    this.setState({text: searchText}, function() {
      this.props.searchYouTube(searchText, (data) => {
        this.setState({
          videoList: data,
          currentVideo: data[0]
        });
      });
    });

  }

  searchOnClick(text) {
    this.props.searchYouTube(text, (data) => {
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
            <Search
              searchOnClick={() => { this.searchOnClick(this.state.text); }}
              searchText ={this.setSearchText}
            />
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

// In the ES6 spec, files are 'modules' and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

