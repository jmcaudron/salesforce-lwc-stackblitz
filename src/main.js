import { createElement } from "lwc";
import App from "x/app";
import Pkce from "pkce/app";

const elm = createElement("x-app", { is: App });
document.body.appendChild(elm);
const pkce = createElement("pkce-app", { is: Pkce });
document.body.appendChild(pkce);