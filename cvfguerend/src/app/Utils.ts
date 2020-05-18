import * as data from '../assets/cvData.json';


export function getTranslation(selectedLang:string, property:{}[]):string{

    let index:number = 0;
    let response:string = "";
    Object.keys(property).forEach(prop =>{
        if(Object.getOwnPropertyNames(property[Object.keys(property)[prop]]).toString() == selectedLang){
            response = Object.values(property[index])[0].toString();
        }
        index++;
    });
    return response;
}