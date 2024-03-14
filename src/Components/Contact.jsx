import React from "react";
import { Outlet } from "react-router-dom";
import { Typography ,Layout ,Card} from "antd";
import {Navbar} from "./Navbar";


export const Contact =() => {
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
                  <h1 className="title">CONTACT US</h1>
              </Typography>
              <div className="home-card">
              <Card title="Customer Support:" className="dashboard-card">
                      <p>Email: support@educationpyrands.com<br></br>
                        Phone: +94-123-456-7890 (Monday to Friday, 9:00 AM to 5:00 PM PST)<br></br>
                        Live Chat: Available on the website during business hours </p>
                    </Card>
                    <Card title="General Inquiries:" className="dashboard-card">
                      <p>Email: info@educationpyrands.com<br></br>
                        Phone: +94-987-654-3210<br></br>
                        Address: 123 Learning Street, Cityville, State, Zip Code</p>
                    </Card>
                    <Card title="Media Inquiries:" className="dashboard-card">
                      <p>Email: media@educationpyrands.com<br></br>
                        Phone: +94-555-789-0123<br></br>
                        Twitter: @educationpyrands<br></br>
                        Facebook: /educationpyrands<br></br>
                        LinkedIn: /company/education-pyrands</p>
                    </Card>
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
