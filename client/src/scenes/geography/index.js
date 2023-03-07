import { Box, useTheme } from "@mui/system"
import { useGetGeographyQuery } from 'state/api'
import { ResponsiveChoropleth } from "@nivo/geo"
import { geoData } from "state/geoData"
import Header from "components/Header"
const Geography = () => {
    const theme = useTheme();
    const { data } = useGetGeographyQuery();
    console.log("Geography : ", data)
    return (
        <Box>
            <Header title="Geography" subtitle="Geography Data" />
        </Box>
    )
}

export default Geography