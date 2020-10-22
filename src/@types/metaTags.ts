export enum EPageType {
  website = "website",
  article = "article",
}

export enum ERobotsContent {
  follow = "follow",
  index = "index",
  no_follow = "nofollow",
  no_index = "noindex",
}

export type TMetaTags = {
  title: string;
  author?: string;
  description: string;
  type: EPageType;
  og_type?: EPageType;
  image: string;
  robots: string;
  og_title?: string;
  og_description?: string;
  og_URL?: string;
  canonical: string;
  og_image?: string;
  og_site_name?: string;
  twitter_card?: string;
  twitter_description?: string;
  twitter_site?: string;
  twitter_domain?: string;
  twitter_img?: string;
};
