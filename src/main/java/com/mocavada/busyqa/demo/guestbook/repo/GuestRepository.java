package com.mocavada.busyqa.demo.guestbook.repo;

import com.mocavada.busyqa.demo.guestbook.pojo.GuestBook;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuestRepository extends PagingAndSortingRepository<GuestBook, Integer> {

}

