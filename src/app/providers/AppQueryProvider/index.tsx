import { 
    QueryClient, 
    QueryClientProvider, 
    QueryClientProviderProps 
} from "@tanstack/react-query";
import { FC } from "react";


export interface QueryProviderProps extends Omit<QueryClientProviderProps, 'client'> {

}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchInterval: false,
            refetchOnWindowFocus: false,
            retry: false,
        }
    }
});


const AppQueryProvider: FC<QueryProviderProps> 
    = ({ children }) => {
        return (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        )
    }


export default AppQueryProvider;