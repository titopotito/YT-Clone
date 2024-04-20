import { useState } from "react";
import ResultsItem from "./RestultsItem/ResultsItem";
import ResultsPageFilterForm from "./ReultsPageFilterForm/ResultsPageFilterForm";
import "./Results.css";

export default function Results() {
    const [isFilterFormVisibile, setIsFilterFormVisibile] = useState(false);

    function toggleFilterFormVisiblity() {
        setIsFilterFormVisibile(!isFilterFormVisibile);
    }

    return (
        <>
            <main id="results-page">
                <div>
                    <button className="btn-round-no-bg" onClick={toggleFilterFormVisiblity}>
                        <span>Filters</span>
                        <i className="fa-solid fa-filter"></i>
                    </button>
                </div>
                <ul id="search-results-list">
                    <ResultsItem />
                    <ResultsItem />
                    <ResultsItem />
                    <ResultsItem />
                    <ResultsItem />
                    <ResultsItem />
                    <ResultsItem />
                    <ResultsItem />
                    <ResultsItem />
                    <ResultsItem />
                </ul>
            </main>
            {isFilterFormVisibile ? <ResultsPageFilterForm setIsFilterFormVisibile={setIsFilterFormVisibile} /> : <></>}
        </>
    );
}
