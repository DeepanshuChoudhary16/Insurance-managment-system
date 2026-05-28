  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
import { PolicyService } from '../../services/policy';
  import { Policy } from '../../models/policy';

  @Component({
    selector: 'app-policy',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './policy.html',
    styleUrl: './policy.css'
  })
  export class PolicyComponent implements OnInit {

    policies: Policy[] = [];
    isEditMode = false;
    policy: Policy = {
      policyName: '',
      premiumAmount: 0,
      duration: 0
    };

    constructor(private policyService: PolicyService) {}

    ngOnInit(): void {
      this.getPolicies();
    }

 addPolicy() {

  if (this.isEditMode && this.policy.id) {

    this.policyService
      .updatePolicy(this.policy.id, this.policy)
      .subscribe(() => {

        this.getPolicies();

        this.resetForm();
      });

  } else {

    this.policyService
      .addPolicy(this.policy)
      .subscribe(() => {

        this.getPolicies();

        this.resetForm();
      });
  }
}
    getPolicies() {
      this.policyService.getPolicies().subscribe(data => {
        this.policies = data;
      });
    }
    deletePolicy(id: number) {
  this.policyService.deletePolicy(id).subscribe(() => {
    this.getPolicies();
  });
}
editPolicy(policy: Policy) {

  this.policy = { ...policy };

  this.isEditMode = true;
}
resetForm() {

  this.policy = {
    policyName: '',
    premiumAmount: 0,
    duration: 0
  };

  this.isEditMode = false;
}
  }