package com.mocavada.busyqa.demo.jobbank.repo;

import com.mocavada.busyqa.demo.jobbank.pojo.JobType;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobTypeRepository extends PagingAndSortingRepository<JobType, Long> {

    JobType findFirst1ByJobTypeName(String jobTypeName);


}

