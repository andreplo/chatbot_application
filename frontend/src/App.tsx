import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ChatWindow from './components/ChatWindow';
import Page from './components/Page';

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Page>
        <ChatWindow />
      </Page>
    </QueryClientProvider>
  );
}
