
function refreshUIData(textResponse) {
    var data = JSON.parse(textResponse);
    var pseudo = getPseudo(data);


    var myDiv = document.getElementById('profile-div')
    var newText = document.createTextNode(pseudo);
    myDiv.appendChild(newText);
}

function getPseudo(data) {
    return data.login;
}