import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type PdfFileProps from "./pdf-file.props";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f6f1f1",
    minHeight: "100vh",
  },

  pageNumber: {
    position: "absolute",
    fontSize: "12px",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },

  container: {
    padding: "12px",
    border: "solid 2px #19a7ce",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "flex-start",
    margin: "24px 0",
  },

  event_logo: {
    maxWidth: "300px",
    borderRadius: "12px",
  },

  event_title: {
    maxWidth: "300px",
    margin: "12px 0",
    fontSize: "16px",
  },

  event_date: {
    fontSize: "medium",
  },

  event_description: {
    maxWidth: "500px",
  },

  description_container: {
    width: "100%",
  },
});

export default function PdfFile({ wishlist }: PdfFileProps) {
  return (
    <Document>
      <Page style={styles.body}>
        {wishlist.map(
          ({ date, description, image_src, location, price, title }) => (
            <View key={title} style={styles.container}>
              <Image style={styles.event_logo} src={image_src} />

              <View style={styles.description_container}>
                <View>
                  <Text style={styles.event_title}>{title}</Text>
                  <Text style={styles.event_date}>{date}</Text>
                  <Text>{location}</Text>
                  <Text style={styles.event_description}>{description}</Text>
                </View>

                <View>
                  <Text>{price} $</Text>
                </View>
              </View>
            </View>
          )
        )}

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
        />
      </Page>
    </Document>
  );
}
