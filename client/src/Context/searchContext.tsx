import React, {createContext} from "react";

export const SearchContext = createContext(null);

export const useSearch = () => {
    const context = React.useContext(SearchContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

SearchContext.displayName = "CartContext";

const SearchProvider: React.FC = ({ children }) => {
    const [searchValue, setSearchValue] = React.useState('');


    const value = {
        searchValue,
        setSearchValue
    };

    return (
        <SearchContext.Provider
            value={value}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;