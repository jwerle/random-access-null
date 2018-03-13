var storage = require('./')
var test = require('tape')

test('random-access-null() -> Object', function (t) {
  var f = storage()
  t.plan(12)

  f.open(function (err) {
    t.ok(null == err, ".open() does not callback with error")
  })

  f.read(0, 24, function (err, buf) {
    t.ok(null == err, ".read() does not callback with error")
    t.ok(Buffer.isBuffer(buf), ".read() does callback with buffer")
    t.ok(0 == buf.length, ".read() does callback with zero bufer")
  })

  f.write(32, Buffer.from('hello'), function (err) {
    t.ok(null == err, ".write() does not callback with error")
  })

  f.del(0, 16, function (err) {
    t.ok(null == err, ".del() does not callback with error")
  })

  f.stat(function (err, stat) {
    t.ok(null == err, ".stat() does not callback with error")
    t.ok('object' == typeof stat && stat, ".stat() does callback with stat object")
    t.ok('number' == typeof stat.size, ".stat() does callback with size property")
    t.ok(0 === stat.size, ".stat() does callback with size property set to 0")
  })

  f.close(function (err) {
    t.ok(null == err, ".close() does not callback with error")
  })

  f.destroy(function (err) {
    t.ok(null == err, ".destroy() does not callback with error")
  })


  //t.end()
})
