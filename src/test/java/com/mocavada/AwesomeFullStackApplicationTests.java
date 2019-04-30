package com.mocavada;

import static org.junit.Assert.assertEquals;

import com.mocavada.config.auth.TonyUserPrincipal;
import com.mocavada.project.tonysecurity.model.AuthGroup;
import com.mocavada.project.tonysecurity.model.User;
import com.mocavada.project.tonysecurity.repository.AuthGroupRepository;
import com.mocavada.project.tonysecurity.repository.UserRepository;
import com.mocavada.project.tonysecurity.service.TonyUserDetailsService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AwesomeFullStackApplicationTests {

	@LocalServerPort
	private int port;

	@Autowired
	TonyUserDetailsService userDetailsService;

	@Autowired
	UserRepository userRepository;

	@Autowired
	AuthGroupRepository authGroupRepository;

	@Test
	public void homePageProtected() {
		ResponseEntity<String> response = new TestRestTemplate().getForEntity("http://localhost:" + port + "/", String.class);
		assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
	}




	@Test
	public void testLoadUserName() {

		this.userDetailsService.loadUserByUsername("marc");

		System.out.println(userDetailsService);



	}



}
