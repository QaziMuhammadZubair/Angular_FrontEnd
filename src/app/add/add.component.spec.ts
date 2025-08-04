import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

fdescribe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [AddComponent],
    });
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call CreateNewAnime on submit', () => {
    spyOn(component._shared, 'CreateNewAnime').and.callThrough();
    component.anime = {
      id: 1215,
      name: 'Test Anime',
      scope: 1,
      img: 'Test Description',
    };
    component.AddAnmine();
    expect(component._shared.CreateNewAnime).toHaveBeenCalledWith(
      component.anime
    );
  });
});
