import React, {FC} from 'react';
import './CurrentProjectPage.css'
import {useSelector} from "react-redux";
const CurrentProject: FC = () => {
    const state: any = useSelector(state => state)

    return (
        <div className={'currentProjectPage'}>
            <div className="currentProjectPageTitle">
                <h1>{state.currentOpenedProject.nameOfProject}</h1>
            </div>
        </div>
    );
};

export default CurrentProject;
