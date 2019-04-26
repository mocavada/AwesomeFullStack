package com.mocavada.busyqa.demo.jobbank;


import com.mocavada.busyqa.demo.jobbank.pojo.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/betty/jobs")
public class BettyJobBankController {

    @Autowired
    private BettyJobBankService bettyJobBankService;


    @GetMapping
    public List<Job> list() {
        return this.bettyJobBankService.bettyList();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public Job create(@RequestBody Job job) {
        return this.bettyJobBankService.bettyCreate(job);
    }

    @GetMapping("/{id}")
    public Job get(@PathVariable("id") Long id) {
        return this.bettyJobBankService.bettyListByID(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Job> update(@PathVariable("id") Long id, @RequestBody Job job) {
        return bettyJobBankService.bettyUpdate(id,job);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        return bettyJobBankService.bettyDelete(id);
    }


}
