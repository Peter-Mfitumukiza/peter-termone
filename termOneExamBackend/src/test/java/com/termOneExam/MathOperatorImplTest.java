package com.termOneExam;

import static org.junit.jupiter.api.Assertions.*;

import lombok.SneakyThrows;
import org.junit.jupiter.api.Test;

public class MathOperatorImplTest {
    private MathOperator mathOperator = new MathOperatorImpl();

    @Test
    public void testMultiplication() throws InvalidOperationException {
        double operand1 = 10;
        double operand2 = 4;
        String operation = "*";
        double result = mathOperator.doMath(operand1, operand2, operation);
        assertEquals(40, result);
    }

    @Test
    public void testDivision() throws InvalidOperationException {
        double operand1 = 15;
        double operand2 = 3;
        String operation = "/";
        double expectedResult = 5;

        double result = mathOperator.doMath(operand1, operand2, operation);

        assertEquals(expectedResult, result);
    }
    @Test
    public void testDivisionByZero() {
        double operand1 = 15;
        double operand2 = 0;
        String operation = "/";

        assertThrows(InvalidOperationException.class, () -> {
            mathOperator.doMath(operand1, operand2, operation);
        });
    }

    @Test
    public void testSubtraction() throws InvalidOperationException {
        double operand1 = 20.0;
        double operand2 = 5.0;
        String operation = "-";

        double result = mathOperator.doMath(operand1, operand2, operation);
        assertEquals(15.0, result);
    }

    @Test
    public void testExponentiation() throws InvalidOperationException {
        double result = mathOperator.doMath(2, 2, "**");
        assertEquals(4, result);
    }

    @Test
    public void testLog() throws InvalidOperationException {
        MathOperatorImpl mathOperator = new MathOperatorImpl();
        double operand1 = 2;
        double operand2 = 8;
        String operation = "log";
        double expected = operand1 * Math.log10(operand2);

        double result = mathOperator.doMath(operand1, operand2, operation);

        assertEquals(expected, result);
    }

    @Test
    public void testNaturalLogarithm() throws InvalidOperationException {
        MathOperator mathOperator = new MathOperatorImpl();
        double operand1 = 9.0;
        double operand2 = 14.0;
        String operation = "ln";

        double expected = operand1 * Math.log(operand2);
        double actual = mathOperator.doMath(operand1, operand2, operation);

        assertEquals(expected, actual);
    }
}
