class HighFiveElement extends HTMLElement {
  connectedCallback() {
    this.attributeChangedCallback("number", null, this.number)
    this.oldNumber = 0
  }
  get duration() {
    if (this.hasAttribute("duration")) {
      return parseInt(this.getAttribute("duration"))
    } else {
      return 110;
    }
  }
  set duration(value) {
    this.setAttribute("duration", value)
  }
  get interval() {
    if (this.hasAttribute("interval")) {
      return parseInt(this.getAttribute("interval"))
    } else {
      return 10;
    }
  }
  get step() {
    if (this.hasAttribute("step")) {
      return parseFloat(this.getAttribute('step'))
    } else {
      const value = (this.number / this.duration)

      return value 
    }
  }
  set step(value) {
    this.setAttribute("step", value)
  }
  get number() {
    return parseFloat(this.getAttribute('number'))
  }
  set number(value) { 
      if (this.tick) {
        clearInterval(this.tick)
      }
      this.oldNumber = 0;
      this.tick = setInterval(() => {
        const newNumber = this.oldNumber + this.step 
        this.innerHTML = newNumber?.toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0})

        if (newNumber >= this.number) {
          clearInterval(this.tick)
        }
        this.oldNumber = newNumber
      }, this.interval)
      this.innerHTML = "0";
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "number") {
      if (oldValue != newValue) {
        this.number = newValue
      }
    }
  }
}

customElements.define("high-five", HighFiveElement);