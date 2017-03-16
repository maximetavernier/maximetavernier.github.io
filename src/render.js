import _ from 'lodash';
import 'jQuery';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header'
import Footer from './components/Footer'

import ReactDOM from 'react-dom';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
