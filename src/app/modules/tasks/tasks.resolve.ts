import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { TasksService } from "../../shared/services/tasks/tasks.service";
import { ToastService } from "../../shared/services/toast/toast.service";
import { UsersService } from "../../shared/services/users/users.service";

@Injectable()
export class TasksResolve implements Resolve<any>{

    constructor(
        private tasksService: TasksService,
        private toastService: ToastService,
        private usersService: UsersService,
        private router: Router    
      ){ }

      resolve(route: ActivatedRouteSnapshot){
        return this.tasksService.getAll(this.usersService.logged)
        .catch(error => {
            this.toastService.toastTrigger({
              message: error.error.message,
              options: {type: 'error'}
            });
          this.router.navigate(['/main/tasks']);
          return Observable.of(null);
        });    
      }

}