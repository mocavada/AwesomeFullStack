package com.mocavada.busyqa.demo.guestbook;


import com.mocavada.busyqa.demo.guestbook.pojo.GuestBook;
import com.mocavada.busyqa.demo.guestbook.repo.GuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GuestBookService {
    @Autowired
    private GuestRepository guestRepository;

    public GuestBookService(GuestRepository guestRepository) {

        this.guestRepository = guestRepository;
    }

    //CREATE
    public GuestBook postMessage(GuestBook guestBook) {
        return this.guestRepository.save(guestBook);
    }

    //READ
    public List<GuestBook> getMessageList() {
        List<GuestBook> list = new ArrayList<>();
        guestRepository.findAll(new Sort(Sort.Direction.DESC, "postDate")).forEach(list::add);

        return list;
    }
}
