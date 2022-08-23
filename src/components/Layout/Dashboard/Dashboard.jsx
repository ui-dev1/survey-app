import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardCard from './DashboardCard/DashboardCard';
import TabComponent from '../../shared/Tabs/Tabs';
import SystemData from './SystemData/SystemData';
import FilledButton from '../../shared/Buttons/Buttons';
import { dashboardActions } from '../../../redux/action';
import { colors } from '../../shared/constants/colors';
import './dashboard.scss';

const Dashboard = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(dashboardActions.getDashboardStats());
        dispatch(dashboardActions.getSystemDataQuestionTypes());
        dispatch(dashboardActions.getSystemDataQuestions());

    }, [dispatch]);

    const { dashboardCards, mainTabs } = useSelector(state => state.dashboard);
    let stats = null;
    if (dashboardCards?.dashboardStats?.length) {
        stats = dashboardCards?.dashboardStats.map(card => <DashboardCard card={card} />)
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let tabContent = <SystemData />
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
            <TabComponent
                tabsData={mainTabs}
                headerStyle={{ borderBottom: `1px solid ${colors.darkBlue}`, textTransform: 'none' }}
                style={{ textTransform: 'none', marginLeft: 3 }}
                value={value}
                handleChange={handleChange} />
            <div>
                {tabContent}
            </div>
        </div>
    )
}

export default Dashboard