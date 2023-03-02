import React from "react";
import Container from "@mui/material/Container";

const Connecting = () => {
  const data = [
    {
      id: "1",
      title: "Neighbour",
      description:
        "Build networking with the people in your neighbourhood, be it someone next door or those you have yet to meet.",
    },
    {
      id: "2",
      title: "Public Agencies",
      description:
        "Create a two-way connection with the community members in order to provide benefits that they need and reach out to a wider audience.",
    },
    {
      id: "3",
      title: "NonProfits",
      description:
        "Reach out to people who needs you the most and discover multiple alternatives to gain support from donors nearby. ",
    },
    {
      id: "4",
      title: "Large Bands",
      description:
        "Increase brand recognition by offering services that can improve daily lives to the neighbourhood members.",
    },
  ];
  return (
    <Container className="m-5">
      <div className="text-center pt-4 pb-4">
        <h2 >
          Connecting the <span className="text-danger fw-bold mb-5"> Neighborhood</span>
        </h2>
        <p className=" " style={{color:"#6c757d"}}>
          A prosperous community is a community that consists of neighbours and
          organizations that assist each other in improving the environment.
        </p>
      </div>
      <div className="d-flex gap-4  ">
        {data.map((values) => {
          return (
            <div className="" key={values.id}>
              <div class="card py-3 card1" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{values.title}</h5>
                  <p  style={{color:"#6c757d"}}class="card-text text-muted">{values.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
export default Connecting;
