import { api, LightningElement } from 'lwc';

export default class Login extends LightningElement {
    @api  email = "test@gmail.com";

    handleChange(event) {
        this.email = event.target.value;
        console.log(this.email );
        console.log(event.target );
    }
}