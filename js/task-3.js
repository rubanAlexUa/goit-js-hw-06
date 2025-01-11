class StringBuilder {
  #initialValue;
  constructor(initialValue) {
    this.#initialValue = initialValue;
  }

  getValue() {
    return this.#initialValue;
  }

  padStart(value) {
    this.#initialValue = value + this.#initialValue;
  }

  padEnd(value) {
    this.#initialValue = this.#initialValue + value;
  }

  padBoth(value) {
    this.#initialValue = value + this.#initialValue + value;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
