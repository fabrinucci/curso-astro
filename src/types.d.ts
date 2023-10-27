export interface Post {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: DataPost;
}

export interface DataPost {
  title: string;
  pubDate: string;
  description: string;
  image: null;
  tags: string[];
}
