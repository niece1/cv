import 'bootstrap';
import axios from 'axios'
// Js
import easing from './jquery.easing.js';
import smooth from './smooth-scrolling.js';
import navbar from './navbar.js';
import skillbar from './skillbar.js';
import modals from './modals.js';
import parallax from './parallax.js';
// Styles
import styles from './../sass/custom.scss';
// Images
import denim from './../images/denim.jpeg';
import skills from './../images/skills.jpeg';
import developer from './../images/developer.jpeg';
import customer from './../images/customer-support.png';
import responsive from './../images/responsive.png';
import hourglass from './../images/hourglass.png';
import innovation from './../images/innovation.png';
import layers from './../images/layers.png';
import settings from './../images/settings.png';
import docker from './../images/docker.png';
import gulp from './../images/gulp.png';
import vue from './../images/vue.png';
import php from './../images/php.png';
import laravel from './../images/laravel.png';
import mysql from './../images/mysql.png';
import aws from './../images/aws.png';
import webpack from './../images/webpack.png';
import computer from './../images/computer.jpeg';
import computer1 from './../images/computer1.jpeg';
import mobile from './../images/mobile.jpeg';
import online from './../images/online.jpeg';
import student1 from './../images/student1.jpeg';
import student from './../images/student.jpeg';
import startup from './../images/startup.jpeg';
import students from './../images/students.jpeg';
import woman from './../images/woman.jpeg';
import teenager from './../images/teenager.jpeg';
import girl from './../images/girl.jpeg';
import desk from './../images/desk.jpeg'; 
//Vue js
window.Vue = require('vue');
Vue.component('contact-form', require('./components/ContactForm.vue').default);
let app = new Vue({
	el: '#app'
});
