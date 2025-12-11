export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(_brand) {
    return this._brand;
  }

  set brand(_motor) {
    return this._motor;
  }

  set brand(_color) {
    return this._color;
  }

  cloneCar() {
    const obj = new this.constructor();
    return obj;
  }
}
