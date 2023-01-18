import IURL from "./URLModel"

export class getShorten{

    constructor(URL: string){
        this.URL = URL
    }


    async getURL: Promise<IURL> (URL: string)=>{
        let link: string = ''
        const response = await fetch(URL: string)
        const data = await response()

        return link;
        

    }


}