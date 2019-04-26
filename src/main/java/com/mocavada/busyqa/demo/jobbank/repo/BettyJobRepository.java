package com.mocavada.busyqa.demo.jobbank.repo;

import com.mocavada.busyqa.demo.jobbank.pojo.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BettyJobRepository extends JpaRepository<Job, Long> {
}
