// // // khalti.service.ts
// // import { Injectable } from '@angular/core';
// // import { HttpClient, HttpHeaders } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // declare var KhaltiCheckout: any;
// //
// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class KhaltiService {
// //   private config = {
// //     publicKey: 'your_actual_public_key',
// //     productIdentity: '1234567890',
// //     productName: 'Dragon',
// //     productUrl: 'http://gameofthrones.wikia.com/wiki/Dragons',
// //     paymentPreference: ['KHALTI', 'EBANKING', 'MOBILE_BANKING', 'CONNECT_IPS', 'SCT'],
// //     eventHandler: {
// //       onSuccess(payload: any) {
// //         console.log(payload);
// //       },
// //       onError(error: any) {
// //         console.log(error);
// //       },
// //       onClose() {
// //         console.log('Widget is closing');
// //       },
// //     },
// //   };
// //
// //   private checkout: any;
// //
// //   constructor() {
// //     this.checkout = new KhaltiCheckout(this.config);
// //   }
// //
// //   initiatePayment(amount: number) {
// //     console.log('Button clicked!');
// //     this.checkout.show({ amount: amount * 100 });
// //   }
// // }
// //
// // import { Injectable } from '@angular/core';
// //
// // declare var KhaltiCheckout: any;
// //
// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class KhaltiService {
// //   // private apiUrl = 'https://khalti.com/api/v2/payment/initiate'; // Replace with the actual Khalti API endpoint
// //
// //   private config = {
// //     publicKey: 'test_public_key_dc74e0fd57cb46cd93832aee0a390234',
// //     // publicKey: 'test_public_key_35a5b900daa24b3e9e012c74062b3855',
// //     productIdentity: '1234567890',
// //     productName: 'Online Bookstore',
// //     productUrl: 'http://localhost:4200',
// //     paymentPreference: ['KHALTI', 'EBANKING', 'MOBILE_BANKING', 'CONNECT_IPS', 'SCT'],
// //     eventHandler: {
// //       onSuccess(payload: any) {
// //         console.log(payload);
// //       },
// //       onError(error: any) {
// //         console.log(error);
// //       },
// //       onClose() {
// //         console.log('Widget is closing');
// //       },
// //     },
// //   };
// //
// //   private checkout: any;
// //
// //   constructor() {
// //     // Load KhaltiCheckout script dynamically
// //     this.loadScript('https://khalti.com/static/khalti-checkout.js', () => {
// //       // Script has been loaded, create KhaltiCheckout instance
// //       this.checkout = new KhaltiCheckout(this.config);
// //     });
// //   }
// //
// //   private loadScript(scriptUrl: string, callback: () => void) {
// //     const script = document.createElement('script');
// //     script.src = scriptUrl;
// //     script.onload = callback;
// //     document.head.appendChild(script);
// //   }
// //
// //   initiatePayment(amount: number) {
// //     console.log('Button clicked!');
// //     if (this.checkout) {
// //       this.checkout.show({amount: amount * 100});
// //     } else {
// //       console.error('KhaltiCheckout is not initialized. Ensure the script is loaded.');
// //     }
// //
// //   }
// //
// // }
//
// /// khalti.service.ts
//
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class KhaltiService {
//   private khaltiApiUrl = 'https://khalti.com/api/v2/payment/';
//   private publicKey = 'test_public_key_35a5b900daa24b3e9e012c74062b3855';
//
//   constructor(private http: HttpClient) { }
//
//   initiatePayment(amount: number): Observable<any> {
//     const body = {
//       amount,
//       // other necessary parameters
//     };
//
//     return this.http.post(`${this.khaltiApiUrl}khalti-request`, body, {
//       headers: {
//         Authorization: `Key ${this.publicKey}`
//       }
//     });
//   }
//
//   verifyPayment(token: string): Observable<any> {
//     return this.http.post(`${this.khaltiApiUrl}khalti-verify/${token}`, null, {
//       headers: {
//         Authorization: `Key ${this.publicKey}`
//       }
//     });
//   }
// }
