/* eslint-disable react/prop-types */
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPIOptions } from "../../api";

export const Search = ({onSearchChange}) => {

  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoAPIOptions)
    .then((response) => response.json())
      .then((response) => { 
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`, 
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      })
      .catch((err) => { console.error(err) });
  }

  const handleOnChanged = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData)
  };

  return (
    <AsyncPaginate 
      placeholder = 'Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChanged}
      loadOptions={loadOptions}
    />
  );
}

