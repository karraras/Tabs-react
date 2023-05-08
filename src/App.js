import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [person, setPerson] = React.useState([]);
  const [orde, setOrde] = React.useState(0);
  const btnz = [...new Set(person.map((ele) => ele.company))];

  const getFetch = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPerson(data);
  };
  React.useEffect(() => {
    getFetch();
  }, []);

  if (person.length > 0) {
    const { company, id, title, dates, duties, order } = person[orde];
    return (
      <section className="jobs-center">
        <div className="btn-container">
          {btnz.map((ele, index) => {
            return (
              <button
                className="job-btn"
                key={index}
                onClick={() => {
                  return setOrde(index);
                }}
              >
                {ele}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <span className="job-company">{company}</span>
          <p className="job-date">{dates}</p>
          <div>
            {duties.map((ele, index) => {
              return (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight />
                  <p>{ele}</p>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    );
  }
}

export default App;
