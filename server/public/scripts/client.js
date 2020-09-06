$(document).ready(onReady);

function onReady() {
    console.log('in onReady');
    $(document).on('click', '#equalsBtn', addEquation);
    $(document).on('click', '#clearBtn', clearInput);
    getEquation();
} // end onReady

function clearInput() {
    console.log('clear the inputs');
    $('#firstNumIn').val('');
    $('#operatorIn').val('');
    $('#secondNumIn').val('');
} // end clearInput

function addEquation() {
    console.log('in addEquation');
    const equationToSend = {
        firstNum: $('#firstNumIn').val(),
        operator: $('#operatorIn').val(),
        secondNum: $('#secondNumIn').val(),
    }
    console.log('sending', equationToSend);

    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: equationToSend
    }).then(function(response) {
        console.log('back from the server with', response);
        getEquation()
    }).catch(function(err) {
        alert('Houston, we have a problem in ajax POST');
        console.log(err);
    })
} // end addEquation

function getEquation() {
    console.log('in getEquation');
    let el = $('#calculationsOut');
    el.empty();
    $.ajax({
            method: 'GET',
            url: '/calculator'
        }).then(function(response) {
            console.log('back from GET:', response)
            for (i = 0; i < response.length; i++) {
                el.append(`
       <li>
        ${response[i].firstNum}
        ${response[i].operator}
        ${response[i].secondNum} &nbsp=
        ${response[i].solution}
       </li>`);
            }
        }).catch(function(err) {
            console.log(err);
            alert('Houston, we have a problem in ajax GET');
        }) // end AJAX
} // end getEquation