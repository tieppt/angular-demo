import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  imageUrls = [
    {
      name: 'f-crossed-design-dress',
      link: 'assets/shop/f-crossed-design-dress.jpg'
    },
    {
      name: 'f-fitted-textured-dress',
      link: 'assets/shop/f-fitted-textured-dress.jpg'
    },
    {
      name: 'f-neoprene-effect-dress',
      link: 'assets/shop/f-neoprene-effect-dress.jpg'
    },
    {
      name: 'f-printed-ruffle-dress',
      link: 'assets/shop/f-printed-ruffle-dress.jpg'
    },
    {
      name: 'm-message-cotton-t-shirt',
      link: 'assets/shop/m-message-cotton-t-shirt.jpg'
    },
    {
      name: 'm-regular-fit-chest-pocket-shirt',
      link: 'assets/shop/m-regular-fit-chest-pocket-shirt.jpg'
    },
    {
      name: 'm-regular-fit-printed-cotton-shirt',
      link: 'assets/shop/m-regular-fit-printed-cotton-shirt.jpg'
    },
    {
      name: 'm-striped-cotton-t-shirt',
      link: 'assets/shop/m-striped-cotton-t-shirt.jpg'
    }
  ];
  categories = ['male', 'shirt', 'female', 'dress'];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      categories: ['', [Validators.required]]
    });
  }
  onSubmit() {
    console.log(this.addForm);
  }
}
