package com.mocavada.busyqa.demo.jobbank;

import com.mocavada.busyqa.demo.jobbank.pojo.Job;
import com.mocavada.busyqa.demo.jobbank.pojo.JobCompany;
import com.mocavada.busyqa.demo.jobbank.pojo.JobType;
import com.mocavada.busyqa.demo.jobbank.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class BettyJobBankService {

    @Autowired
    private BettyJobCompanyRepository bettyJobCompanyRepository;

    @Autowired
    private BettyJobTypeRepository bettyJobTypeRepository;

    @Autowired
    private BettyJobRepository bettyJobRepository;

    @Autowired
    private JobPostUserRepository jobPostUserRepository;

    public BettyJobBankService() {
    }

    //GET LIST
    public List<Job> bettyList() {
        return this.bettyJobRepository.findAll();
    }

    //GET LIST BY ID
    public Job bettyListByID(Long id) {
        return this.bettyJobRepository.getOne(id);
    }

    //CREATE
    public Job bettyCreate(Job job) {
        JobCompany jobCompany = job.getJobCompany();
        JobType jobType = job.getJobType();

        if(jobCompany != null && jobCompany.getId() == 0) {
            job.setJobCompany(this.bettyJobCompanyRepository.save(jobCompany));
        }

        if(jobType != null) {
            job.setJobType(this.bettyJobTypeRepository.save(jobType));
        }

        this.bettyJobRepository.save(job);
        return job;
    }

    //UPDATE
    public ResponseEntity<Job> bettyUpdate(Long id, Job job) {
        JobCompany jobCompany = job.getJobCompany();

        final AtomicReference<JobCompany> reference = new AtomicReference<>(jobCompany);

        if(jobCompany != null) {
            bettyJobCompanyRepository.findById(jobCompany.getId()).map(record -> {
                    record.setCompanyName(jobCompany.getCompanyName());
                    record.setContractor(jobCompany.getContractor());
                    record.setEmail(jobCompany.getEmail());
                    record.setPhoneNumber(jobCompany.getPhoneNumber());
                    record.setSize(jobCompany.getSize());
                    reference.set(bettyJobCompanyRepository.save(record));
                    return null;
                }
            );
        }

        return bettyJobRepository.findById(id).map(recordUpdated -> {
           recordUpdated.setJobTitle(job.getJobTitle());
           recordUpdated.setJobDescription(job.getJobDescription());
           recordUpdated.setRequirement(job.getRequirement());
           recordUpdated.setLocation(job.getLocation());
           recordUpdated.setSalary(job.getSalary());
           recordUpdated.setPostDate(job.getPostDate());
           recordUpdated.setJobCompany(job.getJobCompany());
           recordUpdated.setJobType(job.getJobType());
           this.bettyJobRepository.save(recordUpdated);
           return ResponseEntity.ok().body(recordUpdated);
        }).orElse(ResponseEntity.notFound().build());
    }

    //DELETE
    public ResponseEntity<?> bettyDelete(Long id) {
        return bettyJobRepository.findById(id).map(record -> {
            bettyJobRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }

}
