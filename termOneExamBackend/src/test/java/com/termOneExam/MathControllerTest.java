package com.termOneExam;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class MathControllerTest {
    @Autowired
    private TestRestTemplate restTemplate;

    private String apiPath = "/api/doMath";

    @Test
    public void doMath_success() {
        DoMathRequest requestBody = new DoMathRequest(10,10, "+");
        ResponseEntity<CalcResponse> response = this.restTemplate.postForEntity(apiPath, requestBody, CalcResponse.class);

        assertTrue(response.getStatusCode().is2xxSuccessful());
        assertEquals(20,response.getBody().getCalcResponse());

    }

}
