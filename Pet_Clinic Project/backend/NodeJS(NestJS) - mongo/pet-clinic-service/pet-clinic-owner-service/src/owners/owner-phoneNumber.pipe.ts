import { ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { Injectable, PipeTransform } from "@nestjs/common";
import { OwnerCreateDto } from "./dto/OwnerCreate.dto";

@Injectable()
export class OwnerPhoneNumberValidationPipe implements PipeTransform {

    
    transform(value: any, metadata: ArgumentMetadata) {
       
        console.log(value.phoneNumber.length)
        if(!(value.phoneNumber.length == 10)) {
            throw new BadRequestException(`${value.phoneNumber} is not a valid phoneNumber`)
        }
        return value;
    }
}