import React, { useState } from "react";
import "./SearchForm.scss"
import { Search } from "@material-ui/icons";

const SearchForm = () => {
    const [data, setData] = useState<string>();
    return (
        <form action="#" className="searchForm">
            <button type="submit"> <Search/> </button>
            <input
                type="search"
                placeholder="search..."
                onChange={(e: React.ChangeEvent<{ value: any }>) => setData( e.target.value )}
            />
        </form>
    );
};

export default SearchForm;