import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  /* istanbul ignore next */
  public navigateToUrl(url: string): void {
    window.location.href = url;
  }

  //Generate a Random String
  public getRandomString() {
    const randomItems = new Uint32Array(28);
    let binaryStringItems : string[] = [];
    crypto.getRandomValues(randomItems);
    randomItems.map(dec => binaryStringItems.push(`0${dec.toString(16).substr(-2)}`));
    console.log(`binaryStringItems: ${binaryStringItems}`);
    return binaryStringItems.reduce((acc, item) => `${acc}${item}`, '');
  }

  //Encrypt a String with SHA256
  public encryptStringWithSHA256(str: string) {
    const PROTOCOL = 'SHA-256'
    const textEncoder = new TextEncoder();
    const encodedData = textEncoder.encode(str);
    console.log(`Encoded data: ${encodedData}`)
    return crypto.subtle.digest(PROTOCOL, encodedData);
  }

  //Convert Hash to Base64-URL
  public hashToBase64url(arrayBuffer: ArrayBuffer) {
    const items = new Uint8Array(arrayBuffer)
    const stringifiedArrayHash = items.reduce((acc, i) => `${acc}${String.fromCharCode(i)}`, '')
    console.log(`stringifiedArrayHash = ${stringifiedArrayHash}`);
    const decodedHash = btoa(stringifiedArrayHash)

    const base64URL = decodedHash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    return base64URL
  }
}
