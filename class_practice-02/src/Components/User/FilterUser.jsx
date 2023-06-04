import React from "react";
const FilterUser = ({ setUser, state }) => {
    return (
        <div
            style={{
                width: "40%",
                display: "flex",
                justifyContent: "space-evenly",
                margin: "20px auto",
            }}
        >
            <div>
                <input
                    onChange={() => {
                        setUser(state);
                    }}
                    type="radio"
                    name="gender"
                    value="All"
                />
                All
            </div>

            <div>
                <input
                    onChange={() => {
                        setUser(
                            state.filter((data) => {
                                return data.gender === "male";
                            })
                        );
                    }}
                    type="radio"
                    name="gender"
                    value="Male"
                />
                Male
            </div>

            <div>
                <input
                    onChange={() => {
                        setUser(state.filter((data) => data.gender === "female"));
                    }}
                    type="radio"
                    name="gender"
                    value="Female"
                />
                Female
            </div>
        </div>
    )
}

export default FilterUser;