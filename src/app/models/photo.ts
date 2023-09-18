export class Photo {
    id:number;
    cityId:number;
    dateAdded:Date;
    description:string;
    isMain:boolean;
    url:string

    constructor( id:number, cityId:number,dateAdded:Date,description:string,isMain:boolean,url:string){
        this.id=id;
        this.cityId=cityId;
        this.dateAdded=dateAdded;
        this.description=description;
        this.isMain=isMain;
        this.url=url;

    }

}
