import jsSHA from 'jssha';

export class Sha1Service {
  constructor() {
  }

  getHash(key: string, text: string) {
    const shaObj = new jsSHA('SHA-1', 'TEXT');
    shaObj.setHMACKey(key, 'TEXT');
    shaObj.update(text);
    return shaObj.getHMAC('B64');
  }

}
