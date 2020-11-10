require('./assets/stylesheets/styles.scss');

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import searchYoutube from 'youtube-api-v3-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import config from '../config';

const API_KEY = config.YOUTUBE_V3_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('psy');
  }
  async videoSearch(term) {
    const options = {
      q: term,
      part:'snippet',
      type:'video',
    }
    let result = await searchYoutube(API_KEY, options);

    console.log("VV: ", result);
    this.setState({
      videos: result.items,
      selectedVideo: result.items[0]
    });
  }

  render() {
    //const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermClick={term => this.videoSearch(term)} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
