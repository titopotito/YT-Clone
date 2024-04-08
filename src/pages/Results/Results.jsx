import { useState } from "react";
import DefaultPageContainer from "../../components/DefaultPageContainer/DefaultPageContainer";
import ResultsItem from "./RestultsItem/ResultsItem";
import ResultsPageFilterForm from "./ReultsPageFilterForm/ResultsPageFilterForm";
import "./Results.css";

export default function Results({ isSidebarVisible }) {
    const [isFilterFormVisibile, setIsFilterFormVisibile] = useState(false);

    function toggleFilterFormVisiblity() {
        setIsFilterFormVisibile(!isFilterFormVisibile);
    }

    return (
        <>
            <DefaultPageContainer isSidebarVisible={isSidebarVisible} id={"results-page"}>
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
            </DefaultPageContainer>
            {isFilterFormVisibile ? <ResultsPageFilterForm setIsFilterFormVisibile={setIsFilterFormVisibile} /> : <></>}
        </>
    );
}
