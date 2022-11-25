import {createStore} from "redux";

export interface ITasks {
    queue: Array<any>,
    development: Array<any>,
    done: Array<any>
}

export interface IProject {
    nameOfProject: string
    key: any,
    isDone: boolean,
    tasks: ITasks
}

interface initialStateInterface {
    totalProjects: Array<IProject>,
    isOpenAddProjectPopup: boolean,
    currentOpenedProject?: IProject
}

const initialState: initialStateInterface = {
    totalProjects: [
        {
            nameOfProject: 'sosika',
            key: 0,
            isDone: false,
            tasks: {
                queue: [],
                development: [],
                done: [],
            }
        },
        {
            nameOfProject: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            key: 1,
            isDone: false,
            tasks: {
                queue: [],
                development: [],
                done: [],
            }
        },
    ],
    isOpenAddProjectPopup: false,
    currentOpenedProject: {
        nameOfProject: '',
        key: null,
        isDone: false,
        tasks: {
            queue: [],
            development: [],
            done: [],
        }
    }
}
const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'toggleAddProjectPopup':
            return {
                ...state,
                isOpenAddProjectPopup: state.isOpenAddProjectPopup = !state.isOpenAddProjectPopup
            }
        case 'createNewProject':
            return {
                ...state,
                totalProjects: [...state.totalProjects, action.payload]
            }
        // case 'a':
        //     return {...state, likes: state.likes + action.payload}
        // case 'toggleCompleteTodo':
        //     return {...state, totalProjects: state.totalProjects[action.payload].isDone = !state.totalProjects[action.payload].isDone }
        case 'toggleCompleteTodo':
            return {
                ...state,
                totalProjects: state.totalProjects.map((project) => project.key === action.payload
                    ? {
                        ...project,
                        isDone: !project.isDone
                    }
                    : project
                )
            }
        case 'deleteTodo':
            return {
                ...state,
                totalProjects: state.totalProjects.filter((project) => project.key !== action.payload)
            }
        case 'openProject':
            return {
                ...state,
                currentOpenedProject: state.currentOpenedProject = action.payload
            }
        // return {...state, count: state.count = state.count + 1 }
        default:
            return state
    }
}

export const store = createStore(reducer)
export type RootState = ReturnType<typeof store.getState>
