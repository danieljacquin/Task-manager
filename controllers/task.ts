import { task } from '../models/task';
import asyncHandler from '../middlewears/async-handler';

class TaskController {

    getAll = asyncHandler( async(req: any, res: any) => {
        const tasks =  await task.find();
        res.status(200).json(tasks);
    })

    createTask = asyncHandler( async(req: any, res: any) => {
        const { body } = req;
        const newTask = await task.create(body);
        res.status(200).json(newTask);
    })

    getTask = asyncHandler( async(req: any, res: any) => {
        const { id } = req.params;
        const singleTask = await task.findById(id);
        if(!singleTask){
            return res.status(404).json({msg: 'No task with id: '+id})
        }
        res.status(200).json({msg: singleTask});
    })

    updateTask = asyncHandler( async(req: any, res: any) => {
        const { id } = req.params;
        const { body } = req;
        const singleTask = await task.findByIdAndUpdate(id,body, { new: true});
        if(!singleTask){
            return res.status(404).json({msg: 'No task with id: '+id})
        }
        res.status(200).json({msg: singleTask})
    })

    deleteTask = asyncHandler( async(req: any, res: any) => {
        const { id } = req.params;
        const removeTask = await task.findByIdAndDelete(id);
        if(!removeTask){
            return res.status(404).json({msg: 'No task with id: '+id});
        }
        res.status(200).json({msg: removeTask});
    })
} 


export const taskController = new TaskController();