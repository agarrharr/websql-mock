websqlMock = function() {
  var database = {};

  var reservedWords = [
    'CREATE',
    'SELECT',
    'INSERT',
    'UPDATE',
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
    var table;
    var rows;
    var conditions;
    if(queryType === 'read') {

    }
    return {};
  };

  var parse = function(query) {
    var json = {};
    var words = query.split(' ');
    var latestKey;
    var firstValueForLatestKey;
    for(var i = 0; i < words.length; i++) {
      if(isReservedWord(words[i])) {
        latestKey = words[i];
        firstValueForLatestKey = true;
        json[latestKey] = '';
      } else if(typeof latestKey !== 'undefined'){
        if(! firstValueForLatestKey) json[latestKey] += ' ';
        firstValueForLatestKey = false;
        json[latestKey] += words[i];
      }
    }
    return json;
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
    parse: parse,
    isReservedWord: isReservedWord,
    getQueryType: getQueryType
  };

  return public;
}();
