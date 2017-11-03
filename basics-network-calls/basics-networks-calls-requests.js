
var myGitHubPageAPI = 'https://api.github.com/users/Cocatrix';

// Asynchronous request to given URL
const req = new XMLHttpRequest();

req.onreadystatechange = function(event) {
    // XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            console.log("Received answer: %s", this.responseText);
            refreshUIData(this.responseText);
        } else {
            console.log("Answer status: %d (%s)", this.status, this.statusText);
        }
    }
};

req.open('GET', myGitHubPageAPI, true);
req.send(null);