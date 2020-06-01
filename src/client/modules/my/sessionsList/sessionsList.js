import { LightningElement, track } from 'lwc';
import {getSessions} from 'data/SessionData';

export default class SessionsList  extends LightningElement {
    @track sessions=[];
    @track allsessions=[];

    connectedCallback(){
        getSessions()
       /* .then(response=>{        
            console.log('>>>>>>>>>');    
            return response.json();
        })*/
        .then(sessions=>{
           // console.log('>>>>>>>>>');
            this.sessions=this.allsessions=sessions;
            console.log('>>>>>>>>>');
        });
    }

    /*
        handleSearchKeyInput(event){
        this.searchKey = event.target.value;
        console.log(event.target.value);
    }   /*
    handleSessionClick(event) {
        console.log('We are here');
        console.log(event.currentTarget.name);        
        const navigateEvent = new CustomEvent('navigate', {
            detail: event.currentTarget.name
        });
        this.dispatchEvent(navigateEvent);
    }
*/
}