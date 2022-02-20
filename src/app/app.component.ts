import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fnBrowserDetect } from './helpers/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'newsletters';
  newsLetterForm: FormGroup;
  submitted = false;
  public browserInfo = [];
  constructor(private modalService: NgbModal, private fb: FormBuilder) {}

  ngOnInit(): void {
      this.buildForm();
  }

  buildForm() {
    this.newsLetterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]]
    });
  }
  get f() { return this.newsLetterForm.controls; }

  displayBrowserInfo(content) {
      this.modalService.open(content, { size: 'sm' });
      this.browserInfo = [
        {
          name: 'Browser Code Name',
          value: navigator.appCodeName 
        },
        {
          name: 'Browser Name',
          value: fnBrowserDetect() 
        },
        {
          name: 'Platform',
          value: navigator.platform
        },
        {
          name: 'Is Cookie Enabled',
          value: navigator.cookieEnabled
        },
        {
          name: 'Cookie',
          value: document.cookie
        }
      ];
  }

  signup() {
    this.submitted = true;
    if(this.newsLetterForm.valid) {
      this.newsLetterForm.reset();
      this.submitted = false;
    }
  }
  
}
