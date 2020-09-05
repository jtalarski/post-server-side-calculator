const { response } = require("express");
const e = require("express");

$(document).ready(onReady);

function onReady() {
    console.log('in onReady');
    $(document).on('click', '#egualsBtn', )
    $(document).on('click', 'clearBtn', )
} // end onReady

function equationToSend() {
    console.log('in equation');
    // get uset input
    // send obj to server via Post thru Ajax
    // update DOM with latest calculation using selector li:first css
    // update DOM with calculation history

    $.ajax({
            method: 'POST',
            url: '/equation',
            data: equationToSend
        }).then(function(response) {
            console.log('back from the server with', response)
            getEquation();
        }).catch(function(err) {
            alert('something went wrong');
            console.log(err);
        }) // end ajax
} // end equationToSend

function getEquation() {
    console.log('in getEquation');
    let el = $('#calculationsOut')
    el.empty();
    $.ajax({
            method: 'GET',
            url: '/equation'
        }) //end ajax

} // end getEquation