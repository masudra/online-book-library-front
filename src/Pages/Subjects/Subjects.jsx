import { useEffect, useState } from "react";
import Subject from "./Subject/Subject";

const Subjects = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data);


    return (
        <div>
            {
                data?.map(singelData => <Subject key={singelData} singelData={singelData}></Subject>)
            }
            <h1>hello sub</h1>

        </div>
    );
};

export default Subjects;