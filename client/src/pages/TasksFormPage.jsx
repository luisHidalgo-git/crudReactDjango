import { useForm } from 'react-hook-form'
import { createTask, deleteTask, getTask, updateTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export function TasksFormPage() {
    const {
        register, 
        handleSubmit, 
        formState: { errors },
        setValue
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            updateTask(params.id, data)
        } else {
            await createTask(data);
        }

        navigate('/tasks');
    });

    useEffect(() => {
        async function loadTask() {
            if(params.id) {
                console.log('obteniendo datos');
                const res = await getTask(params.id)
                setValue('title', res.data.title)
                setValue('description', res.data.description)
            }
        }
        loadTask()
    }, []);

    return (
        <div>
            <form onSubmit ={onSubmit}>
                <input 
                    type="text"
                    placeholder="title" 
                    {...register('title', {required: true})}>
                </input>
                {errors.title && <span>This filed is required</span>}
                <textarea 
                    rows="3" 
                    placeholder="description"
                    {...register('description', {required:true})}
                />
                {errors.description && <span>This filed is required</span>}
                <button>Save</button>
            </form>
            {params.id && (
                    <button 
                        onClick={async () => {
                            const accepted = window.confirm('are you sure?');
                            if (accepted) {
                                await deleteTask(params.id);
                                navigate('/tasks');
                        }
                    }}>Delete</button>
                )
            }
        </div>
    );
}