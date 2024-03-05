import { v4 as uuidv4 } from 'uuid';

export interface Todo {
	id: string;
	title: string;
	content: string;
	isDone: boolean;
}

function createTodo(title: string, content: string): Todo {
	return {
		id: uuidv4(),
		title,
		content,
		isDone: false,
	};
}

export default createTodo;
