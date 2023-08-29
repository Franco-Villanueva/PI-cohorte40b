import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../../redux/actions/actions";

export default function Page({ page,max }) {
    const dispatch = useDispatch();

    const [input, setInput] = React.useState(page.toString());

    const updatePage = (newPage) => {
        const regexNumbers = /^[0-9]+$/;
        const parsedPage = parseInt(newPage);

        if (!regexNumbers.test(newPage) || parsedPage < 1 || parsedPage > max) {
        dispatch(setPage(1));
        setInput("1");
        } else {
            dispatch(setPage(parsedPage));
            setInput(newPage);
        }
    };

    const previousPage = () => updatePage(page - 1);
    const nextPage = () => updatePage(page + 1);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            updatePage(input);
        }
    };

    return (
        <div>
            <button disabled={page <= 1} onClick={previousPage}>
                Previous
            </button>
            <input
                onChange={(event) => setInput(event.target.value)}
                onKeyPress={handleKeyPress}
                name="page"
                autoComplete="off"
                value={input}
            />
            <span> OF {max}</span>
            <button disabled={page >= max} onClick={nextPage}>
                Next
            </button>
        </div>
    );
}