import axios from 'axios';
import { Todo } from '../shared/todo';

export const getTodo = async (): Promise<Todo[]> => {
	const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/todo`);
	return response.data;
};

export const addTodo = async (title: string, content: string) => {
	const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/todo`, { title, content });
	return response.data;
};

interface ToggleTodoData {
	id: string | number;
	isDone: boolean;
}

export const toggleTodo = ({ id, isDone }: ToggleTodoData) => axios.patch(`${process.env.REACT_APP_BASE_URL}/todo/${id}`, { isDone: !isDone });

export const deleteTodo = (id: string | number) => axios.delete(`${process.env.REACT_APP_BASE_URL}/todo/${id}`);
