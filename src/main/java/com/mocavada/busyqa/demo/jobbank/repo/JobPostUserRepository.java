package com.mocavada.busyqa.demo.jobbank.repo;

import com.mocavada.busyqa.demo.jobbank.pojo.JobPostUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobPostUserRepository extends JpaRepository<JobPostUser, Long> {
    //    @Query("SELECT t FROM Todo t where t.title = ?1 AND t.description = ?2")
    JobPostUser findFirst1ByUserNameAndPassword(String userName, String password);

    //ref: https://docs.spring.io/spring-data/jpa/docs/current/reference/html/
}

