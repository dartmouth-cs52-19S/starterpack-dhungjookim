import $ from 'jquery';
import './style.scss';

$('#main').html('Here we go!');


let num = 0;
setInterval(() => {
  num += 1;
  $('#main').html(`You've been on this page for ${num} seconds;`);
}, 1000);
