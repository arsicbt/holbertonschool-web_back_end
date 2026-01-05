export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(_size) {
    return this._size;
  }

  set location(_location) {
    return this.location;
  }

  // Called when the object is coerced to a number
  valueOf() {
    return this._size;
  }

  // Called when the object is coerced to a string
  toString() {
    return this._location;
  }
}
