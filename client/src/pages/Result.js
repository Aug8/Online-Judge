import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Result() {
  const { qID } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    const getResult = async () => {
      await axios
        .get(`http://localhost:4000/codeAPI/${qID}/feedback`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
    };
    getResult();
  }, []);

  return (
    <div className="Result">
      <div>{data}</div>
    </div>
  );
}

export default Result;