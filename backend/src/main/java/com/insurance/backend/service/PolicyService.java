package com.insurance.backend.service;

import com.insurance.backend.entity.Policy;
import com.insurance.backend.repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PolicyService {

    @Autowired
    private PolicyRepository policyRepository;

    public Policy savePolicy(Policy policy) {
        return policyRepository.save(policy);
    }

    public List<Policy> getAllPolicies() {
        return policyRepository.findAll();
    }

    public void deletePolicy(Long id) {
        policyRepository.deleteById(id);
    }
    public Policy updatePolicy(Long id, Policy updatedPolicy) {

    Policy policy = policyRepository.findById(id).orElseThrow();

    policy.setPolicyName(updatedPolicy.getPolicyName());
    policy.setPremiumAmount(updatedPolicy.getPremiumAmount());
    policy.setDuration(updatedPolicy.getDuration());

    return policyRepository.save(policy);
}
}