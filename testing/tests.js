test('query', function() {
  equal(websqlMock.query('SELECT * FROM employees WHERE salary > 40000',
      {
        employees: [
          {
            firstName: 'Bob',
            lastName: 'Smith',
            salary: '50000'
          },
          {
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
});

test('isReservedWord', function() {
  equal(websqlMock._private.isReservedWord('SELECT'), true);
  equal(websqlMock._private.isReservedWord('banana'), false);
  equal(websqlMock._private.isReservedWord('select'), true, 'Lowercase also works');
  equal(websqlMock._private.isReservedWord('selector'), false, "Doesn't work if it's not exact");
});
