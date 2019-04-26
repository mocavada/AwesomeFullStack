package com.mocavada.project.jobwookie.repository;

import com.mocavada.project.jobwookie.entity.JobPost;

import java.util.List;

public interface IJobPostRepository {
    List<JobPost> getAllJobPost();
    void addJobPost(JobPost jobPost);
    JobPost getJobPostById(long jobPostId);
    void updateJobPost(JobPost jobPost);
    void deleteJobPost(int postId);
}
