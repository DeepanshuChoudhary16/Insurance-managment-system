package com.insurance.backend.controller;

import com.insurance.backend.entity.Policy;
import com.insurance.backend.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/policy")
@CrossOrigin("*")
public class PolicyController {

    @Autowired
    private PolicyService policyService;

    @PostMapping
    public Policy addPolicy(@RequestBody Policy policy) {
        return policyService.savePolicy(policy);
    }

    @GetMapping
    public List<Policy> getPolicies() {
        return policyService.getAllPolicies();
    }

    @DeleteMapping("/{id}")
    public String deletePolicy(@PathVariable Long id) {
        policyService.deletePolicy(id);
        return "Policy Deleted Successfully";
    }
    @PutMapping("/{id}")
public Policy updatePolicy(@PathVariable Long id,
                           @RequestBody Policy policy) {

    return policyService.updatePolicy(id, policy);
}
}