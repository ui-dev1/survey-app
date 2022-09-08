import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardCard from './DashboardCard/DashboardCard';
import TabComponent from '../../shared/Tabs/Tabs';
import SystemData from './SystemData/SystemData';
import FilledButton from '../../shared/Buttons/Buttons';
import { dashboardActions } from '../../../redux/action';
import { colors } from '../../shared/constants/colors';
import Search from "../../shared/Search/Search";
import FilterIcon from "../../../assets/filter.png";
import './dashboard.scss';
import Filter from './Filter/Filter';

const Dashboard = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(dashboardActions.getDashboardStats());
        dispatch(dashboardActions.getSystemDataQuestionTypes());
        dispatch(dashboardActions.getSystemDataQuestions());

    }, [dispatch]);

    const { dashboardCards, mainTabs, systemDataQuestions } = useSelector(state => state.dashboard);
    let stats = null;
    if (dashboardCards?.dashboardStats?.length) {
        stats = dashboardCards?.dashboardStats.map(card => <DashboardCard card={card} />)
    }

    const [value, setValue] = useState(0);
    const [searchValue, setSearchValue] = useState(null);
    const [openFilter, setOpenFilter] = useState(null);
    const [checked, setChecked] = useState([]);

    const handleSearch = ({ target }) => {
        setSearchValue(target.value);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (event) => {
        setOpenFilter(event.currentTarget);
    };

    let tabContent = <SystemData searchValue={searchValue} checked={checked} />
    if (value === 1) {
        tabContent = <p>Tab2</p>;
    }

    return (
        <div className='dashboard'>
            <div className="flex-div dashboard__heading">
                <h1>Dashboard</h1>
                <Link to="/discussion" className="discussion__link">
                    <FilledButton
                        buttonStyle={{
                            backgroundColor: colors.darkBlue,
                            textTransform: 'capitalize'
                        }}>Create Discussion Guide</FilledButton>
                </Link>
            </div>
            <div className='cards__container'>
                {stats}
            </div>
            <div className="tabs__header">
                <TabComponent
                    tabsData={mainTabs}
                    headerStyle={{ borderBottom: `1px solid ${colors.darkBlue}`, textTransform: 'none' }}
                    style={{ textTransform: 'none', marginLeft: 3 }}
                    value={value}
                    handleChange={handleChange}
                />
                <div className='filter__container'>
                    <Search
                        searchValue={searchValue}
                        handleSearch={handleSearch}
                    />
                    <FilledButton
                        key="filter"
                        buttonStyle={{
                            width: '50%',
                            backgroundColor: 'white',
                            color: 'black',
                            fontWeight: 600,
                            border: "1px solid rgba(124, 136, 159, 0.18)",
                            borderRadius: '4px',
                            textTransform: 'none',
                            boxShadow: 'unset',
                            "&:hover": {
                                backgroundColor: colors.white,
                                color: colors.black,
                            },
                        }}
                        onClick={handleClick}
                    >
                        <div className='btn__filter'>
                            Filter
                            <img
                                src={FilterIcon}
                                alt="Filter"
                            />

                        </div>
                    </FilledButton>
                    <Filter
                        openFilter={openFilter}
                        setOpenFilter={setOpenFilter}
                        checked={checked}
                        setChecked={setChecked}
                    />
                </div>
            </div>
            <div>
                {tabContent}
            </div>
        </div>
    )
}

export default Dashboard