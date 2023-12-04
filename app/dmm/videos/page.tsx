import {Grid, Box, TextField, CardHeader, Card, CardContent, Button} from "@mui/material";

export default function Page() {
    return (
        <Grid container>
            <Grid columns={6} item>BBB</Grid>
            <Grid item columns={6}>
                <Card>
                    <CardHeader title={"搜尋"} />
                    <CardContent>
                        <Box>
                            <TextField type={"number"} label={"發行年份"} />
                        </Box>
                        <Box>
                            <TextField type={"number"} label={"發行月份"} />
                        </Box>
                        <Box>
                            <TextField type={"number"} label={"發行日"} />
                        </Box>
                        <Box>
                            <TextField type={"text"} label={"影片標題關鍵字"} />
                        </Box>
                        <Box>
                            <TextField type={"text"} label={"標籤"} />
                        </Box>
                        <Box>
                            <TextField type={"text"} label={"出演女優"} />
                        </Box>
                        <Box>
                            <TextField type={"text"} label={"系列"} />
                        </Box>
                        <Box>
                            <TextField type={"text"} label={"監督"} />
                        </Box>
                        <Box>
                            <Button variant={"contained"}>搜尋</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}