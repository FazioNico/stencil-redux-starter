import { Component, Prop } from '@stencil/core';
import { ActiveRouter } from '@stencil/router';
import { Store, Action } from '@stencil/redux';

import { AuthStoreService } from "./store/auth-store.service";

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.scss'
})
export class AppLogin {

  @Prop({ context: 'activeRouter' }) activeRouter: ActiveRouter;
  @Prop({ context: 'store' }) store: Store;
  dispatchCheckAuth: Action;
  dispatchLogin: Action;
  dispatchCreate: Action;

  componentWillLoad() {
    // Map Dispatch Action dispatchCreateAction
    const {
      dispatchCheckAuthAction:dispatchCheckAuth,
      dispatchLoginAction:dispatchLogin,
      dispatchCreateAction:dispatchCreate,
    } = AuthStoreService;
    this.store.mapDispatchToProps(this, {
      dispatchLogin, dispatchCheckAuth, dispatchCreate
    });
    // using setTimeout to prevent store unavailability
    setTimeout(_=> {
      this.dispatchCheckAuth()
    },100)
  }

  switchForm(target:any){

    let list:any = target.closest('p').classList;
    let classList:any = [...list];

    switch (classList.includes('create')) {
      case false:
        target.closest('p').classList.toggle('create')
        target.closest('p').innerHTML = '<small>Click here to login with existing account</small>'
        document.forms[0].querySelector('button').innerHTML = 'Create an account'
        break;
      case true:
        target.closest('p').classList.toggle('create')
        target.closest('p').innerHTML = '<small>Click here to create new account</small>'
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
     ? this.dispatchCreate(formData)
     : this.dispatchLogin(formData);
  }

  render() {
    return (
      <div>
        <h1>
          Login
        </h1>
        <form>
          <input name="email" type="email" placeholder="your@email.com"/><br/>
          <input name="password" type="password" placeholder="password"/><br/>
          <button onClick={event=>this.formSubmit(event)}>Login</button>
        </form>
        <p id="switchForm" onClick={(e: UIEvent) => this.switchForm(e.target)} >
          <small>Click here to create new account</small>
        </p>
      </div>
    );
  }
}
