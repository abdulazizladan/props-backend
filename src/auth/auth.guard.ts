import { CanActivate, Injectable, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

//@Injectable()
//export class AuthGuard implements CanActivate  {
    //canActivate(
    //    context: ExecutionContext,
    //): //boolean | Promise<boolean> | Observable<boolean> {
        //const request = context.switchToHttp().getRequest();
        //return validateRequest(request);
    //}
//}

//create injectable authguard that implements canactivate