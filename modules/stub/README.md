[![NPM version](https://img.shields.io/npm/v/@nguyenquan241208/stub.svg?style=flat-square)](https://www.npmjs.com/package/@nguyenquan241208/stub)
[![npm module downloads per month](http://img.shields.io/npm/dm/@nguyenquan241208/stub.svg?style=flat)](https://www.npmjs.org/package/@nguyenquan241208/stub)
[![InteractiveAdvertisingBureau](https://circleci.com/gh/InteractiveAdvertisingBureau/iabtcf-es.svg?style=shield)](https://circleci.com/gh/InteractiveAdvertisingBureau/iabtcf-es)

# @nguyenquan241208/stub

Cmp API Stub code.  Maybe included in commonjs loader or dropped directly on the page.

#### Installation

npm
```
npm install @nguyenquan241208/stub
```

yarn
```
yarn add @nguyenquan241208/stub
```
#### Using

##### include via module loading
```javascript
import * as cmpstub from '@nguyenquan241208/stub';
```
or

```javascript
const cmpstub = require('@nguyenquan241208/stub');
```

then execute:

```javascript
cmpstub();
```
this should generate the `__tcfapi()` window function with the queing functionality.

##### to drop on a page
```
git clone https://github.com/InteractiveAdvertisingBureau/iabtechlabtcf-es.git

cd iabtechlabtcf-es/modules/stub/

yarn // or npm install

yarn build // or npm run build
```

Built stub will be output to ./lib

##### Getting queue of commands

```javascript
const queue = __tcfapi();
console.log(queue); // [ ['command', 2, callback], ...]
```
