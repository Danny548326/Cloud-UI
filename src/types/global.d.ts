interface CustomElements {

  disconnectedCallback?: () => void;

  connectedCallback?: () => void;

  adoptedCallback?: () => void;

  attributeChangedCallback?: () => void;
}