import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LS_KEY = "videoplayer-current-time"
const timePl = JSON.parse(localStorage.getItem(LS_KEY))

if (timePl) {
  const { seconds } = timePl
  player.setCurrentTime(seconds)
}

player.on('timeupdate', throttle(function (data) {
  localStorage.setItem(LS_KEY, JSON.stringify(data))
}), 1000);
