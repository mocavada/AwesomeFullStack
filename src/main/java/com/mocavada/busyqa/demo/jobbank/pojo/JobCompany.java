package com.mocavada.busyqa.demo.jobbank.pojo;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "BQA.JobCompany")
// @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class JobCompany {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private long id;

    //  @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "companyName")
    //  @Column(name = "companyName", unique = true)
    private String companyName;

    private String contractor;

    private String email;

    private String phoneNumber;

    private int size;

    @OneToMany(cascade = CascadeType.ALL)//(mappedBy = "jobCompany", fetch = FetchType.EAGER)
    @JsonBackReference
    private List<Job> jobs;


    public JobCompany() {
    }

    public JobCompany(String companyName) {
        this.companyName = companyName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getContractor() {
        return contractor;
    }

    public void setContractor(String contractor) {
        this.contractor = contractor;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public List<Job> getJobs() {
        return jobs;
    }

    public void setJobs(List<Job> jobs) {
        this.jobs = jobs;
    }
}
