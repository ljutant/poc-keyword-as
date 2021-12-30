import {AddressModel} from "./address-model";

export interface ContactModel{
  telFix:string;
  telMobile:string;
  adresse?:AddressModel;
}
