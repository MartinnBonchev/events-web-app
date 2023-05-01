import { useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { useAppSelector } from "@store/hooks";
import { selectWishlist } from "@store/reducers/events/events.selectors";
import Event from "@root/features/event";
import Button from "@components/button";
import PdfFile from "@features/pdf-file";

export default function Wishlist() {
  const ref = useRef<HTMLDivElement | null>();
  const wishlist = useAppSelector(selectWishlist);

  const pdfWishlist = wishlist.map((el) => ({
    title: el.title,
    price: el.price,
    description: el.description,
    date: el.date,
    image_src: el.image.src,
    location: el.location,
  }));

  return (
    <div>
      <PDFDownloadLink
        document={<PdfFile wishlist={pdfWishlist} />}
        fileName="Wishlist"
      >
        {({ loading }) => (
          <Button disabled={wishlist.length === 0}>
            {loading ? "Loading" : "Download PDF"}
          </Button>
        )}
      </PDFDownloadLink>

      <div ref={(divRef) => (ref.current = divRef)}>
        {wishlist.map(
          ({ date, description, id, title, price, image, location }) => (
            <Event
              key={id}
              id={id}
              date={date}
              description={description}
              image={image}
              title={title}
              location={location}
              price={price}
            />
          )
        )}
      </div>
    </div>
  );
}
