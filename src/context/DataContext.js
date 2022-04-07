import { createContext, useState, useEffect } from "react"

// Define data context with empty object
export const DataContext = createContext({})

// Data provider for different components or 'children' that we want to give access to
export const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider value={{

        }}>
            {children}
        </DataContext.Provider>

    )
}

export default DataContext