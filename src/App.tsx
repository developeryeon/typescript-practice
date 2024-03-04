import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Header />
		</QueryClientProvider>
	);
}

export default App;
