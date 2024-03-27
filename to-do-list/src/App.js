import { useEffect, useState } from "react";
import Input from "./component/Input";

const App = () => {
    const a = useState(1);
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
    }

    const handleAddNewTask = () => {
        let arr = names;
        arr.push(name);
        setNames(arr);
    }

    
    return (
        
        <>
        {console.log("names", names)}
            {
                names?.length > 0 && names.map((item, index) => {
                    console.log("render");
                    return (
                        <div key={index}>
                            <div>{item}</div>
                            <div>
                                <button>Sửa</button>
                                <button>Xóa</button>
                            </div>
                        </div>
                    )
                })
            }

            <label>Tên công việc:</label>
            <input type="text" name="desc" onChange={(event) => handleOnChangeInput(event)}/>
            <button onClick={() => handleAddNewTask()}>Thêm mới</button>
        </>
    );
}

export default App;