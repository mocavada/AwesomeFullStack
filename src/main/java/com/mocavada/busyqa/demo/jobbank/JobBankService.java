package com.mocavada.busyqa.demo.jobbank;

import com.mocavada.busyqa.demo.jobbank.pojo.*;
import com.mocavada.busyqa.demo.jobbank.repo.JobCompanyRepository;
import com.mocavada.busyqa.demo.jobbank.repo.JobPostUserRepository;
import com.mocavada.busyqa.demo.jobbank.repo.JobRepository;
import com.mocavada.busyqa.demo.jobbank.repo.JobTypeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Service
public class JobBankService {
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private JobCompanyRepository jobCompanyRepository;
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private JobTypeRepository jobTypeRepository;

    @Autowired
    private JobPostUserRepository jobPostUserRepository;



    public JobBankService(JobCompanyRepository jbCompanyRepository,
                          JobRepository jobRepository,
                          JobTypeRepository jobTypeRepository,
                          JobPostUserRepository jobPostUserRepository
    ) {
        this.jobCompanyRepository = jbCompanyRepository;
        this.jobRepository = jobRepository;
        this.jobTypeRepository = jobTypeRepository;
        this.jobPostUserRepository = jobPostUserRepository;

        //INITIALIZE DUMMY DATA
        if (this.jobTypeRepository != null && !this.jobTypeRepository.findAll().iterator().hasNext()) {
            this.jobTypeRepository.saveAll(new ArrayList<JobType>() {
                {
                    add(new JobType(1, "Full-time"));
                    add(new JobType(2, "Contractor"));
                    add(new JobType(3, "Part-time"));
                    add(new JobType(4, "Seasonal"));
                    add(new JobType(5, "Temporary"));
                }
            });
        }

        if (this.jobPostUserRepository != null && !this.jobPostUserRepository.findAll().iterator().hasNext()) {
            this.jobPostUserRepository.saveAll(new ArrayList<JobPostUser>() {
                {
                    add(new JobPostUser("marc", "password"));
                    add(new JobPostUser("root", "M0c78922"));
                }
            });
        }
    }

    //CREATE JOB SERVICE
    public Job createJob(Job job) {
        JobCompany jobCompany = job.getJobCompany();
        JobType jobType = job.getJobType();

        if (jobCompany != null && jobCompany.getId() == 0) {
            JobCompany findFromDB = jobCompanyRepository.findFirst1ByCompanyName(jobCompany.getCompanyName());
            if (findFromDB == null) {
                findFromDB = jobCompanyRepository.save(jobCompany);
            }

            job.setJobCompany(jobCompanyRepository.save(findFromDB));
        }
        if (jobType != null && jobType.getId() == 0) {
            JobType findFromDB = jobTypeRepository.findFirst1ByJobTypeName(jobType.getJobTypeName());
            if (findFromDB == null) {
                findFromDB = jobTypeRepository.save(jobType);
            }
            job.setJobType(findFromDB);
        }
        System.out.println(job.getJobCompany().getId() + ":" + job.getJobType().getId());
        return this.jobRepository.save(job);
    }

    //GET
    public List<Job> getJobList() {
        List<Job> list = new ArrayList<>();
        jobRepository.findAll(new Sort(Sort.Direction.DESC, "postDate")).forEach(list::add);

        return list;
    }

    //DELETE SERVICE
    public void delete(Long id) {

        this.jobRepository.deleteById(id);
    }

    //GET COMPANY AS LIST SERVICE
    public List<JobCompany> getCompanyList() {
        List<JobCompany> list = new ArrayList<>();
        jobCompanyRepository.findAll().forEach(list::add);

        return list;
    }

    //GET JOB TYPE AS LIST SERVICE
    public List<JobType> getJobTypeList() {
        List<JobType> list = new ArrayList<>();
        jobTypeRepository.findAll().forEach(list::add);

        return list;
    }


    //UPDATE COMPANY BY TITLE SERVICE
    public Job updateJobByTitle(Job job) {
        Job jobFromDB = this.jobRepository.findFirst1ByJobTitle(job.getJobTitle());
        job.setId(jobFromDB.getId());
        return createJob(job);
    }

    //UPDATE COMPANY BY ID SERVICE
    public Job updateJobByID(Job job) {

        Job jobFromDB = this.jobRepository.findById(job.getId()).get();
        job.setId(jobFromDB.getId());
        return createJob(job);
    }

    //CREATE COMPANY SERVICE
    public JobCompany createCompany(JobCompany jobCompany) {

        return this.jobCompanyRepository.save(jobCompany);
    }

    //LOGIN SERVICE
    public JobLoginStatus login(JobPostUser jobPostUser, HttpSession session) {
        JobLoginStatus jobLoginStatus = new JobLoginStatus();

        if (session.getAttribute("id") != null &&
                session.getAttribute("login") != null &&
                (boolean) session.getAttribute("login")) {
            jobLoginStatus.setLogin(true);
            System.out.println("LOGIN already");
        } else {
            System.out.println("Not Login Yet");

            if (jobPostUserRepository.findFirst1ByUserNameAndPassword(jobPostUser.getUserName(), jobPostUser.getPassword()) != null) {
                session.setAttribute("id", session.getId());
                session.setAttribute("login", true);
                jobLoginStatus.setLogin(true);
                System.out.println(" LOGIN");
            } else {
                session.setAttribute("login", false);
                jobLoginStatus.setLogin(false);
                System.out.println(" LOGIN FAIL: username & password not match");
            }
        }

        return jobLoginStatus;
    }


    //CHECKIN LOGIN STATUS
    public JobLoginStatus checkLoginSessionStatus(HttpSession session) {
        JobLoginStatus jobLoginStatus = new JobLoginStatus();

        if (session.getAttribute("id") != null && session.getAttribute("login") != null && (boolean) session.getAttribute("login")) {
            jobLoginStatus.setLogin(true);
        } else {
            jobLoginStatus.setLogin(false);
        }
        return jobLoginStatus;

    }
}


//    public Job updateJob(Job job) {
//        JobCompany jobCompany = job.getJobCompany();
//        JobType jobType = job.getJobType();
//
//        if (jobCompany != null && jobCompany.getId() == 0) {
//            JobCompany findFromDB = jbCompanyRepository.findFirst1ByCompanyName(jobCompany.getCompanyName());
//            if (findFromDB == null) {
//                findFromDB = jbCompanyRepository.save(jobCompany);
//            }
//
//            job.setJobCompany(jbCompanyRepository.save(findFromDB));
//        }
//        if (jobType != null && jobType.getId() == 0) {
//            JobType findFromDB = jobTypeRepository.findFirst1ByJobTypeName(jobType.getJobTypeName());
//            if (findFromDB == null) {
//                findFromDB = jobTypeRepository.save(jobType);
//            }
//            job.setJobType(findFromDB);
//        }
////        System.out.println(job.getJobCompany().getId() + ":" + job.getJobType().getId());
//
//
//
//        return this.jobRepository.save(job);
//    }
