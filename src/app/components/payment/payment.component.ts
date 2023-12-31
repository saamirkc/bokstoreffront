// payment.component.ts
// import {Component, OnInit} from '@angular/core';
// import Swal from 'sweetalert2';
// import {ActivatedRoute, Router} from "@angular/router";
// declare var KhaltiCheckout: any;
//
// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//
//   constructor(private router: Router) { }
//
//   ngOnInit(): void {
//     this.loadKhaltiScript();
//   }
//
//   loadKhaltiScript() {
//     const script = document.createElement('script');
//     script.src = 'https://khalti.s3.ap-south-1.amazonaws.com/KPG/dist/2020.12.17.0.0.0/khalti-checkout.iffe.js';
//     script.onload = () => this.initializeKhalti();
//     document.head.appendChild(script);
//   }
//
//   initializeKhalti() {
//     var config = {
//       "publicKey": "test_public_key_35a5b900daa24b3e9e012c74062b3855",
//       "productIdentity": "1234567890",
//       "productName": "Dragon",
//       "productUrl": "http://gameofthrones.wikia.com/wiki/Dragons",
//       "paymentPreference": [
//         "KHALTI",
//         "EBANKING",
//         "MOBILE_BANKING",
//         "CONNECT_IPS",
//         "SCT",
//       ],
//       "eventHandler": {
//         onSuccess(payload) {
//           console.log(payload);
//           Swal.fire('Successfully paid !!','Thanks for choosing khalti','success');
//         },
//         onError(error) {
//           console.log(error);
//         },
//         onClose() {
//           console.log('widget is closing');
//         }
//       }
//     };
//
//     var checkout = new KhaltiCheckout(config);
//     var btn = document.getElementById("payment-button");
//     btn.onclick = function() {
//       checkout.show({ amount: 1000 });
//
//     };
//   }
// }
//
//
//
//



import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CartService } from 'src/app/services/cart.service';

declare var KhaltiCheckout: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  totalPrices: number;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.loadKhaltiScript();
  }

  loadKhaltiScript() {
    const script = document.createElement('script');
    script.src = 'https://khalti.s3.ap-south-1.amazonaws.com/KPG/dist/2020.12.17.0.0.0/khalti-checkout.iffe.js';
    script.onload = () => this.initializeKhalti();
    document.head.appendChild(script);
  }

  initializeKhalti() {
    var config = {
      "publicKey": "test_public_key_35a5b900daa24b3e9e012c74062b3855",
      "productIdentity": "1234567890",
      "productName": "Dragon",
      "productUrl": "http://gameofthrones.wikia.com/wiki/Dragons",
      "paymentPreference": [
        "KHALTI",
        "EBANKING",
        "MOBILE_BANKING",
        "CONNECT_IPS",
        "SCT",
      ],
      "eventHandler": {
        onSuccess: (payload) => {
          console.log(payload);
          Swal.fire('Successfully paid !!', 'Thanks for choosing khalti', 'success');
        },
        onError: (error) => {
          console.log(error);
        },
        onClose: () => {
          console.log('widget is closing');
        }
      }
    };

    var checkout = new KhaltiCheckout(config);

    var btn = document.getElementById("payment-button");
    btn.onclick = () => {
      this.totalPrices = this.cart.totalPriceValue; // Access directly from CartService
      console.log("Total Price:", this.totalPrices);
      // checkout.show({ amount: this.totalPrices * 100 });
      checkout.show({ amount: 1000 });
    };
  }
}
