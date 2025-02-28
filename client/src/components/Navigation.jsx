import {Link} from 'react-router-dom';

export function Navigation() {
    return (
        <div>
            <h1>Task App</h1>
            <Link to = "/tasks-create">Create Task</Link>
            <Link to = "/tasks">Task</Link>
        </div>
    )
}