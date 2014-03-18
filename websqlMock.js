websqlMock = function() {
  var database = {};

  var reservedWords = [
    '*',
    'FROM',
    'INTO',
    'WHERE'
  ];

  var queryTypes = {
    'CREATE': 'create',
    'SELECT': 'read',
    'INSERT': 'update',
    'UPDATE': 'update',
  };

  var query = function(query, data) {
    database = data;
    var queryType = getQueryType(query);
    return {};
  };

  var createData = function(table, data) {
  };

  var readData = function(table, rows, conditions) {
  };

  var updateData = function(query) {
  };

  var deleteData = function(query) {
  };

  var destroy = function(query) {
    database = {};
  };

  var getQueryType = function(query) {
    console.log(queryTypes);
    console.log(query);
    console.log(query.split(' '));
    console.log(query.split(' '));
    console.log(query.split(' ')[0]);
    console.log(query.split(' ')[0].toUpperCase());
    console.log(queryTypes[query.split(' ')[0].toUpperCase()]);
    return queryTypes[query.split(' ')[0].toUpperCase()];
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
    createData: createData,
    readData: readData,
    updateData: updateData,
    deleteData: deleteData,
    destroy: destroy
  };

  public._private = {
    isReservedWord: isReservedWord,
     getQueryType: getQueryType
  };

  return public;
}();
