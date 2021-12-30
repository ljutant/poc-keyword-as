import {ContactModel} from "./contact-model";

export interface PersonModel{
 id:string;
 name:string;
 gender:string;
 contact?:ContactModel;
}
