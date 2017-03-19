import _ from 'lodash';

import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
//import Section from './components/Section';
//import Button from './components/Button';
import Maintenance from './components/Maintenance';

ReactDOM.render(<Navbar />, document.getElementById('react-navbar'));
ReactDOM.render(<Header />, document.getElementById('react-header'));
ReactDOM.render(<Footer />, document.getElementById('react-footer'));
/*
ReactDOM.render(<Button image="assets/tatav.io.png" alt="taverniermaxi.me" title="My portfolio" url="http://taverniermaxi.me"/>, document.getElementById('portfolio'));
ReactDOM.render(<Button image="assets/tatav.io.png" alt="tatav.io" title="My online Curriculum Vitae" url="http://tatav.io"/>, document.getElementById('cv'));
*/
ReactDOM.render(<Maintenance />, document.getElementById('maintenance'));
