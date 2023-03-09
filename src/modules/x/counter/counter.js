import { LightningElement } from 'lwc';
import pkceChallenge from 'pkce-challenge';


export default class extends LightningElement {
test=pkceChallenge();
    counter = 0;

    increment() {
        this.counter++;
    }
    decrement() {
        this.counter--;
    }
}
