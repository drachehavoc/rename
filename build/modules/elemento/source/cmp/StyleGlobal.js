var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CmpStyleGlobal_1;
import { component } from '../Elemento.js';
let CmpStyleGlobal = CmpStyleGlobal_1 = class CmpStyleGlobal extends HTMLLinkElement {
    constructor() {
        super();
    }
    connectedCallback() {
        console.log(this);
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = this.href;
        CmpStyleGlobal_1._links.content.appendChild(link);
    }
    static import() {
        return CmpStyleGlobal_1._links.content.cloneNode(true);
    }
};
CmpStyleGlobal._links = document.createElement('template');
CmpStyleGlobal = CmpStyleGlobal_1 = __decorate([
    component({ extends: 'link' }),
    __metadata("design:paramtypes", [])
], CmpStyleGlobal);
export { CmpStyleGlobal };
//# sourceMappingURL=StyleGlobal.js.map