/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import MyDocument from "./myDocument";

import * as htmlToImage from "html-to-image";
import BasicTable from "./tableSample";
import PDFComponent from "./myDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@mui/material";
import CardChart from "./chartProductivity";
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
  const [tableImage, setTableImage] = useState(null);

  useEffect(() => {
    // Check if the table element exists
    const tableElement = document.getElementById("chart-productivity");
    if (!tableElement) {
      console.error("Table element with ID 'tablebasic' not found.");
    } else {
      console.log("Table element found:", tableElement);
      // Convert the table to an image when the component mounts
      convertTableToImage(tableElement).then((dataUrl) => {
        setTableImage(dataUrl);
        console.log(dataUrl);
      });
    }
  }, []);

  const dataChart = [
    {
      id: 1,
      type: "division",
      name: "Jaguar",
      billable: 40.08620689655172,
      non_billable: 37.07734674329502,
      rnd: 0,
      summary: 77.16355363984674,
    },
    {
      id: 7,
      type: "division",
      name: "Kinton",
      billable: 54.61514778325124,
      non_billable: 12.469211822660098,
      rnd: 4.141009852216749,
      summary: 71.22536945812809,
    },
    {
      id: 8,
      type: "division",
      name: "Cupang",
      billable: 46.69300766283525,
      non_billable: 37.705938697318004,
      rnd: 0,
      summary: 84.39894636015326,
    },
    {
      id: 9,
      type: "division",
      name: "Gentong",
      billable: 51.85344827586207,
      non_billable: 36.985837438423644,
      rnd: 5.8128078817733995,
      summary: 94.65209359605912,
    },
    {
      id: 10,
      type: "division",
      name: "Maung",
      billable: 5.783045977011494,
      non_billable: 0,
      rnd: 88.90086206896551,
      summary: 94.683908045977,
    },
    {
      id: 14,
      type: "division",
      name: "GemboXXX",
      billable: 31.839080459770113,
      non_billable: 23.345306513409962,
      rnd: 26.479885057471265,
      summary: 81.66427203065135,
    },
    {
      id: 15,
      type: "division",
      name: "Karet",
      billable: 16.045258620689655,
      non_billable: 56.78879310344828,
      rnd: 0,
      summary: 72.83405172413792,
    },
    {
      id: 12,
      type: "division",
      name: "Presales",
      billable: 0,
      non_billable: 60.991379310344826,
      rnd: 0,
      summary: 60.991379310344826,
    },
    {
      id: 0,
      type: "division",
      name: "Consultant Manager",
      billable: 14.109195402298852,
      non_billable: 59.69827586206896,
      rnd: 0,
      summary: 73.80747126436782,
    },
  ];
  return (
    <>
      <BasicTable />
      <PDFComponent tableImage={tableImage} />
      <CardChart dataArr={dataChart} />
      <PDFDownloadLink
        document={<PDFComponent tableImage={tableImage} />}
        fileName="TABLE"
      >
        {({ blob, url, loading, error }) => {
          console.log(blob, url, loading, error);
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
