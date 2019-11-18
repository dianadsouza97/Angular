import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls:['./course.component.css']
})
export class CourseComponent implements OnInit {
courses:any[];
private url="https://jsonplaceholder.typicode.com/posts";
//private url="http://localhost:2000/add/employee?name=diana&id=4";
  constructor(private http:Http) { 
    http.get(this.url)
    .subscribe(response=>{
      console.log(response);
      this.courses=response.json();
    })
  }

 createPost(input:HTMLInputElement){
    let course={title:input.value};
    input.value=''; 
    this.http.post(this.url,JSON.stringify(course))
    .subscribe(response=>{
      this.courses['id']=response.json().id;
      this.courses.splice(0,0,course);
    })
 }

  ngOnInit() {
  }

}
