import _ from 'lodash';
import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

function render(json) {
    var data = $.parseJSON(json);
    var left = true;

    document.title = data.title + " - " + data.subtitle;

    ReactDOM.render(<Navbar data={data.menu} />, document.getElementById('react-navbar'));
    ReactDOM.render(<Header title={data.title} subtitle={data.subtitle} />, document.getElementById('react-header'));

    $(data.sections).each(function(i, item) {
        ReactDOM.render(<Section side={left ? "left" : "right"} data={item} />, document.getElementById('react-section-' + item.id));
        left = !left;
    });

    ReactDOM.render(<Footer data={data.menu} copyright={data.copyright} powered={data.powered} />, document.getElementById('react-footer'));
    return ;
}

$(window).scroll(collapseNavbar);
$(document).ready(function() {
    $.get('../assets/' + (navigator.language || navigator.userLanguage) + '.json', render, 'text').fail(function () {
        $.get('../assets/en.json', render, 'text');
    });
    collapseNavbar();
});
