import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useGetSalesQuery } from "state/api";
import { useMemo } from "react";
const OverviewChart = ({ isDashboard = false, view }) => {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery();
  console.log("Overview", data);

  return <div>OverviewChart</div>;
};

export default OverviewChart;
