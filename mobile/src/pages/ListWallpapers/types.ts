export interface RouteParamsProps {
  keyword: string;
  category: string;
}

export interface UnsplashPhotoProps {
  id: string;
  description?: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  }
}
