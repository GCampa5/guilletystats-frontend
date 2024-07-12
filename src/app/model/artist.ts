export class Artist {
    externalUrls: { spotify: string };
    followers: number;
    genres: string[];
    href: string;
    id: string;
    images: string[];
    name: string;
    popularity: number;
    type: string;
    uri: string;

    constructor(data: any) {
        this.externalUrls = {
            spotify: data.externalUrls?.externalUrls?.spotify || ''
        };
        this.followers = data.followers.total;
        this.genres = data.genres;
        this.href = data.href;
        this.id = data.id;
        this.images = data.images.map((image: any) => image.url);
        this.name = data.name;
        this.popularity = data.popularity;
        this.type = data.type;
        this.uri = data.uri;
    }
}
