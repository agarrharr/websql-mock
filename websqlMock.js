websqlMock = function() {

  var reservedWords = [
    'SELECT',
    'INSERT',
    'UPDATE',
    '*',
    'FROM',
    'WHERE'
  ];

  var query = function(query, data) {
    return {};
  };

  var select = function(query, data) {
  };

  var insert = function(query, data) {
  };

  var update = function(query, data) {
  };

  var isReservedWord = function(word) {
    if(reservedWords.indexOf(word.toUpperCase()) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  public = {
    query: query,
    select: select,
    insert: insert,
    update: update
  };

  public._private = {
    isReservedWord: isReservedWord
  };

  return public;
}();
