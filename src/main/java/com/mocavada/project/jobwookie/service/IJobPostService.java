package com.mocavada.project.jobwookie.service;

import com.mocavada.project.jobwookie.entity.JobPost;

import java.util.List;

public interface IJobPostService {
    void addJobPost(JobPost jobPost);
    List<JobPost> getAllJobPost();
    JobPost getJobPostById(long jobPostId);
    void deleteJobPost(int jobId);
    void updateJobPost(JobPost jobPost);
}
