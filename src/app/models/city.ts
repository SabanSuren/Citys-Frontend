import { Photo } from "./photo";

export class City {
    id: number;
    name: string;
    description: string;
    userId: number;
    photos: Photo[];
    photoUrl: string; // Yeni eklenen photoUrl özelliği

    constructor(id: number, name: string, description: string, userId: number, photos: Photo[], photoUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.userId = userId;
        this.photos = photos;
        this.photoUrl = photoUrl; // Yeni eklenen photoUrl özelliğini ayarlayın
    }
}

