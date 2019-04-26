package com.mocavada.busyqa.demo.jobbank.repo;

import com.mocavada.busyqa.demo.jobbank.pojo.JobCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BettyJobCompanyRepository extends JpaRepository<JobCompany,Long> {
}
