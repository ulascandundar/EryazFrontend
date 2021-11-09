import { UserProfile } from './../models/userProfile';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendsFilter'
})
export class FriendsFilterPipe implements PipeTransform {

  transform(value: UserProfile[], filterText: string): UserProfile[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((p:UserProfile)=>p.firstName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}