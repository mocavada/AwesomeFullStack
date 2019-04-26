package com.mocavada.busyqa.demo.jobbank.repo;

import com.mocavada.busyqa.demo.jobbank.pojo.Job;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface JobRepository extends PagingAndSortingRepository<Job, Long> {
    Job findFirst1ByJobTitle(String jobTitle);

}

