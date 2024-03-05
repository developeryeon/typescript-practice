import { useState } from 'react';
import { useQueryClient } from 'react-query';

export default function TodoForm() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const queryClient = useQueryClient();

	return (
		<form>
			<input type="text" placeholder="제목을 입력해보세요" />
			<input type="text" placeholder="오늘의 투두 내용을 입력해보세요" />
			<button type="submit">Submit</button>
		</form>
	);
}
