export default interface PdfFileProps {
  wishlist: {
    title: string;
    description: string;
    price: number;
    date: string;
    image_src: string;
    location: string;
  }[];
}
