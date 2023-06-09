

export const getData = (setUser, setState) => {
    fetch("https://randomuser.me/api/?results=30")
        .then((res) => res.json())
        .then((data) => {
            setUser(data.results);
            setState(data.results);
            console.log(data);
        });
};