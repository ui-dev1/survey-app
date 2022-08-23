import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { colors } from '../../../shared/constants/colors';
import questions from '../../../../assets/questions.png';
import guides from '../../../../assets/guides.png';
import exercise from '../../../../assets/exercise.png';
import associate from '../../../../assets/associates.png';

const attributes = {
    Guides: {
        color: colors.green,
        bgColor: colors.greenBg,
        icon: guides,
    },
    Exercise: {
        color: colors.lightBlue,
        bgColor: colors.lightBlueBg,
        icon: exercise,
    },
    Questions: {
        color: colors.darkGreen,
        bgColor: colors.darkGreenBg,
        icon: questions,
    },
    Associates: {
        color: colors.purple,
        bgColor: colors.purpleBg,
        icon: associate,
    },
};

const DashboardCard = ({ card }) => {
    return (
        <Card
            sx={{
                padding: 1,
                width: '23%',
                borderTop: `3px solid ${attributes[card.header].color}`,
            }}
        >
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body1" sx={{ color: colors.darkBlue, fontWeight: 600 }}>{card.header}</Typography>
                    <Box
                        sx={{
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: attributes[card.header].bgColor,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{ width: 20, height: 25 }}
                            src={attributes[card.header].icon}
                            alt={card.header}
                        />
                    </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Typography variant="h4" gutterBottom component="div">
                        {card.value}
                    </Typography>
                    <Typography
                        sx={{ color: colors.darkGray, paddingTop: 2, fontStyle: "bold" }}
                    >
                        /{card.total}
                    </Typography>
                </Box>
                <Typography sx={{ color: colors.darkGray }}>{card.subTitle}</Typography>
            </CardContent>
        </Card>
    );
};

export default DashboardCard;
