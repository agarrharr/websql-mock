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
    if(queryType === 'read') {
      return readData(parse(query));
    } else {
      return {};
    }
  };

  var setDatabase = function(db) {
    database = db;
  };

  var createData = function(table, data) {
  };

  var readData = function(command) {
    console.log(command);
    var table;
    var rows = [];
    if(typeof command.FROM !== 'undefined') {
      table = command.FROM;
    }
    console.log(table);
    if(command.SELECT === '*') {
      for(var key in database[table][0]) {
        rows.push(key);
      }
    } else {
      rows = command.SELECT.split(' ');
    }
    console.log(rows);
  };

  var updateData = function(query) {
  };

  var deleteData = function(query) {
  };

  var destroy = function(query) {
    database = {};
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
    setDatabase: setDatabase
  };

  public._private = {
    parse: parse,
    isReservedWord: isReservedWord,
    getQueryType: getQueryType,
    createData: createData,
    readData: readData,
    updateData: updateData,
    deleteData: deleteData,
    destroy: destroy
  };

  return public;
}();
