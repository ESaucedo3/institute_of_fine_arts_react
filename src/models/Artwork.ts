export class Artwork {
  id: string
  imgUrls: object
  description: string
  altDescription: string
  attribution: string
  color: string
  admirers: string[]

  constructor(data: Artwork) {
    this.id = data.id;
    this.imgUrls = data.imgUrls;
    this.description = data.altDescription;
    this.altDescription = data.altDescription;
    this.attribution = data.attribution;
    this.color = data.color;
    this.admirers = data.admirers;
  }
}

