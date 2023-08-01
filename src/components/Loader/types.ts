import { ReactNode } from "react";

export interface LoaderProps {
    children?: ReactNode;
    isLoading: boolean;
    error: string | null;
}