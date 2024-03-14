import React from "react";
import { Outlet } from "react-router-dom";
import { Typography ,Layout ,Card} from "antd";
import {Navbar} from "./Navbar";


export const OurTeachers =() => {
  return (
    <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
        <div className="courses">
          <section className="courses">
            <div className="container">
              <div className="row">
                <Typography >
                    <h1 className="title">Our Staff Members</h1>
                </Typography>
                <div className="home-card">
                    <div>
                    <Card className="teacher">
                    </Card>
                    <text className="textcard">Dr. Emily Rodriguez<br></br>
                    Ph.D. in Mathematics</text>
                    </div>
                    <div>
                    <Card  className="teacher">
                    </Card>
                    <text className="textcard">Prof. Samuel Patel<br></br>
                    Master's in Computer Science</text>
                    </div>
                    <div>
                    <Card className="teacher">
                    </Card>
                    <text className="textcard">Mrs. Angela Carter<br></br>
                    M.A. in English Literature</text>
                    </div> 
                </div>
              </div>
            </div>
          </section>
          <div className="margin"></div>
          <Outlet />
        </div>
      </Layout.Content>
    </Layout>
  );
}
