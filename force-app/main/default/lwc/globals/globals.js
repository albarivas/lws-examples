import { LightningElement } from "lwc";

export default class Globals extends LightningElement {
  get notSupportedAPI() {
    return new RTCPeerConnection();
  }
}
