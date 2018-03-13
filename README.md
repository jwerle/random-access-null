random-access-null
==================

[random-access-storage][random-access-storage] compliant null writer like a
write to `/dev/null`. All writes are discarded, all reads return a zero
buffer, and all stats return a stat with `size` set to `0`.

## Install

```sh
npm install random-access-null
```

## Usage

```js
var createRandomAccessNull = require('random-access-null')
var storage = createRandomAccessNull()

// empty reads
storage.read(0, 32, function (err, buf) {
  console.log(err, buf) // null <Buffer >
})

// discarded writes
storage.write(32, Buffer.from('hello', function (err) {
  console.log(err) // null
})
```

## License

MIT

[random-access-storage]: https://github.com/random-access-storage/random-access-storage
