import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/tag';
import { filter } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    { id: 0, name: "CRUD UI App", pictures: ["../../assets/CRUDUI.png"], projectLink: "https://github.com/Edriandp/CRUDUI-JavaFX", summary: "CRUD Desktop App that provides an intuitive interface to manage the records. It implements a text-to-voice feature for better accesability", description: "CRUD desktop App developed in java alongside hibernate to allow mapping of objects and an easy display of records. UI developed with JavaFX", tags: [Tag.JAVA, Tag.JAVAFX] },
    { id: 1, name: "Weather mobile App", pictures: ["../../assets/OpenWeather-MainScreen2.png","../../assets/OpenWeather-MainScreen.png", "../../assets/OpenWeather-Login.png","../../assets/OpenWeather-MainScreen3.png","../../assets/GoogleAPI.png","../../assets/OpenWeather-Preferences.png"], projectLink: "https://github.com/Edriandp/OpenWeatherAPI-App", summary: "Mobile app developed in Kotlin that tracks the Weather of a selected location usin OpenWeather API and Google's Voice to text API for accesibility.", description: "Mobile App developed with Kotlin, it uses OpenWeather API to track the weather of a selected location. It impletents a local database for authentification and preferences of the user. Makes use of Materal design Framework for a cleaner UI. For a deeper look in to the project you can check this youtube video https://www.youtube.com/watch?v=G2YDO8Mlf5s", tags: [Tag.KOTLIN] },
    { id: 2, name: "Personal Portfolio", pictures: ["../../assets/PersonalPortfolio1.png", "../../assets/PersonalPortfolio2.png", "../../assets/PersonalPortfolio3.png"], projectLink: "//www.github.com", summary: "Personal Portfolio developed with TypeScript and angular", description: "Personal portfolio developed with TypeScript and angular alongside bootStrap Framework", tags: [Tag.ANGULAR,Tag.TYPESCRIPT, Tag.BOOTSTRAP] },
  ];

  constructor() { }


  GetProjects() {
    return this.projects;
  }

  GetProjectByID(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project found with the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filtertags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filtertags.forEach(function (filterTag) {

        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }

        if (foundAll) {
          filteredProjects.push(project);
        }
      })

    });
    return filteredProjects;
  }

}
