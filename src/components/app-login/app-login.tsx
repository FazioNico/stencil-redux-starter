import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { RouterHistory } from '@stencil/router';

import { loginAction, fetchLogin } from '../../actions/auth';

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.scss'
})
export class AppLogin {

  @Prop() history: RouterHistory;
  @Prop({ context: 'store' }) store: Store;

  loginAction: Action;
  fetchLogin: Action;

  switchForm(target:any){
    console.log(target)
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

  formSubmit(event){
    event.preventDefault()
    let formData:any =  {}
    let formEl:any = document.forms[0].elements;
    [...formEl].map((el, i)=>{
      if(formEl[i].value){
        formData[formEl[i].name] = formEl[i].value
      }
      return el
    })
    console.log(formData);
    // TODO: validation inputs
    let list:any = document.getElementById('switchForm').classList;
    let classList:any = [...list];
    console.log(list,classList);
    (classList.includes('create'))
     ?  null // this.createEmailAccount(formData.email, formData.password)
     : this.logInEmailAccount(formData);
  }

  logInEmailAccount(formData){
    console.log(formData)
    // Bind Action to Event
    this.store.mapDispatchToProps(this, {
      // loginAction,
      fetchLogin
    });
    //this.loginAction(formData);
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
