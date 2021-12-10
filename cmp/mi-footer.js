class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Alvarado Mariscal Uriel Martín.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
