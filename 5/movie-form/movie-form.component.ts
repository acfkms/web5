import { Component } from '@angular/core';
@Component({ selector: 'app-movie-form', templateUrl: './movie-form.component.html', styleUrls: ['./movie-form.component.css'] }) export class MovieFormComponent {
this.submitted = true;
if (form.invalid) {
  return;
}
this.movies.push({ ...this.newMovie });
form.resetForm();
this.newMovie = {
  title: '',
  director: '',
  description: ''
};
this.submitted = false;
} }