import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListComponent],
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call GetListAnime on ngOnInit', () => {
    spyOn(component._shared, 'GetListAnime').and.callThrough();
    component.ngOnInit();
    expect(component._shared.GetListAnime).toHaveBeenCalled();
  });

  it('should delete an anime and refresh the list', () => {
    spyOn(component._shared, 'Delete').and.callThrough();
    spyOn(component, 'ngOnInit').and.callThrough();
    const id = 1; // Example ID
    component.delete(id);
    expect(component._shared.Delete).toHaveBeenCalledWith(id);
    // expect(component.ngOnInit).toHaveBeenCalled();
  });
});
