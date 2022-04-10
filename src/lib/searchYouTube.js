import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      q: query,
      key: API_KEY
    },
    contentType: 'application/JSON',
  }).done(data => {
    if (data.length) {
      callback(data);
    } else {
      alert('no results found!');
    }
  });
};

export default searchYouTube;

// data = {'react tutorial': 'q'}
// recevied from server data = {'react tutorial': [{}, {}, {}..]}
// data.'react tutorial' ====> [{}, {}, {}..]
