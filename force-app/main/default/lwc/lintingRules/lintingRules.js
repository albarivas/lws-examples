import { LightningElement } from "lwc";
export default class LintingRules extends LightningElement {
  addContent() {
    const elem = this.template.querySelector("div");
    elem.innerHTML = "<script>malicious</script>";
  }
}
