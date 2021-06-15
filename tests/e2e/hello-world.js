describe('Ecosia', function() {
  test('demo test', function(browser) {
    browser
      .url('http://localhost:3000/')
      .assert.containsText('div', 'Hello, World!')
      .end()
  })
})
