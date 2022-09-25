import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public experienceData = [
    {
      companyName: 'Light & Wonder',
      title: 'Senior System Engineer',
      period: 'May 2021 - Present',
      responsibility: [
        "Worked with project managers, developers, quality assurance and customers to resolve technical issues.",
        "Trained and mentored peers in Angular and frontend practices and working to improve overall team performance.",
        "Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.",
        "Used understanding of Angular fundamentals to promote better practices increasing turnaround speed with 100% deadline adherence.",
        "Assessed UX and UI designs for technical feasibility.",
        "Decreased development time to 50% by overhauling the requirement.",
        "Remodeled the exciting architecture with the Angular workspace approach to handle complex scenarios.",
        "Revitalized flash application to angular web application"
      ],
      companyLinkedInUrl: 'https://www.linkedin.com/company/lightnwonderindia/about/'
    },
    {
      companyName: 'QBurst',
      title: 'Senior Engineer',
      period: 'December 2019 - May 2021',
      responsibility: [
        "Developed a prototype used to visualize different plans in a well-organized manner.",
        "Built a questionnaire wizard with distinguished animation.",
        "Balanced requirements, UX, and deadlines in order to get most of the business value in a limited time frame.",
        "Engaged In software maintenance across the application.",
        "Developed and implemented proactive maintenance practices.",
        "Trained and managed junior engineers.",
      ],
      companyLinkedInUrl: 'https://www.linkedin.com/company/qburst/about/'
    },
    {
      companyName: 'Infosys',
      title: 'Senior System Engineer',
      period: 'January 2017 - December 2019',
      responsibility: [
        "Implemented tracking and geo hierarchy from concept.",
        "Standardized all output with a new, responsive, mobile-first approach and strategy.",
        "Collaborated with team members to implement new feature developments.",
        "Coordinating with back-end developers for integrating API responses to front end."
      ],
      companyLinkedInUrl: 'https://www.linkedin.com/company/infosys/about/'
    }
  ];

  companyNames: any;

  selectedExperienceIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.getCompanyNames();
  }

  getCompanyNames() {
    this.companyNames = this.experienceData.map(data => data.companyName);
  }

}
