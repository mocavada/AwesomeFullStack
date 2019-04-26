package com.mocavada.busyqa.demo.guestbook;

import com.mocavada.busyqa.demo.guestbook.pojo.GuestBook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GuestBookController {
    @Autowired
    private GuestBookService guestbookService;

    //========
    @RequestMapping(method = RequestMethod.GET, value = "/messages")
    public List<GuestBook> listAllAndSort() {

        return this.guestbookService.getMessageList();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/message")
//    produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE
    @ResponseStatus(HttpStatus.CREATED)
    public @ResponseBody
    List<GuestBook> createJob(@RequestBody GuestBook msg) {
        GuestBook newMsg = this.guestbookService.postMessage(msg);
        return this.guestbookService.getMessageList();
    }
}
