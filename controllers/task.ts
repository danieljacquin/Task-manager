import { task } from '../models/task';

class TaskController {

    async getAll(req: any, res: any){
        try {
           const tasks =  await task.find();
           res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }

    async createTask(req: any, res: any){
        try {
            const { body } = req;
            const newTask = await task.create(body);
            res.status(200).json(newTask);
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }

    async getTask(req: any, res: any){
        try{
            const { id } = req.params;
            const singleTask = await task.findById(id);
            if(!singleTask){
                return res.status(404).json({msg: 'No task with id: '+id})
            }
            res.status(200).json({msg: singleTask});
        }catch(error){
            res.status(500).json({msg: error});
        }
    }

    async updateTask(req: any, res: any){
        try{
            const { id } = req.params;
            const { body } = req;
            const singleTask = await task.findByIdAndUpdate(id,body, { new: true});
            if(!singleTask){
                return res.status(404).json({msg: 'No task with id: '+id})
            }
            res.status(200).json({msg: singleTask});
        }catch(error){
             res.status(500).json({msg: error});
        }
    }

    async deleteTask(req: any, res: any){
        const { id } = req.params;
        const removeTask = await task.findByIdAndDelete(id);
        if(!removeTask){
            return res.status(404).json({msg: 'No task with id: '+id});
        }
        res.status(200).json({msg: removeTask});
    }
}

export const taskController = new TaskController();