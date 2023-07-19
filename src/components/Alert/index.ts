import AlertType from './interface';
import style from './index.less';
class Alert extends HTMLElement implements CustomElements {
  
  constructor( ) { 
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    
    const div = document.createElement('div');
    const type = this.getAttribute('type');

    if (type === 'success') div.setAttribute('class', 'success')
    if (type === 'error') div.setAttribute('class', 'error')
    if (type === 'info') div.setAttribute('class', 'info')
    if (type === 'warning') div.setAttribute('class', 'warning')
    const styleElement = document.createElement('style');
    // const linkElem = document.createElement('link');
    const title = this.getAttribute('title');
    const text = this.getAttribute('text');
    
    const titleWrapper = document.createElement('div');
    titleWrapper.setAttribute('class', 'title')
    titleWrapper.innerText = title || ''

    const textWrapper = document.createElement('div');
    textWrapper.innerText = text || ''
  

    div.appendChild(titleWrapper);
    div.appendChild(textWrapper);
    styleElement.textContent = `${style}`;
    shadow.appendChild(styleElement);
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