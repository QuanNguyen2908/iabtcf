[![NPM version](https://img.shields.io/npm/v/@nguyenquan241208/testing.svg?style=flat-square)](https://www.npmjs.com/package/@nguyenquan241208/testing)
[![npm module downloads per month](http://img.shields.io/npm/dm/@nguyenquan241208/testing.svg?style=flat)](https://www.npmjs.org/package/@nguyenquan241208/testing)
[![InteractiveAdvertisingBureau](https://circleci.com/gh/InteractiveAdvertisingBureau/iabtcf-es.svg?style=shield)](https://circleci.com/gh/InteractiveAdvertisingBureau/iabtcf-es)

# @nguyenquan241208/testing

Testing tools to generate randomized input/output

#### Installation

npm
```
npm install @nguyenquan241208/testing --save-dev
```

yarn
```
yarn add -D @nguyenquan241208/testing
```

#### Utilities
[TCModelFactory](./src/TCModelFactory.ts)

Generate random TCModel with GVL
```typescript

import {TCModelFactory} from '@nguyenquan241208/testing';

const tcModel = TCModelFactory.withGVL();

```

Generate random TC string

```typescript
import {TCString} from '@nguyenquan241208/core';
import {TCModelFactory} from '@nguyenquan241208/testing';

console.log(TCString.encode(TCModelFactory.noGVL()));
// ... random tc string

```

Add publisher restrictions

```typescript

import {TCModelFactory} from '@nguyenquan241208/testing';
let tcModel = TCModelFactory.withGVL();
tcModel = TCModelFactory.addPublisherRestrictions(tcModel);
// now has random publisher restrictions

```

[GVLFactory](./src/GVLFactory.ts)

Get latest GVL

```typescript
import {GVLFactory} from '@nguyenquan241208/testing';
import {GVL} from '@nguyenquan241208/core';

const gvl = GVLFactory.getLatest();

```

Get version of GVL

```typescript
import {GVLFactory} from '@nguyenquan241208/testing';
import {GVL} from '@nguyenquan241208/core';

const gvl = GVLFactory.getVersion(10);

```
