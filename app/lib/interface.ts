export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
    tags: any;
    
  }

  export interface blogPost {
    currentSlug: string,
    title: string,
    titleImage: any,
    content: any
  }

  export interface Tag {
    name: string;
    slug: { current: string };
    _id: string;
    postCount?: number
  }

  export interface Post {
    title: string
    smallDescription: string;
    slug: { current: string };
    titleImage: any;
    tags: Array<Tag>;
    _id: string;
  }