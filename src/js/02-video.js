import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LS_KEY = "videoplayer-current-time"
const timePl = JSON.parse(localStorage.getItem(LS_KEY))

if (timePl) {
  const { seconds } = timePl
  player.setCurrentTime(seconds)
}

player.on('timeupdate', function (data) {
  localStorage.setItem(LS_KEY, JSON.stringify(data))
  //  _.throttle(() => {
  //    localStorage.setItem(LS_KEY, JSON.stringify(data))
  // }, 500)
});
