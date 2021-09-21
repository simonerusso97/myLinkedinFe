import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/post';
import {PostService} from '../../services/post.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {Admin} from '../../model/admin';
import {Offeror} from '../../model/offeror';

@Component({
  selector: 'app-post-visibility',
  templateUrl: './post-visibility.component.html',
  styleUrls: ['./post-visibility.component.scss']
})
export class PostVisibilityComponent implements OnInit {

  postList: Post[] = [];
  showingPostList: Post[] = [];
  postRadioList: Post[] = [];
  user: Admin = {} as Admin;
  constructor(private postService: PostService, private toastr: ToastrService, private routes: Router) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('admin') === null){
      this.routes.navigateByUrl('/login');
    }
    else {
      sessionStorage.setItem('selected', '2');
      this.postService.getAllPost('admin').subscribe(
        response => {
          this.postList = response;
          this.showingPostList = this.postList;
          this.postRadioList = this.postList;
        },
        error => {
          this.toastr.error('Si è verificato un errore. Prova a ricaricare la pagina \n' + error.message);
        });
    }
  }

  hideShow(post: Post): void {
    post.hide = !post.hide;
    this.postService.changePostVisibility(post).subscribe(
      () => {
        this.toastr.success('Operazione completata');
      },
      error => {
        post.hide = !post.hide;
        this.toastr.error('Operazione fallita\n' + error);
      });

  }

  searchPost(value: string): void{
    this.showingPostList = [];
    if (value === ''){
      this.showingPostList = this.postRadioList;
    }
    this.postRadioList.forEach(item => {

      let s: string;
      if (item.createdBy.type === 'offeror'){
        s = (item.name + ' ' + (item.createdBy as Offeror).company + ' ' + item.createdBy.name + ' ' + item.createdBy.surname);
      }
      else {
        s = (item.name + ' ' + item.createdBy.name + ' ' + item.createdBy.surname);
      }
      if ((s).toUpperCase().includes(value.toUpperCase())) {
        this.showingPostList.unshift(item);
      }
    });
  }

  changeList(id: string, userToSearch: HTMLInputElement): void {
    this.showingPostList = [];

    if (id === 'allPostRadio'){
      this.postRadioList = [];
      this.postRadioList = this.postList;
    }
    if (id === 'hiddenPostRadio') {
      this.postRadioList = [];
      this.postList.forEach(item => {
        if (item.hide){
          this.postRadioList.unshift(item);
        }
      });
    }
    if (id === 'notHiddenPostRadio') {
      this.postRadioList = [];
      this.postList.forEach(item => {
        if (!item.hide){
          this.postRadioList.unshift(item);
        }
      });
    }
    userToSearch.value = '';
    this.showingPostList = this.postRadioList;
  }

}
