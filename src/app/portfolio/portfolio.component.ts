import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  projects = {} as Project[];

  typeScript = false;
  angular = false;
  java = false;
  kotlin = false;
  Spring = false;
  javascript = false;
  python = false;


  filtering = false;
  isCollapsed: boolean = true;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Edrian Díaz - Portfolio')
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {

    if (this.python || this.angular || this.java || this.kotlin || this.Spring || this.javascript || this.typeScript){
      this.filtering = true;
    }
      else {
        this.filtering = false;
      }
    
    let filtertags: Tag[] = [];

    if (this.typeScript) {
      filtertags.push(Tag.TYPESCRIPT);
    }

    if (this.angular) {
      filtertags.push(Tag.ANGULAR);
    }
    if (this.java) {
      filtertags.push(Tag.JAVA);
    }
    if (this.angular) {
      filtertags.push(Tag.JAVASCRIPT);
    }
    if (this.angular) {
      filtertags.push(Tag.KOTLIN);
    }
    if (this.angular) {
      filtertags.push(Tag.PYTHON);
    }
    if (this.angular) {
      filtertags.push(Tag.SPRING);
    }

    this.projects = this.projectService.GetProjectsByFilter(filtertags);
  }

  Reset() {
    this.typeScript = false;
    this.angular = false;
    this.java = false;
    this.kotlin = false;
    this.Spring = false;
    this.javascript = false;
    this.python = false;

    this.projects = this.projectService.GetProjects();
    this.filtering= false;
  }

}
