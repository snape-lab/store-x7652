type Product = {
  title: string;
  metadata: {
    description: string;
    price: number;
    category: {
      key: string;
      value: string;
    }
    image: {
      url: string;
      imgix_url: string;
    };
  };
  thumbnail: string;
  slug: string;
}