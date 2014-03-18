/*test('query', function() {
  equal(websqlMock.query('SELECT * FROM employees WHERE salary > 40000',
      {
        employees: [
          {
            id: '1',
            firstName: 'Bob',
            lastName: 'Smith',
            salary: '50000'
          },
          {
            id: '2',
            firstName: 'Molly',
            lastName: 'Smith',
            salary: '30000'
          }
        ]
      }
    ),
    [
      {
        firstName: 'Bob',
        lastName: 'Smith',
        salary: '50000'
      }
    ]
  );
});*/

test('getQueryType', function() {
  equal(websqlMock._private.getQueryType('Select * From whatever'), 'read');
});

test('isReservedWord', function() {
  equal(websqlMock._private.isReservedWord('FROM'), true);
  equal(websqlMock._private.isReservedWord('banana'), false);
  equal(websqlMock._private.isReservedWord('from'), true, 'Lowercase also works');
  equal(websqlMock._private.isReservedWord('fromer'), false, "Doesn't work if it's not exact");
});
