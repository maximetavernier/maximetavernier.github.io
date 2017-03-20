import _ from 'lodash';
import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
//import Maintenance from './components/Maintenance';

$.get('../assets/' + (navigator.language || navigator.userLanguage) + '.json', function(json) {
    var data = $.parseJSON(json);
    var left = true;

    ReactDOM.render(<Navbar />, document.getElementById('react-navbar'));
    ReactDOM.render(<Header title={data.title} subtitle={data.subtitle} />, document.getElementById('react-header'));

    $(data.sections).each(function(i, val) {
        ReactDOM.render(<Section side={left ? "left" : "right"} title={val.title} descr={val.descr} image={val.image} url={val.url} />, document.getElementById('react-section-' + val.id));
        left = !left;
    });

    ReactDOM.render(<Footer copyright={data.copyright} powered={data.powered} />, document.getElementById('react-footer'));
    return ;
}, 'text');

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

//ReactDOM.render(<Maintenance />, document.getElementById('maintenance'));
