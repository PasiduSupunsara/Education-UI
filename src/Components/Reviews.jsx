import React from "react";
import { Layout ,Card} from "antd";
import {Navbar} from "./Navbar";


export const Reviews =() => {
  return (
    <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
        <Card>Alex Johnson<br></br>

Rating: 3/5<br></br>
Review: "The website has a good range of subjects, but the interface feels a bit outdated. Navigation could be smoother, and the search functionality needs improvement. However, the content is solid, and the affordability of the courses is a big plus for budget-conscious learners."</Card>
        <Card>Emma Williams<br></br>

Rating: 5/5<br></br>
Review: "I love the personalization features of this education platform! The adaptive learning algorithms cater to individual progress, and the resources provided for each module are comprehensive. The progress tracking system motivates me to stay on top of my studies. Highly recommended!"</Card>
        <Card>John Doe<br></br>

Rating: 5/5<br></br>
Review: "This education website is a game-changer! The user-friendly interface makes navigation a breeze. The quality of the content is outstanding, and the interactive quizzes have been incredibly helpful in reinforcing concepts. I highly recommend it for students of all levels."</Card>
        <Card>Sarah Smith<br></br>

Rating: 4/5<br></br>
Review: "The variety of courses offered on this platform is impressive. The video lectures are engaging, and the real-world applications make learning more practical. However, I wish there were more opportunities for live interaction with instructors. Overall, a great resource for self-paced learning."</Card>
      </Layout.Content>
    </Layout>
  );
}
