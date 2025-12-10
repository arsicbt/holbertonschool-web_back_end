export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(_name) {
    return this._name;
  }

  set code(_code) {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
