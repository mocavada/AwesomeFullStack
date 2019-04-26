package com.mocavada.busyqa.demo.guestbook.pojo;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "BQA.GuestBook")
public class GuestBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String userName;

    private String email;

    private String messageContent;

//    @Basic(optional = false)
//    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "past_date", insertable = false, updatable = false,
            columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date postDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessageContent() {
        return messageContent;
    }

    public void setMessageContent(String messageContent) {
        this.messageContent = messageContent;
    }

    public Date getPostDate() {
        return postDate;
    }

    public void setPostDate(Date postDate) {
        this.postDate = postDate;
    }

    public GuestBook(String userName, String email, String messageContent) {
        this.userName = userName;
        this.email = email;
        this.messageContent = messageContent;
    }

    public GuestBook() {
    }

    @Override
    public String toString() {
        return this.userName + ":" + this.messageContent+ ":" + this.postDate;
    }
}
