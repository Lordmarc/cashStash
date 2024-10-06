import { Component, OnInit, OnDestroy } from '@angular/core';
import { Network } from '@capacitor/network';
import { AuthenticationServicesService } from 'src/app/Providers/authentication-services.service';

import { AlertController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  private subscription = new Subscription;

  email : string = ''
  password : string = ''
  showPassword: boolean = false
  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authUser : AuthenticationServicesService

  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  async login (){


      const networks = await Network.getStatus();

      const loading = await this.loadingCtrl.create({});
  
  
      if (networks.connected == false){
        
            const alert = await this.alertCtrl.create({
              header: 'Error!',
              cssClass: 'custom-alert',
              message: 'There is no internet connection detected!',
              buttons: ['OK']
            });
            
            await alert.present();
      }
  
      if(!this.email || !this.password){
        const alert = await this.alertCtrl.create({
          header: 'Error!',
          cssClass: 'custom-alert',
          message: 'username or password is Empty!',
          buttons: ['OK']
        });
        
        await alert.present();
      }
  
  
      const data = {
        'email' : this.email,
        'password' : this.password
      }


      const LoginUser = await this.authUser.Login(data).subscribe(

        async res => {

          await loading.dismiss();

          console.log(res)

        }
      )

      this.subscription.add(LoginUser);
    
  }

}
