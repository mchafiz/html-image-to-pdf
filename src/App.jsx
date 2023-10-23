/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import MyDocument from "./myDocument";

import * as htmlToImage from "html-to-image";
import BasicTable from "./tableSample";
import PDFComponent from "./myDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@mui/material";
import CardChart from "./chartProductivity";
import dataChart from "./constant/dataChart";
import CardTable from "./cardTable";
import tableDataProductivityMonth from "./constant/tableDataProductivityMonth";
// import MyDocument from "./myDocument";
// import BasicTable from "./tableSample";

const convertTableToImage = async (tableElement) => {
  try {
    const dataUrl = await htmlToImage.toPng(tableElement);
    return dataUrl;
  } catch (error) {
    console.error("Error converting table to image", error);
    return null;
  }
};

function App() {
  const [tableImage, setTableImage] = useState([]);

  const splitDataInto3MonthSections = () => {
    const sections = [];
    for (let i = 0; i < tableDataProductivityMonth.length; i += 3) {
      sections.push(tableDataProductivityMonth.slice(i, i + 3));
    }
    return sections;
  };

  useEffect(() => {
    const tableElementsIds = splitDataInto3MonthSections().map((_, index) =>
      document.getElementById(`table-productivity-${index}`)
    );
    if (!tableElementsIds) {
      console.error("Table element with ID 'tablebasic' not found.");
    } else {
      console.log("Table element found:", tableElementsIds);
      tableElementsIds.map(async (data) => {
        return await convertTableToImage(data).then((dataUrl) => {
          setTableImage((prev) => [...prev, dataUrl]);
        });
      });
    }
  }, []);

  console.log(tableImage, "kuntul");
  return (
    <>
      <PDFComponent tableImage={tableImage} />
      {splitDataInto3MonthSections().map((data, index) => {
        return <CardTable key={index} dataArr={data} indexId={index} />;
      })}
      <PDFDownloadLink
        document={<PDFComponent tableImage={tableImage} />}
        fileName="TABLE"
      >
        {({ blob, url, loading, error }) => {
          return loading ? (
            "Loading document..."
          ) : (
            <Button>Download now!</Button>
          );
        }}
      </PDFDownloadLink>
    </>
  );
}

export default App;
