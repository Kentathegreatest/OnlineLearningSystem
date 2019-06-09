import React, { Component } from 'react';
import firebase, {auth, db} from "./firebase";
import CourseDetails from './CourseDetails'
import CourseListingsTable from './CourseListingsTable'
import TopicForm from './TopicForm'
import "./App.css"

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected_topic: null,
        selected_course: null,
        showCourseDetailsModal: false,
        coursesForTopic: [],
    };
  }

  showCourseDetails() {
    this.setState({showCourseDetailsModal: true});
  }

  hideCourseDetails() {
    this.setState({showCourseDetailsModal: false});
  }

  setSelectedTopic(topic) {
    //console.log("Catalog.setSelectedTopic() " + topic);
    this.getCoursesForTopic(topic);
    this.setState({
      selected_topic: topic,
      selected_course: null
    });
  }

  courseClickHandler(course) {
    this.setState({
      selected_course: course,
    })
    this.showCourseDetails();
  }

  getCoursesForTopic(topic) {
    let matchingCourses = [];

    if (topic==="art") {
      matchingCourses.push({
        class_id: "ART101",
        description: "This class teaches the basics of pencil drawing.",
        name: "ART 101",
        short_summary: "Introduction to Drawing",
        teacher: "John Artist",
        record_id: "ART101",
      });
    }
    else if (topic==="math") {
      matchingCourses.push({
        class_id: "MATH101",
        description: "This class teaches basic arithmetic",
        name: "MATH 101",
        short_summary: "Basic Arithmetic",
        teacher: "Joanne Mathe",
        record_id: "MATH101",
      },
     {
        class_id: "Honors Math",
        description: "This class teaches basic algebra",
        name: "Honors Math",
        short_summary: "Basic algebra",
        teacher: "Miya Algebra",
        record_id: "Honors Math",
      });
    }
       else if (topic==="pe") {
      matchingCourses.push({
        class_id: "P.E.101",
        description: "This class teaches the basics of running.",
        name: "P.E. 101",
        short_summary: "Introduction to running",
        teacher: "Hart Sweet",
        record_id: "P.E. 101",
      });
    }
    else if (topic==="Science") {
      matchingCourses.push({
        class_id: "Science101",
        description: "This class teaches basic science",
        name: "Science 101",
        short_summary: "Basic Science",
        teacher: "Kandy Sciene",
        record_id: "Science 101",
      }, 
      {
        class_id: "Honors Science",
        description: "This class teaches science terms, you need to know",
        name: "Science 201",
        short_summary: "Basic science terms",
        teacher: "Janall Terms",
        record_id: "Science201",
      });
    }
      else if (topic==="Social Studies") {
      matchingCourses.push({
        class_id: "Social Studies 101",
        description: "This class teaches basic geograghy",
        name: "Social Studies 101",
        short_summary: "Basic geography",
        teacher: "Jeffrey Geo",
        record_id: "Social Studies 101",
      }, 
      {
        class_id: "Honors Social Studies",
        description: "This class teaches basic history",
        name: " Honors Social Studies",
        short_summary: "Basic history",
        teacher: "Wevern Man",
        record_id: "Social Studies 201",
      });
    }
       else if (topic==="Video Game Design") {
      matchingCourses.push({
        class_id: "Video Game Design101",
        description: "This class teaches the basics developing a game.",
        name: "Video Game Design 101",
        short_summary: "Introduction to developing a game",
        teacher: "Julius Sallant",
        record_id: "Video Game Design101",
    });
     }
     else if (topic==="Probability and Statistics") {
      matchingCourses.push({
        class_id: "Probability and Statistics101",
        description: "This class teaches the basics probability and statistic.",
        name: " Probability and Statistics 101",
        short_summary: "Introduction to Probability and Statistics ",
        teacher: "Finn Stats",
        record_id: "Probability and Statistics101",
      });
     }
    else if (topic==="technology") {
      
    }
    else if (topic==="writing") {
      
    }
    else if (topic==="pe") {
    
   }
    else if (topic==="science") {
  
   }
    else if (topic==="video game design") {
       
   }
    else if (topic==="social studies") {

   }
    else if (topic==="proability and statistics") {
    
    this.setState({coursesForTopic: matchingCourses});}
  render() }
    return (
      <div className="catalog">
        <div className="page-banner"> Course Catalog </div>
        <TopicForm submitHandler={(topic) => this.setSelectedTopic(topic)}/>
        <CourseListingsTable coursesForTopic={this.state.coursesForTopic}
          courseClickHandler={(course) => this.courseClickHandler(course)}/>
        <CourseDetails
          getUser={()=>this.props.getUser()}
          selectedCourse={this.state.selected_course}
          showModal={this.state.showCourseDetailsModal}
          hideModalHandler={() => this.hideCourseDetails()}/>
      </div>
    );
  }
}

export default Catalog;
