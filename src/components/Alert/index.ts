import AlertType from './interface';


class Alert extends HTMLElement implements CustomElements {
  
  constructor( ) { 
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    
    const div = document.createElement('div');
    const style = document.createElement('style');
    const title = this.getAttribute('title');
    const text = this.getAttribute('text');
    

    const titleWrapper = document.createElement('div');
    titleWrapper.innerText = title || ''
    titleWrapper.setAttribute('class', 'text-3xl font-bold underline')
    const textWrapper = document.createElement('div');
    textWrapper.innerText = text || ''
  

    div.appendChild(titleWrapper);
    div.appendChild(textWrapper);

    shadow.appendChild(style);
    shadow.appendChild(div);
  }

  disconnectedCallback() { }

  connectedCallback() { 
    console.log('connect')
  }

  adoptedCallback() { }
  
  attributeChangedCallback() { }

}

customElements.define('c-alert', Alert)

export default Alert as AlertType;