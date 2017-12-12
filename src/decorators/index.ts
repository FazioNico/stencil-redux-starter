/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   12-12-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 12-12-2017
 */

import { AuthStoreService, isAuthenticated } from "../components/app-login/store/auth-store.service";

 export function canEnterIfAuthenticated(target:Function) {

   target.prototype.componentWillLoad = function () {

     isAuthenticated()
       .then(res=> {
         console.log(res)
         if(!res){
           window.location.href = window.location.origin
           return
         }
         const {dispatchCheckAuthAction:dispatchCheckAuth} = AuthStoreService;
         this.store.mapDispatchToProps(this, {
           dispatchCheckAuth
         });
         // using setTimeout to prevent store unavailability
         setTimeout(_=> {
           this.dispatchCheckAuth()
         },100)
         this.initComponent()
       })
       .catch(_=> window.location.href = window.location.origin)
   }
 }
