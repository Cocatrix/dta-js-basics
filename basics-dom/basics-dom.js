
// ********************************** //
// Altering the DOM
// ********************************** //

var block = document.getElementById('paragraph');
setPOnMouseOverAndOut(block);

var button = document.getElementById('button-1');
button.onclick = function () {
    deleteAll();
};

var firstText = document.getElementById('title-1');
firstText.onclick = function () {
    createAmazingElement();
};

function createAmazingElement() {
    /**
     * Create element, assign two classes, set text, and set on mouse events.
     */
    var newP = document.createElement('p');
    newP.classList.add('text-red');
    newP.classList.add('new-text');
    document.body.appendChild(newP);
    var newText = document.createTextNode('Amazing');
    newP.appendChild(newText);

    setPOnMouseOverAndOut(newP);
}

function setPOnMouseOverAndOut(pElt) {
    /**
     * For a 'p' element, set functions of Mouse over and Mouse out
     */
    pElt.onmouseover = function (ev) {
        pOnMouseOver(this, ev)
    };
    pElt.onmouseout = function () {
        pOnMouseOut(this)
    }
}

function pOnMouseOver(elt, ev) {
    /**
     * Add or remove class 'text-red' depending on which side we fly over.
     * Fly over on left : remove | Fly over on right : add
     */
    var whichSize = getWhichSize(ev);
    if (whichSize === 'LEFT') {
        elt.classList.remove('text-red');
    } else {
        elt.classList.add('text-red');
    }
}

function pOnMouseOut(elt) {
    /**
     * Reset class 'text-red' on mouse out
     */
    elt.classList.add('text-red');
}

function deleteAll() {
    /**
     * Delete all members with class 'new-text' (added with click)
     */
    var newTextElements = document.getElementsByClassName('new-text');
    while(newTextElements.length > 0) {
        newTextElements[0].remove()
    }
}

function getWhichSize(ev) {
    /**
     * Returns which size of the screen currently has the mouse cursor
     * whichSize = 'LEFT' or 'RIGHT'
     */
    var screenSize = window.innerWidth;
    var whichSize;
    whichSize = (ev.x < screenSize/2 ? "LEFT" : "RIGHT");
    //console.log(whichSize);
    return whichSize
}