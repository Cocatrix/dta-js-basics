(function (window) {
    var cocatrix = {};

    cocatrix.getContacts = function() {
        return [{firstName: 'Alfred', lastName: 'de Musset'},{firstName: 'Simone', lastName: 'de Beauvoir'}];
    }
    window.cocatrix = cocatrix;

})(window);

