import React, { useEffect } from "react";
import { ButtonGroup } from "@mui/material";
import { useSelector } from "react-redux";
import FilledButton from "../../../shared/Buttons/Buttons";
import { colors } from '../../../shared/constants/colors';
import "./systemData.scss";
import SystemDataQuestionsTable from "./SystemDataQuestionsTable/SystemDataQuestionsTable";
import {uniq} from "lodash";

const SystemData = ({
    searchValue,
    checked
}) => {
    const { systemDataQuestionTypes, systemDataQuestions } = useSelector((state) => state.dashboard);
    const [activeTab, setActiveTab] = React.useState(0);

    const [questionContent, setQuestionContent] = React.useState([]);

    React.useEffect(() => {
        const initArray = systemDataQuestions[0]?.data;
        setQuestionContent(initArray);
    }, [systemDataQuestions])

    useEffect(() => {
        const deepCloneContent = JSON.parse(JSON.stringify(questionContent));;
        let filteredRows = [];
        if (searchValue) {
            const keys = Object.keys(deepCloneContent[0]);
            keys.forEach((key) => {
                if (key !== "id") {
                    deepCloneContent?.forEach((row) => {
                        if (isNaN(row[key]) && row[key]?.toLowerCase().includes(searchValue.toLowerCase())) {
                            filteredRows.push(row);
                        } else {
                            const convertToString = row[key] && (row[key])?.toString();
                            if (convertToString && convertToString?.includes(searchValue)) {
                                filteredRows.push(row);
                            }
                        }
                    })
                }
            })
            filteredRows = uniq(filteredRows, 'id');
            setQuestionContent(filteredRows);
        } else {
            setQuestionContent(systemDataQuestions[0]?.data)
        }
    }, [searchValue])

    useEffect(() => {
        const deepCloneContent = JSON.parse(JSON.stringify(questionContent));
        if (checked.includes("actions")) {
            const filteredRows = deepCloneContent?.filter((row) => {
                return row.active
            })
            setQuestionContent(filteredRows);
        } else {
            setQuestionContent(systemDataQuestions[0]?.data)
        }
    }, [checked])

    const handleClick = (id) => {
        setActiveTab(id);
        const tempArray = systemDataQuestions[id].data;
        setQuestionContent([...tempArray]);
    };

    const handleFavourites = (id) => {
        console.log(id)
    }

    const getStyles = (index, op1, op2) => (activeTab === index ? op1 : op2);

    // let buttons = null;
    // if (systemDataQuestionTypes?.types?.length) {
    //     buttons = systemDataQuestionTypes?.types?.map((type, index) => (
    //         <FilledButton
    //             key={type.id}
    //             buttonStyle={{
    //                 backgroundColor: getStyles(index, colors.white, colors.aliceBlue),
    //                 color: getStyles(index, colors.black, colors.darkGray),
    //                 fontWeight: 600,
    //                 borderRadius: "4px",
    //                 "&:hover": {
    //                     backgroundColor: colors.white,
    //                     color: colors.black,
    //                 },
    //             }}
    //             onClick={() => handleClick(index)}
    //         >
    //             {type.name}
    //         </FilledButton>
    //     ));
    // }

    return (
        <div className="system-data">
            {/* <ButtonGroup
                size="small"
                aria-label="small button group"
                sx={{
                    margin: "16px",
                    backgroundColor: colors.aliceBlue,
                    padding: "8px",
                    borderRadius: "4px",
                }}
            >
                {buttons}
            </ButtonGroup> */}
            <SystemDataQuestionsTable data={questionContent} handleClick={handleFavourites} />
        </div>
    );
};

export default SystemData;
