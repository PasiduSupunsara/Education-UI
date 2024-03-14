import {React } from "react";
import { Layout } from "antd";
import {Navbar} from "./Navbar";
import { Button} from 'antd';
import { useNavigate} from "react-router-dom";




export const Home =() => {
  const navigate = useNavigate();
  const handleSbmit = (e) =>{
        navigate("/Courses")
  }
  return (
    <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
        <div className="home">
              <p className="detalis1">Start your journey with our<br></br>
              practical courses </p>
              <p className="detalis2">Our online courses are built in partnership with technology leaders and are<br></br>
              designed to meet industry demand </p>
              <Button className="button1" type="primary" shape="round" onClick={handleSbmit}>Take a course</Button>
        </div>
        
      </Layout.Content>
    </Layout>
  );
}
