import React, {FC} from 'react';
import './ProjectsPage.css'
import {useDispatch, useSelector} from "react-redux";
import {IProject} from "../../redux/store";
import {Modal} from "../../components/ModalPopup";
import {useNavigate} from "react-router-dom";

const ProjectsPage: FC = () => {
    const [findProjectValue, setFindProjectValue] = React.useState('')
    const [titleNewProject, setTitleNewProject] = React.useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state: any = useSelector(state => state)
    const toggleProject = (key: number) => {
        dispatch({type: 'toggleCompleteTodo', payload: key})
    }
    const deleteTodo = (key: number) => {
        dispatch({type: 'deleteTodo', payload: key})
    }
    const onClickAddProject = () => {
        dispatch({type: 'toggleAddProjectPopup'})
        setTitleNewProject('')
    }
    const createProject = () => {
        if (titleNewProject.trim().length !== 0) {
            const date: object = new Date()
            console.log(date.valueOf())
            const newProject: IProject = {
                nameOfProject: titleNewProject,
                key: date.valueOf(),
                isDone: false,
                tasks: {
                    queue: [],
                    development: [],
                    done: [],
                }
            }
            dispatch({type: 'createNewProject', payload: newProject})
            dispatch({type: 'toggleAddProjectPopup'})
        }
    }
    const openProject = (project: IProject) => {
        navigate('/currentProject')
        dispatch({type: 'openProject', payload: project })
    }
    return (
        <div className={'projectsPage'}>
            <Modal isOpen={state.isOpenAddProjectPopup} onClose={onClickAddProject}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <input
                        style={{backgroundColor: '#d3d3d3', border: 'none', padding: '5px'}}
                        placeholder={'Title...'}
                        type="text"
                        onChange={(e) => setTitleNewProject(e.target.value)}
                    />
                    <button className={'defaultBtn'} style={{padding: '5px', marginTop: '10px'}}
                            onClick={() => createProject()}>
                        create project
                    </button>
                </div>
            </Modal>
            <div className="searchAndAddProject">
                <input className={'defaultInput'}
                       type="text"
                       placeholder={'Find your project...'}
                       onChange={(e) => setFindProjectValue(e.target.value)}
                />
                <button onClick={() => onClickAddProject()}>create new project</button>
            </div>
            <div className="existingProjects">
                <div className={'existingProjectsStatistic'}>
                    <h3>total project: <span>{state.totalProjects.length}</span></h3>
                    <h3>completed
                        projects: <span>{state.totalProjects.filter((project: IProject) => project.isDone).length} of {state.totalProjects.length}</span>
                    </h3>
                </div>
                <div className="existingProjectsInfo">
                    {state.totalProjects.filter((el: IProject) =>
                        el.nameOfProject.toLowerCase()
                            .includes(findProjectValue.toLowerCase()))
                        .map((project: IProject) =>
                            <div className="existingProjectsItem" key={project.key}>
                                <div onClick={() => toggleProject(project.key)}
                                     className={project.isDone ? 'projectDone' : 'projectNotDone'}></div>
                                <p onClick={() => openProject(project) }>{project.nameOfProject}</p>
                                <button className={'defaultBtn'} onClick={() => deleteTodo(project.key)}>delete</button>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
