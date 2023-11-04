import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LS_KEY = "videoplayer-current-time"
const timePl = localStorage.getItem(LS_KEY)

if (timePl) {
  player.setCurrentTime(timePl)
}

player.on('timeupdate', throttle(function ({ seconds }) {
  localStorage.setItem(LS_KEY, seconds)
}, 1000));
