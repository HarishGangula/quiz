import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public scanner: BarcodeScanner, ) {
  } 
    options:BarcodeScannerOptions ;
    encodText:string = '' ;
    scannedData:any = {};


    scan () {  
      this.options = {
        prompt : 'Scan your QRCode'
      };

    this.scanner.scan().then(scannedData => {
      this.scannedData = scannedData ;
      console.log('Barcode data', scannedData);
     }).catch(err => {
         console.log('Error', err);
     })
  
    }
  }

