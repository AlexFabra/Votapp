import { Component, OnInit } from '@angular/core';
import { votingInfo } from 'src/app/interfaces/interfaces';
import { VotingService } from 'src/app/services/voting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  options: votingInfo[] = [];

  constructor(private votingService: VotingService) { }

  ngOnInit(): void {
    this.votingService.getOptions()
      .subscribe((docs: any) => {
        this.options = docs.docs;
        console.log(this.options)
      });
  }

  vote(id: string) {
    this.votingService.postVote(id)
      .subscribe((res: any) => {
        if (res.ok) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.msg,
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: res.msg,
            showConfirmButton: false,
            timer: 1500
          })
        }

      })
  }
}
