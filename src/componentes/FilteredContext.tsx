import React,{useState, createContext, type ReactNode, useEffect, useContext} from "react";

interface FilteredContextProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const FilteredContext = createContext<FilteredContextProps | undefined>(undefined);


export const FilterProvider:React.FC<{children:ReactNode}> = ({children}) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const resetFilter = () => {
        setSearchQuery("");
    }

    useEffect(() =>{
        const saved = localStorage.getItem("filters");

        if(saved){
            const parsed = JSON.parse(saved)
            setSearchQuery(parsed.searchQuery || "");
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("filters", JSON.stringify({searchQuery}));
    },[searchQuery])


    return <FilteredContext.Provider value={{searchQuery,setSearchQuery}}>
            {children}
    </FilteredContext.Provider>
}



export const useFilter = () => {
    const context = useContext(FilteredContext);

    if(!context){
        throw new Error("context must be specified");
    }

    return context;
}

