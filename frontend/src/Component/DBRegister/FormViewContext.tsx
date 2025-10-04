import { createContext, useContext, useState } from "react";

type FormViewContextType = {
    openForm : (name: string, value:boolean) => void;
    closeForm : (name: string, value:boolean) => void;
    isFormOpen: boolean,
    formName: string | null
}

const FormViewContext = createContext<FormViewContextType | undefined >(undefined);

export const FormViewProvider = ({ children }: { children: React.ReactNode }) => {
    const [isFormOpen , setIsFormOpen] = useState(false);
    const [formName , setFormName] = useState<string | null>(null);

    const openForm = (name:string, view:boolean) => {
        setFormName(name);
        setIsFormOpen(view);
    };

    const closeForm = (name:string, view:boolean) => {
        setFormName(name);
        setIsFormOpen(view);
    };

    return (
        <FormViewContext.Provider value={({ openForm, closeForm, isFormOpen, formName })}>
            {children}
        </FormViewContext.Provider>
    )
}

export const useFormView = () => {
    const context = useContext(FormViewContext);
    if(!context){
        throw new Error("useFormView must be used inside FormViewProvider");
    }
    return context;
}