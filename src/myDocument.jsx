/* eslint-disable react/prop-types */
import { Document, Page, Image, StyleSheet } from "@react-pdf/renderer";

const PDFComponent = ({ tableImage }) => {
  return (
    <Document>
      <Page orientation="landscape" size="A4" style={styles.page}>
        {tableImage.map((image) => {
          return <Image src={image} style={styles.image} key={image} />;
        })}
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "auto",
    height: "auto",
    margin: 25,
  },
  page: {
    margin: 5,
  },
});

export default PDFComponent;
