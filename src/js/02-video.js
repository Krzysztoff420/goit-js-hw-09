import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);
const savedTime = Number(localStorage.getItem('videoplayer-current-time'));

const onPlay = ({ duration, percent, seconds }) => {
  if (percent < 1) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }
};
const finished = () => {
  localStorage.removeItem('videoplayer-current-time');
};

player.setCurrentTime(savedTime);
player.on('timeupdate', throttle(onPlay, 1000));
player.on('ended', finished);
