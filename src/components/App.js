import React, { useReducer } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import FilterSort from "./FilterSort";
import AddHogForm from "./AddHogForm";
import hogsData from "../porkers_data";
import 'semantic-ui-css/semantic.min.css';

const initialState = {
    hogs: hogsData,
    greased: false,
    sortBy: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_GREASED':
            return { ...state, greased: !state.greased };
        case 'SET_SORT_BY':
            return { ...state, sortBy: action.payload };
        case 'ADD_HOG':
            return { ...state, hogs: [...state.hogs, action.payload] };
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const filteredHogs = state.hogs
        .filter(hog => (state.greased ? hog.greased : true))
        .sort((a, b) => {
            if (state.sortBy === "name") return a.name.localeCompare(b.name);
            if (state.sortBy === "weight") return a.weight - b.weight;
            return 0;
        });

    return (
        <div className="App">
            <Nav />
            <FilterSort 
                greased={state.greased}
                toggleGreased={() => dispatch({ type: 'TOGGLE_GREASED' })}
                handleSortChange={(sortOption) => dispatch({ type: 'SET_SORT_BY', payload: sortOption })}
            />
            <AddHogForm addHog={(newHog) => dispatch({ type: 'ADD_HOG', payload: newHog })} />
            <div className="ui grid container">
                {filteredHogs.map(hog => (
                    <HogTile key={hog.name} hog={hog} />
                ))}
            </div>
        </div>
    );
};

export default App;
