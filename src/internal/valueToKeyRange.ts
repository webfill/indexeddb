// Copyright 2017 Jeremy Scheff
// SPDX-License-Identifier: Apache-2.0

import FDBKeyRange from "../IDBKeyRange.js";
import { DataError } from "./errors.js";
import valueToKey from "./valueToKey.js";

// http://w3c.github.io/IndexedDB/#convert-a-value-to-a-key-range
const valueToKeyRange = (value: any, nullDisallowedFlag: boolean = false) => {
  if (value instanceof FDBKeyRange) {
    return value;
  }

  if (value === null || value === undefined) {
    if (nullDisallowedFlag) {
      throw new DataError();
    }
    return new FDBKeyRange(undefined, undefined, false, false);
  }

  const key = valueToKey(value);

  return FDBKeyRange.only(key);
};

export default valueToKeyRange;
