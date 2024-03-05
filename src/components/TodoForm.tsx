import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function TodoForm() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const dispatch = useDispatch();

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTitle('');
		setContent('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={title} onChange={handleTitleChange} placeholder="Enter title" />
			<input type="text" value={content} onChange={handleContentChange} placeholder="Enter content" />
			<button type="submit">Submit</button>
		</form>
	);
}
