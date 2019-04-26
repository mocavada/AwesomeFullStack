package com.mocavada.busyqa.demo.jobbank.repo;

import com.mocavada.busyqa.demo.jobbank.pojo.JobCompany;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobCompanyRepository extends PagingAndSortingRepository<JobCompany, Long> {
    JobCompany findFirst1ByCompanyName(String companyName);
    JobCompany findFirst1ById(String companyName);

    //ref: https://docs.spring.io/spring-data/jpa/docs/current/reference/html/
}

