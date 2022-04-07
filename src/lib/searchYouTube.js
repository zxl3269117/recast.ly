import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback, errorCB = null) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      q: query,
      part: 'snippet'
    },
    contentType: 'application/json',
    successCB: (data) => {
      console.log(data);
      callback(data);
    },
    errorCB: () => {
      errorCB();
    }
  });
};

export default searchYouTube;

// data = {'react tutorial': 'q'}
// recevied from server data = {'react tutorial': [{}, {}, {}..]}
// data.'react tutorial' ====> [{}, {}, {}..]
