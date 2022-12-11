import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductAction";

const AutoCompleteSearch = () => {
  const linkRefs = [];
  const keys = {
    ENTER: 13,
    UP: 38,
    DOWN: 40,
  };
const dispatch=useDispatch()
  useEffect(() => {
  
    dispatch(listProduct(searchTerm));
  
  

}, [dispatch,searchTerm]);

  const handleNavigation = (e) => {
    switch (e.keyCode) {
      case keys.ENTER:
        if (focusIndex !== -1) {
          window.open(linkRefs[focusIndex].href);
        }

        hideAutoSuggest(e);
        break;
      case keys.UP:
        if (focusIndex > -1) {
          updateFocusIndex(focusIndex - 1);
        }
        break;
      case keys.DOWN:
        if (focusIndex < filteredResults.length - 1) {
          updateFocusIndex(focusIndex + 1);
        }
        break;
    }
  };

  const getSearchResults = () => [
    {
      link: "webtips.dev/how-to-improve-data-fetching-in-react-with-suspense",
      title: "How to Improve Data Fetching in React With Suspense",
    },
    {
      link: "webtips.dev/how-to-improve-data-fetching-in-react-with-suspense",
      title: "lllHow to Improvre Data Fetching in React With Suspense",
    },
  ];

  const SearchResults = () => {
    const Message = ({ text }) => (
      <div className="message">
        <h2>ssss{text}</h2>
        <hr />
      </div>
    );
    if (!displayResults) {
      return null;
    }
    if (!filteredResults.length) {
      return <Message text="We couldn't find anything for your search term." />;
    }
    if (!searchResults.length) {
      return <Message text="Loading search results" />;
    }

    if (!searchTerm) {
      return <Message text="Try to search for something..." />;
    }

    return (
      <ul className="search-results">
        {searchResults.map((m, index) => ({
          /*
                 <li key={index}>
                        <div>{m.title}</div>
                    </li>
                */
        }))}
      </ul>
    );
  };

  const [searchTerm, updateSearchTerm] = useState("");
  const [searchResults, updateSearchResults] = useState([]);
  const [filteredResults, updateFilteredResults] = useState([]);
  const [displayResults, updateDisplayResults] = useState(false);
  const [focusIndex, updateFocusIndex] = useState(-1);

  const updateSearch = (e) => {
    e.preventDefault();
    if (e.target.value.length === 0) {
      updateSearchTerm("");
      updateFilteredResults([]);
    } else {
      updateSearchTerm(e.target.value);
      updateFilteredResults(
        searchResults.filter((result) =>
          result
        )
      );
    }
  };
  const hideAutoSuggest = (e) => {
    e.preventDefault();

    if (e.relatedTarget && e.relatedTarget.className === "autosuggest-link") {
      return;
    }

    updateDisplayResults(true);
    updateFocusIndex(-1);
  };

  const showAutoSuggest = () => updateDisplayResults(false);
  useEffect(() => {
    const getSearchResult = async () => {
      const searchResultsResponse = await getSearchResults();
      console.log(searchResultsResponse);

      updateSearchResults(searchResultsResponse);
    };

    getSearchResult();
  }, []);

  return (
    <section className="search">
      <h1>Search {searchTerm.length ? `results for: ${searchTerm}` : null}</h1>
      <input
        type="text"
        placeholder="Search for tutorials..."
        onChange={updateSearch}
        onKeyDown={(e) => handleNavigation}
        onBlur={(e) => hideAutoSuggest}
        onFocus={(e) => showAutoSuggest}
      />

      <ul className="search-suggestions">
        {!displayResults && searchTerm && (
          <li
            key="-1"
            className={focusIndex === -1 ? "active" : null}
          >{`Search for ${searchTerm}`}</li>
        )}
        {!displayResults &&
          filteredResults.map((m, index) => (
            <li key={index} className={focusIndex === index ? "active" : null}>
              <a
                href="/"
                className="autosuggest-link"
           
              >
                {m.title}
              </a>
            </li>
          ))}
      </ul>

      <SearchResults />
    </section>
  );
};

export default AutoCompleteSearch;
