import { Component, OnInit, OnDestroy } from '@angular/core';
import { Network } from '@capacitor/network';
import { AuthenticationServicesService } from 'src/app/Providers/authentication-services.service';

import { AlertController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {

  
  private subscription = new Subscription;

  Full_name : string =''
  username : string = ''
  email : string = ''
  password : string = ''
  confirmPassword : string = ''
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


  async register (){


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
      if (!this.Full_name || !this.username || !this.email || !this.password || !this.confirmPassword) {
        const alert = await this.alertCtrl.create({
          header: 'Error!',
          cssClass: 'custom-alert',
          message: 'All fields are required!',
          buttons: ['OK']
        });
        await alert.present();
        await loading.dismiss(); // Dismiss loading
        return; // Exit the function
      }
  
      if(this.password !== this.confirmPassword){
        const alert = await this.alertCtrl.create({
          header: 'Error!',
          cssClass: 'custom-alert',
          message: 'password not match',
          buttons: ['OK']
        });
        
        await alert.present();
      }
  
  
      const data = {
        'fullname' : this.Full_name,
        'username' : this.username,
        'email' : this.email,
        'password' : this.password,
        'confirmPassword': this.confirmPassword
      }


      const registerUser = await this.authUser.Register(data).subscribe(

        async res => {

          await loading.dismiss();

          console.log(res)

        }
      )

      this.subscription.add(registerUser);
    
  }

}