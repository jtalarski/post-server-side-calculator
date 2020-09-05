$(document).ready(onReady);

function onReady() {
    console.log('in onReady');
    $(document).on('click', '#equalsBtn', addEquation)
    $(document).on('click', 'clearBtn', clearInput)
} // end onReady

function addEquation() {
    console.log('in addEquation');
    const equationToSend = {
        firstNum: $('#firstNumIn').val(),
        operator: $('#operatorIn').val(),
        secondNum: $('#secondNumIn').val()
    }
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
        }).then(function(response) {
            console.log(' back from GET', response);
            for (let i = 0; i < response.length; i++) {
                el.append(`<li>
            ${ response[i].firstNum}
            ${ response[i].operator}
            ${ response[i].secondNum}=
            ${ response[1].equals}
            </li>`)
            } // end for
        }).catch(function(err) {
            console.log(err);
            alert('nope');
        }) // end AJAX
} // end getEquation


function clearInput() {
    console.log('in clearInput');
}