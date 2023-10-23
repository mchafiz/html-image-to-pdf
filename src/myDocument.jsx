/* eslint-disable react/prop-types */
import { Document, Page, Image, StyleSheet } from "@react-pdf/renderer";

const PDFComponent = ({ tableImage }) => {
  return (
    <Document>
      <Page orientation="landscape">
        <Image src={tableImage} style={styles.image} />
      </Page>
      <Page orientation="landscape">
        <Image src={tableImage} style={styles.image} />
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
  },
});

export default PDFComponent;
