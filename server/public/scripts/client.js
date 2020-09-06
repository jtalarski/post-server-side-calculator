$(document).ready(onReady);

let equationToSend = {}

function onReady() {
    console.log('in onReady');
    $(document).on('click', '#equalsBtn', addEquation);
    $(document).on('click', '#clearBtn', clearInput);
    // 1 lines added below
    $(document).on('click', '.operator', addOperator);

    getEquation();
} // end onReady

function clearInput() {
    console.log('clear the inputs');
    $('#firstNumIn').val('');
    $('#operatorIn').val('');
    $('#secondNumIn').val('');
} // end clearInput

function addOperator() {
    console.log('value of data', $(this).data('operator'));
    equationToSend.operator = $(this).data('operator');
}



function addEquation() {
    console.log('in addEquation');
    // added 2 lines below
    equationToSend.firstNum = $('#firstNumIn').val();
    equationToSend.secondNum = $('#secondNumIn').val();

    /*
    equationToSend = {
        firstNum: $('#firstNumIn').val(),
        operator: $('#operatorIn ').val(),
        secondNum: $('#secondNumIn').val()
    }*/
    console.log('sending', equationToSend);
    $('#firstNumIn').val('');
    $('#secondNumIn').val('');
    console.log('addEquation inputs clear');


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