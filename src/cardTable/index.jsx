/* eslint-disable react/prop-types */
import {
  Card,
  Divider,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import moment from "moment";

const TypographyWrapper = styled(Typography)(() => ({
  border: `1px solid gray`,
  padding: "5px",
}));

function CardTable({ dataArr, isCompany, indexId }) {
  return (
    <Card id={`table-productivity-${indexId}`}>
      <Stack px={2} py={1.5}>
        <Typography variant="h4">Table of Productivity</Typography>
        <Typography variant="subtitle2">
          Displaying more detailed data from the chart.
        </Typography>
      </Stack>
      <Divider />
      <Stack
        direction="row"
        sx={{
          borderRadius: "5px",
          overflow: "hidden",
        }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <TableContainer sx={{ width: "100%", overflow: "hidden" }}>
          <Table>
            <TableHead sx={{ height: 113 }}>
              <TableRow>
                <TableCell align="center" rowSpan={4}>
                  Division
                </TableCell>
                <TableCell align="center" rowSpan={4} sx={{}}>
                  Work Days
                </TableCell>
                <TableCell align="center" rowSpan={4} sx={{}}>
                  Category
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataArr[0]?.productivities?.map((data) => (
                <TableRow key={data?.id}>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    {isCompany ? (
                      <Link sx={{ cursor: "pointer" }} onClick={() => {}}>
                        {data?.name ?? "-"}
                      </Link>
                    ) : (
                      data?.name ?? "-"
                    )}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 500,
                    }}
                  >
                    {data?.workdays ?? "-"}
                  </TableCell>
                  <TableCell align="center" sx={{ p: 0 }}>
                    <Stack>
                      <TypographyWrapper>Billable</TypographyWrapper>
                      <TypographyWrapper>No bilable</TypographyWrapper>
                      <TypographyWrapper
                        sx={{
                          fontWeight: 500,
                        }}
                      >
                        Summary
                      </TypographyWrapper>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {dataArr?.map((data) => (
          <TableContainer key={data?.id} sx={{ overflow: "hidden" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    {moment(data?.month ?? "-").format("MMMM")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Mandays</TableCell>
                  <TableCell align="center">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.productivities?.map((data) => (
                  <TableRow key={data?.id}>
                    <TableCell align="center" sx={{ p: 0 }}>
                      <Stack>
                        <TypographyWrapper>
                          {data?.billable?.mandays?.toFixed(2) ?? "-"}
                        </TypographyWrapper>
                        <TypographyWrapper>
                          {data?.non_billable?.mandays?.toFixed(2) ?? "-"}
                        </TypographyWrapper>
                        <TypographyWrapper
                          sx={{
                            fontWeight: 500,
                          }}
                        >
                          {data?.summary?.mandays?.toFixed(2) ?? "-"}
                        </TypographyWrapper>
                      </Stack>
                    </TableCell>
                    <TableCell align="center" sx={{ p: 0 }}>
                      <Stack>
                        <TypographyWrapper>
                          {data?.billable?.percentage?.toFixed(2) ?? "-"}
                        </TypographyWrapper>
                        <TypographyWrapper>
                          {data?.non_billable?.percentage?.toFixed(2) ?? "-"}
                        </TypographyWrapper>
                        <TypographyWrapper
                          sx={{
                            fontWeight: 500,
                          }}
                        >
                          {data?.summary?.percentage?.toFixed(2) ?? "-"}
                        </TypographyWrapper>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ))}
      </Stack>
    </Card>
  );
}

export default CardTable;
