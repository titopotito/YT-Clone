import "./ResultsPageFilterForm.css";

export default function ResultsPageFilterForm({ setIsFilterFormVisibile }) {
    function closeForm(e) {
        setIsFilterFormVisibile(false);
    }
    function handeClick(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    return (
        <div id="results-page-filter-form" onClick={closeForm}>
            <form action="" onClick={(e) => handeClick(e)}>
                <h3>Search filters</h3>
                <div>
                    <div>
                        <h4>UPLOAD DATE</h4>
                        <hr />
                        <ul>
                            <li>Last hour</li>
                            <li>Today</li>
                            <li>This week</li>
                            <li>This month</li>
                            <li>This year</li>
                        </ul>
                    </div>
                    <div>
                        <h4>TYPE</h4>
                        <hr />
                        <ul>
                            <li>Video</li>
                            <li>Channel</li>
                            <li>Playlist</li>
                            <li>Movie</li>
                        </ul>
                    </div>
                    <div>
                        <h4>DURATION</h4>
                        <hr />
                        <ul>
                            <li>Under 4 minutes</li>
                            <li>4 - 20 minutes</li>
                            <li>Over 20 minutes</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Features</h4>
                        <hr />
                        <ul>
                            <li>Live</li>
                            <li>4K</li>
                            <li>HD</li>
                            <li>Subtitles/CC</li>
                            <li>Creative Commons</li>
                            <li>360&deg;</li>
                            <li>VR180</li>
                            <li>3D</li>
                            <li>HDR</li>
                            <li>Location</li>
                        </ul>
                    </div>
                    <div>
                        <h4>SORT BY</h4>
                        <hr />
                        <ul>
                            <li>
                                <b>Relevance</b>
                            </li>
                            <li>Upload date</li>
                            <li>View count</li>
                            <li>Rating</li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
}
