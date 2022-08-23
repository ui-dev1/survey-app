import {
    Tabs,
    Tab,
    Box
} from '@mui/material';
const TabComponent = ({
    tabsData,
    style,
    headerStyle,
    handleChange,
    value
}) => {
    return (
        <Box sx={{ backgroundColor: 'white', borderRadius: 2, marginTop: 2 }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon position tabs"
                sx={headerStyle}
            >
                {
                    tabsData.map((tab) => {
                        return (
                            <Tab
                                key={tab.id}
                                sx={style}
                                icon={tab.image}
                                iconPosition={tab.position}
                                label={tab.title}
                            />
                        )
                    })
                }
            </Tabs>
        </Box>
    )
}

export default TabComponent;