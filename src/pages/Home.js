import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file

const HomePage = () => {
  const features = [
    {
      title: "Task Creation and Organization",
      description: "Create tasks and organize them into categories, projects, or folders. Add details such as task names, descriptions, due dates, priorities, and assignees.",
      
    },
    {
      title: "Task Prioritization and Scheduling",
      description: "Prioritize tasks based on urgency or importance. Set deadlines, schedule reminders, and allocate estimated durations to ensure timely completion.",
      
    },
    {
      title: "Task Assignment and Collaboration",
      description: "Assign tasks to team members and track their progress. Collaborate through comments, file attachments, or real-time messaging to keep everyone aligned.",
      
    },
    {
      title: "Task Progress Tracking",
      description: "Track task progress, update statuses, mark tasks as complete, and monitor time spent. Identify bottlenecks and adjust as needed to enhance productivity.",
      
    },
    {
      title: "Calendar and Timeline Views",
      description: "Visualize tasks and deadlines in calendar or timeline views. See your workload at a glance and plan accordingly.",
      
    },
  ];

  return (
    <div className="homepage">
      <h1>Welcome to Tasknow</h1>
      <p>Your one-stop solution for effective task and time management.</p>
      <Link to="/login" className="start-button">Let's Start</Link>
      <div className="features-grid">
        {features.map((feature, index) => (
          <Link to={feature.link} key={index} className="feature-card">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </Link>
        ))}
      </div>
      <footer className="footer">
        <p>&copy; 2024 TaskNow. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/contacts">Contacts</Link> | <Link to="/terms-of-service">Terms of Service</Link> | <Link to="/feedback">Feedback</Link>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
