export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
  }

  export interface blogPost {
    currentSlug: string,
    title: string,
    titleImage: any,
    _updatedAt: Date;
    content: any
  }