import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'demoPipe'
})
export class DemoPipe implements PipeTransform{
    // using in product cart to double price
    transform(value: any, exponent=1) {
        return Math.pow(value,exponent)
    }
       
}
