import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume-page.html',
    styleUrls: ['./resume-page.scss']
})

export class ResumeComponent implements OnInit{
    constructor() {
        
    }
    ngOnInit() {
        console.log('application initialed');
    }
}