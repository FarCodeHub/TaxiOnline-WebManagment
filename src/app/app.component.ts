import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .star {
    font-size: 1.5rem;
    color: #b0c4de;
  }
  .filled {
    color: #1e90ff;
  }
  .bad {
    color: #deb0b0;
  }
  .filled.bad {
    color: #ff1e1e;
  }
`]
})
export class AppComponent {
  title = 'FoladAdminPanel';
 

 
 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver) { }


}
