import React from "react";
import { Outlet } from "react-router-dom";
import {Navbar} from "./Navbar";
import { Typography ,Layout ,Card} from "antd";
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';

export const Courses =() => {
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
                    <h1 className="title">Popular courses</h1>
                    <p className="desc">Upgrade your skill with newest courses</p>
                </Typography>
                <div className="home-card">
                    <div>
                    <Card className="dashboard-card1">
                      <p className="details">{<CalendarOutlined />} 2024/02/28 <br></br> {<ClockCircleOutlined />} 6 Hours</p>
                    </Card>
                    <text className="textcard">Marketing Communication</text>
                    </div>
                    <div>
                    <Card  className="dashboard-card2">
                    <p className="details">{<CalendarOutlined />} 2024/03/29 <br></br> {<ClockCircleOutlined />} 8 Hours</p>
                    </Card>
                    <text className="textcard">Summer Kids</text>
                    </div>
                    <div>
                    <Card className="dashboard-card3">
                    <p className="details">{<CalendarOutlined />} 2024/03/01 <br></br> {<ClockCircleOutlined />} 10 Hours</p>
                    </Card>
                    <text className="textcard">Business & Management</text>
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
