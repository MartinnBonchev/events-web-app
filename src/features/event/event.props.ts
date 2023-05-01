export default interface EventProps {
  title: string;
  description: string;
  price: number;
  date: string;
  image: {
    src: string;
    alt: string;
  };
  location: string;
  id: number;
}
