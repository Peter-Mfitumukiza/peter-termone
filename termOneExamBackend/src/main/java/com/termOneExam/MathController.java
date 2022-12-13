package com.termOneExam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MathController {
    MathOperatorImpl mathOperator;
    @Autowired
    public MathController(MathOperatorImpl mathOperator){
        this.mathOperator = mathOperator;
    }
    @PostMapping("/api/doMath")
    public ResponseEntity<CalcResponse> doMath(@RequestBody DoMathRequest doMathRequest) throws InvalidOperationException {

        double result = this.mathOperator.doMath(doMathRequest.getOperand1(), doMathRequest.getOperand2(), doMathRequest.getOperation());
        CalcResponse myCalcResponse = new CalcResponse(result);
        return ResponseEntity.ok(myCalcResponse);
    }

}
