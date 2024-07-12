export class User {
    birthdate: string | null;
    country: string | null;
    displayName: string;
    email: string | null;
    externalUrls: ExternalUrl;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    product: string | null;
    type: string;
    uri: string;
  
    constructor(data: any) {
      this.birthdate = data.birthdate ?? null;
      this.country = data.country ?? null;
      this.displayName = data.displayName ?? '';
      this.email = data.email ?? null;
      this.externalUrls = new ExternalUrl(data.externalUrls);
      this.followers = new Followers(data.followers);
      this.href = data.href ?? '';
      this.id = data.id ?? '';
      this.images = data.images.map((imageData: any) => new Image(imageData));
      this.product = data.product ?? null;
      this.type = data.type ?? '';
      this.uri = data.uri ?? '';
    }
  }
  
  export class ExternalUrl {
    spotify: string;
  
    constructor(data: any) {
      this.spotify = data.spotify ?? '';
    }
  }
  
  export class Followers {
    href: string | null;
    total: number;
  
    constructor(data: any) {
      this.href = data.href ?? null;
      this.total = data.total ?? 0;
    }
  }
  
  export class Image {
    height: number;
    url: string;
    width: number;
  
    constructor(data: any) {
      this.height = data.height ?? 0;
      this.url = data.url ?? '';
      this.width = data.width ?? 0;
    }
  }
  