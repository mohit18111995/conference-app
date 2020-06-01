import { LightningElement } from 'lwc';

export default class App extends LightningElement { 
    constructor() {
    super();
    this.state = 'list';
    window.history.replaceState('list', null, '');
    window.onpopstate = event => {
      if (event.state) {
        this.state = event.state;
      }
    };
  }}
