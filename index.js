var createRandomAccessStorage = require('random-access-storage')

var zeroBuffer = Buffer.alloc(0)
var emptyStat = Object.defineProperties({}, {
  size: { enumerable: true, get: function () { return 0 } }
})

module.exports = createRandomAccessNull

function createRandomAccessNull() {
  return createRandomAccessStorage({
    open: callback(),
    read: callback(zeroBuffer),
    write: callback(),
    del: callback(),
    stat: callback(emptyStat),
    close: callback(),
    destroy: callback(),
  })

  function callback(result) {
    return function (req) {
      return req.callback(null, result)
    }
  }
}
