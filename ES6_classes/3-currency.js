export default class Currency{
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  };

  get name() {
    return this._name;
  };

  set code(_code) {
    return this._code;
  };

  set name(_name) {
    return this._name;
  };

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
