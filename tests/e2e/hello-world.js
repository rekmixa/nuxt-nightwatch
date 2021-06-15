describe('Ecosia', function() {
  test('demo test', function(browser) {
    browser
      .url(`http://${process.env.DOMAIN}/`)
      .assert.containsText('div', 'Hello, World!')
      .end()
  })
})
