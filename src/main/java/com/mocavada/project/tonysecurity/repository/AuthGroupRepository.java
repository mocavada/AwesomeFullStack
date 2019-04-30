package com.mocavada.project.tonysecurity.repository;

import com.mocavada.project.tonysecurity.model.AuthGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Entity;
import java.util.List;

@Repository
public interface AuthGroupRepository extends JpaRepository<AuthGroup, Long> {

    List<AuthGroup> findByUsername(String username);
}
