var assert = require('assert')

var requireNpm = require('..')

describe('requireNpm', function () {
  it('shall require npm from node exec path', function () {
    var npm = requireNpm()
    assert.equal(typeof npm, 'object')
    assert.equal(typeof npm.version, 'string')
  })

  it('shall run npm info npm', function (done) {
    this.timeout(5000)

    var npm = requireNpm()
    npm.load((err, npm) => {
      assert.ok(!err, err && err.message)
      npm.commands.view(['debug'], true, function (err, data) {
        assert.ok(!err, err && err.message)
        assert.ok(typeof data === 'object')
        done()
      })
    })
  })
})
