import { Component, Prop } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { RouterHistory } from '@stencil/router';

import { fetchLogin } from './store/auth.action';

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.scss'
})
export class AppLogin {

  @Prop() history: RouterHistory;
  @Prop({ context: 'store' }) store: Store;

  fetchLogin: Action;

  switchForm(target:any){
    let list:any = target.classList;
    let classList:any = [...list];

    switch (classList.includes('create')) {
      case false:
        target.classList.toggle('create')
        target.innerHTML = 'Click here to login with existing account'
        document.forms[0].querySelector('button').innerHTML = 'Create an account'
        break;
      case true:
        target.classList.toggle('create')
        target.innerHTML = 'Click here to create new account'
        document.forms[0].querySelector('button').innerHTML = 'Login'
        break;
      default:
    }
  }

  formSubmit(event:UIEvent):void{
    event.preventDefault()
    let formData:any =  {}
    let formEl:any = document.forms[0].elements;
    [...formEl].map((el, i)=>{
      if(formEl[i].value){
        formData[formEl[i].name] = formEl[i].value
      }
      return el
    })
    // TODO: validation inputs
    let list:any = document.getElementById('switchForm').classList;
    let classList:any = [...list];
    (classList.includes('create'))
     ?  null // this.createEmailAccount(formData.email, formData.password)
     : this.logInEmailAccount(formData);
  }

  logInEmailAccount(formData:{email:string, password:string}):void{
    this.store.mapDispatchToProps(this, {
      fetchLogin
    });
    this.fetchLogin(formData);
  }

  render() {
    return (
      <div>
        <p>
          Login
        </p>
        <form>
          <input name="email" type="email" placeholder="your@email.com"/><br/>
          <input name="password" type="password" placeholder="password"/><br/>
          <button onClick={event=>this.formSubmit(event)}>Login</button>
        </form>
        <p id="switchForm" onClick={(e: any) => this.switchForm(e.target)} >Click here to create new account</p>
      </div>
    );
  }
}
