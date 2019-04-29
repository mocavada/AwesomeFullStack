package com.mocavada;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AwesomeFullStackApplicationTests {

	@LocalServerPort
	private int port;

	@Test
	public void homePageProtected() {
		ResponseEntity<String> response = new TestRestTemplate().getForEntity("http://localhost:" + port + "/", String.class);
		assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
	}
}
