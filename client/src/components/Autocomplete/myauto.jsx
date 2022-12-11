import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input, SearchBar } from "../../pages/MedicalProducts/NavBAR";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AutoSearch = ({ funct, keyE, keya, set }) => {

  const [searchTerm, updateSearchTerm] = useState("");
  const [filteredResults, updateFilteredResults] = useState(null);
  const [hideResults, updateHideResults] = useState(false);
  const [focusIndex, updateFocusIndex] = useState(-1);
  const [show, setShow] = useState(false);
  const productList = useSelector((state) => state.productList);
  let navigate = useNavigate();
  const linkRefs = [];
  const keys = {
    ENTER: 13,
    UP: 38,
    DOWN: 40,
  };

  const handleNavigation = (e) => {
    switch (e.keyCode) {
      case keys.ENTER:
        if (focusIndex !== -1) {
          navigate({
            pathname: `/medproducts/${linkRefs[focusIndex].name.split(" ")[0]}`,
            search: `?id=${linkRefs[focusIndex]._id}`,
          });
         
          window.location.reload();
          updateHideResults(true);
         
        }

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

 

  const updateSearch = (e) => {
    e.preventDefault();
    if (e.target.value.length === 0) {
      updateSearchTerm("");
      updateFilteredResults([]);
      funct(e, "");
      setShow(false);
       
    } else {
      updateSearchTerm(e.target.value);
      console.log(focusIndex)
      funct(e, e.target.value,false,focusIndex);
    
     
    }
  };
  const hideAutoSuggest = (e) => {
    e.preventDefault();
    if (e.relatedTarget && e.relatedTarget.className === "autosuggest-link") {
      return;
    }
    setShow(false);
   
  };

  const showAutoSuggest = (e) => updateHideResults(false);
  useEffect(() => {
    const getSearchResult = async () => {
      const searchResultsResponse = await productList.products.products;

      if ( searchResultsResponse?.length>4) {
        updateFilteredResults(searchResultsResponse.slice(0, 4));
        console.log(filteredResults)
      } else {
        updateFilteredResults(searchResultsResponse);
        console.log(filteredResults)
      }
    };
getSearchResult();
 
if(searchTerm.length>0)
  setShow(true)

  },[productList]);


  return (
    <SearchBar style={{ zIndex: "999" }}>
      <Input
        type="text"
        placeholder="Search .."
        onChange={updateSearch}
        onKeyDown={handleNavigation}
        onFocus={showAutoSuggest}
        onBlur={hideAutoSuggest}
        onKeyPress={(e) => keyE(e,focusIndex)}
      />
      <div
        style={{
          width: "2.4rem",
          height: "100%",
          float: "right",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          onClick={(e) => {
            funct(e, searchTerm, true,focusIndex);
            keya(e);
          }}
          style={{
            cursor: "pointer",
            fontSize: "1rem",
            lineHeight: "2rem",
            color: "#198b69",
          }}
          icon={faSearch}
        />
      </div>

      <ul
        style={{
          display: `${show ? "block" : "none"}`,
          listStyle: "none",
          border: "1px solid  #e4e4e4",
          backgroundColor: "white",
          borderRadius: "7px",
        }}
        className="search-suggestions"
      >
        {!hideResults &&  (
          <li
            style={{ listStyle: "none", padding: "0px 8px" }}
            key="-1"
            className={focusIndex === -1 ? "active" : null}
          >{`Search for ${searchTerm}`}</li>
        )}
        {!hideResults &&
          filteredResults?.map((result, index) => {
            linkRefs[index] = result;
            return (
              <li
                style={{
                  listStyle: "none",
                  listStyle: "none",
                  color: "black",
                  fontWeight: "500",
                  padding: "0px 8px",
                }}
                key={index}
                className={focusIndex === index ? "active" : null}
              >
                <Link
                  className="autosuggest-link"
                  onClick={()=>set(false)}
                  to={`/medproducts/${result.name.split(" ")[0]}?id=${
                    result._id
                  }`}
                >
                  <p
                    style={{
                      padding: "4px 0px",
                      display: "block",
                      color: "black",
                    }}
                  >
                    {result.name}
                  </p>
                </Link>
              </li>
            );
          })}
      </ul>
    </SearchBar>
  );
};

export default AutoSearch;
