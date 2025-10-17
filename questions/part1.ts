import type { Question } from '../types';

export const QUESTIONS_PART_1: Question[] = [
    {
      "id": 1,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Percentages",
      "question_text": "A store sells a shirt for $40 after a 20% discount. What was the original price of the shirt?",
      "options": [
        {"option": "A", "text": "$32"},
        {"option": "B", "text": "$48"},
        {"option": "C", "text": "$50"},
        {"option": "D", "text": "$60"},
        {"option": "E", "text": "$8"}
      ],
      "correct_answer": "C",
      "explanation": "Let the original price be <i>x</i>. A 20% discount means the shirt was sold for 80% of its original price. So, 0.80<i>x</i> = $40. To find the original price, divide the sale price by 0.80: <i>x</i> = $40 / 0.80 = $50."
    },
    {
      "id": 2,
      "question_type": "Data Sufficiency",
      "difficulty": "Easy",
      "field_of_math": "Number Properties",
      "question_text": "Is the integer <i>n</i> odd?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>n</i> is the square of an integer.",
        "2": "<i>n</i>-1 is divisible by 2."
      },
      "correct_answer": "B",
      "explanation": "Statement (1) is insufficient. If <i>n</i> is the square of an integer, it could be 2<sup>2</sup> = 4 (even) or 3<sup>2</sup> = 9 (odd). Statement (2) is sufficient. If <i>n</i>-1 is divisible by 2, it means <i>n</i>-1 is an even number. An even number plus 1 is always an odd number, so <i>n</i> must be odd."
    },
    {
      "id": 3,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Algebra",
      "question_text": "If 3<i>x</i> + 7 = 2<i>x</i> - 5, what is the value of <i>x</i>?",
      "options": [
        {"option": "A", "text": "12"},
        {"option": "B", "text": "-12"},
        {"option": "C", "text": "2"},
        {"option": "D", "text": "-2"},
        {"option": "E", "text": "1/5"}
      ],
      "correct_answer": "B",
      "explanation": "To solve for <i>x</i>, we need to isolate the variable. Subtract 2<i>x</i> from both sides of the equation: 3<i>x</i> - 2<i>x</i> + 7 = -5, which simplifies to <i>x</i> + 7 = -5. Then, subtract 7 from both sides: <i>x</i> = -5 - 7, so <i>x</i> = -12."
    },
    {
      "id": 4,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Geometry",
      "question_text": "A circular garden has a radius of 10 meters. What is its area in square meters?",
      "options": [
        {"option": "A", "text": "10&pi;"},
        {"option": "B", "text": "20&pi;"},
        {"option": "C", "text": "50&pi;"},
        {"option": "D", "text": "100&pi;"},
        {"option": "E", "text": "200&pi;"}
      ],
      "correct_answer": "D",
      "explanation": "The formula for the area of a circle is A = &pi;r<sup>2</sup>, where <i>r</i> is the radius. Given that the radius is 10 meters, we substitute it into the formula: A = &pi;(10)<sup>2</sup> = 100&pi; square meters."
    },
    {
      "id": 5,
      "question_type": "Data Sufficiency",
      "difficulty": "Easy",
      "field_of_math": "Statistics",
      "question_text": "What is the average (arithmetic mean) of the set S = {a, b, c, d}?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "The sum of a and b is 10.",
        "2": "The sum of c and d is 14."
      },
      "correct_answer": "C",
      "explanation": "The average of the set is <sup>(a+b+c+d)</sup>/<sub>4</sub>. Statement (1) gives a+b=10, but provides no information about c and d. Insufficient. Statement (2) gives c+d=14, but provides no information about a and b. Insufficient. Combining both statements, the sum of all elements is (a+b) + (c+d) = 10 + 14 = 24. The average is <sup>24</sup>/<sub>4</sub> = 6. Sufficient."
    },
    {
      "id": 6,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Work Rate",
      "question_text": "Machine A produces 120 widgets in 40 minutes. Machine B produces 100 widgets in 20 minutes. If both machines run simultaneously, how many minutes will it take them to produce a total of 400 widgets?",
      "options": [
        {"option": "A", "text": "40"},
        {"option": "B", "text": "50"},
        {"option": "C", "text": "60"},
        {"option": "D", "text": "70"},
        {"option": "E", "text": "80"}
      ],
      "correct_answer": "B",
      "explanation": "First, find the rate of each machine. Rate of Machine A = 120 / 40 = 3 widgets per minute. Rate of Machine B = 100 / 20 = 5 widgets per minute. Their combined rate is 3 + 5 = 8 widgets per minute. The time to produce 400 widgets is Total Work / Combined Rate = 400 / 8 = 50 minutes."
    },
    {
      "id": 7,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Number Properties",
      "question_text": "What is the units digit of 7<sup>35</sup>?",
      "options": [
        {"option": "A", "text": "1"},
        {"option": "B", "text": "3"},
        {"option": "C", "text": "5"},
        {"option": "D", "text": "7"},
        {"option": "E", "text": "9"}
      ],
      "correct_answer": "B",
      "explanation": "The units digits of powers of 7 follow a cycle: 7<sup>1</sup> = 7, 7<sup>2</sup> ends in 9, 7<sup>3</sup> ends in 3, 7<sup>4</sup> ends in 1. The cycle is (7, 9, 3, 1) and has a length of 4. To find the units digit of 7<sup>35</sup>, we find the remainder of 35 &div; 4, which is 3. The third digit in the cycle is 3."
    },
    {
      "id": 8,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Inequalities",
      "question_text": "Is <i>x</i> > <i>y</i>?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i> - <i>y</i> > -2",
        "2": "<i>x</i> - <i>y</i> < 2"
      },
      "correct_answer": "E",
      "explanation": "We need to determine if <i>x</i>-<i>y</i> is positive. Statement (1) says <i>x</i> - <i>y</i> > -2. This means <i>x</i>-<i>y</i> could be 1 (so <i>x</i> > <i>y</i>) or -1 (so <i>x</i> < <i>y</i>). Insufficient. Statement (2) says <i>x</i> - <i>y</i> < 2. This also means <i>x</i>-<i>y</i> could be 1 or -1. Insufficient. Combining both, we have -2 < <i>x</i> - <i>y</i> < 2. The value of <i>x</i>-<i>y</i> can still be positive, negative, or zero. Insufficient."
    },
    {
      "id": 9,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Geometry",
      "question_text": "The lengths of two sides of a right triangle are 5 and 12. Which of the following could be the length of the third side? I. 7, II. &radic;119, III. 13",
      "options": [
        {"option": "A", "text": "I only"},
        {"option": "B", "text": "III only"},
        {"option": "C", "text": "I and II only"},
        {"option": "D", "text": "II and III only"},
        {"option": "E", "text": "I, II, and III"}
      ],
      "correct_answer": "D",
      "explanation": "There are two possibilities. Case 1: 5 and 12 are the legs. The hypotenuse is &radic;<span style='text-decoration: overline'>5<sup>2</sup> + 12<sup>2</sup></span> = &radic;<span style='text-decoration: overline'>25 + 144</span> = &radic;169 = 13. So III is possible. Case 2: 12 is the hypotenuse and 5 is a leg. The other leg is &radic;<span style='text-decoration: overline'>12<sup>2</sup> - 5<sup>2</sup></span> = &radic;<span style='text-decoration: overline'>144 - 25</span> = &radic;119. So II is possible. Therefore, the possible lengths are &radic;119 and 13."
    },
    {
      "id": 10,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Probability",
      "question_text": "A bag contains 5 red balls, 4 blue balls, and 3 green balls. If one ball is drawn at random, what is the probability that it is not blue?",
      "options": [
        {"option": "A", "text": "<sup>1</sup>/<sub>4</sub>"},
        {"option": "B", "text": "<sup>1</sup>/<sub>3</sub>"},
        {"option": "C", "text": "<sup>1</sup>/<sub>2</sub>"},
        {"option": "D", "text": "<sup>2</sup>/<sub>3</sub>"},
        {"option": "E", "text": "<sup>3</sup>/<sub>4</sub>"}
      ],
      "correct_answer": "D",
      "explanation": "The total number of balls is 5 + 4 + 3 = 12. The number of balls that are not blue is the sum of red and green balls, which is 5 + 3 = 8. The probability of drawing a ball that is not blue is the number of favorable outcomes divided by the total number of outcomes: P(not blue) = <sup>8</sup>/<sub>12</sub> = <sup>2</sup>/<sub>3</sub>."
    },
    {
      "id": 11,
      "question_type": "Data Sufficiency",
      "difficulty": "Hard",
      "field_of_math": "Coordinate Geometry",
      "question_text": "In the xy-plane, does the circle with center (a, b) and radius r contain the origin (0,0)?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "a<sup>2</sup> + b<sup>2</sup> = 2r<sup>2</sup>",
        "2": "r = 5"
      },
      "correct_answer": "A",
      "explanation": "The origin is inside the circle if its distance from the center is less than or equal to the radius. The distance is &radic;<span style='text-decoration: overline'>a<sup>2</sup> + b<sup>2</sup></span>. So, the question is: Is &radic;<span style='text-decoration: overline'>a<sup>2</sup> + b<sup>2</sup></span> &le; r, or a<sup>2</sup> + b<sup>2</sup> &le; r<sup>2</sup>? Statement (1) says a<sup>2</sup> + b<sup>2</sup> = 2r<sup>2</sup>. Since r > 0, we know 2r<sup>2</sup> > r<sup>2</sup>. Thus a<sup>2</sup> + b<sup>2</sup> > r<sup>2</sup>, which means the origin is outside the circle. This gives a definitive 'No'. Sufficient. Statement (2) only gives the radius and provides no information about the center. Insufficient."
    },
    {
      "id": 12,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Functions",
      "question_text": "If <i>f(x)</i> = <i>x</i><sup>2</sup> - 3<i>x</i> + 4, what is the value of <i>f(f(1))</i>?",
      "options": [
        {"option": "A", "text": "1"},
        {"option": "B", "text": "2"},
        {"option": "C", "text": "3"},
        {"option": "D", "text": "4"},
        {"option": "E", "text": "8"}
      ],
      "correct_answer": "B",
      "explanation": "First, evaluate the inner function, <i>f(1)</i>. <i>f(1)</i> = (1)<sup>2</sup> - 3(1) + 4 = 1 - 3 + 4 = 2. Now, substitute this result back into the function: <i>f(f(1))</i> = <i>f(2)</i>. Then, evaluate <i>f(2)</i> = (2)<sup>2</sup> - 3(2) + 4 = 4 - 6 + 4 = 2."
    },
    {
      "id": 13,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Statistics",
      "question_text": "The average (arithmetic mean) of 5 numbers is 12. If one of the numbers is removed, the average of the remaining 4 numbers is 11. What is the value of the number that was removed?",
      "options": [
        {"option": "A", "text": "1"},
        {"option": "B", "text": "10"},
        {"option": "C", "text": "11.5"},
        {"option": "D", "text": "15"},
        {"option": "E", "text": "16"}
      ],
      "correct_answer": "E",
      "explanation": "The sum of a set of numbers is their average multiplied by the quantity of numbers. The initial sum of the 5 numbers is 5 &times; 12 = 60. The sum of the remaining 4 numbers is 4 &times; 11 = 44. The value of the removed number is the difference between these two sums: 60 - 44 = 16."
    },
    {
      "id": 14,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Percentages",
      "question_text": "Last year, a company had a total revenue of R dollars and total costs of C dollars. What was the company's profit?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "Last year, the company's revenue was 20% greater than its costs.",
        "2": "Last year, the company's revenue was $1,200,000."
      },
      "correct_answer": "C",
      "explanation": "Profit = R - C. Statement (1) gives R = 1.2C, so Profit = 0.2C. Insufficient. Statement (2) gives R but not C. Insufficient. Together, we can substitute: 1,200,000 = 1.2C, so C = 1,000,000. Profit = 1,200,000 - 1,000,000 = 200,000. Sufficient."
    },
    {
      "id": 15,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Coordinate Geometry",
      "question_text": "What is the slope of the line that passes through the points (-2, 5) and (3, -5)?",
      "options": [
        {"option": "A", "text": "-2"},
        {"option": "B", "text": "-<sup>1</sup>/<sub>2</sub>"},
        {"option": "C", "text": "0"},
        {"option": "D", "text": "<sup>1</sup>/<sub>2</sub>"},
        {"option": "E", "text": "2"}
      ],
      "correct_answer": "A",
      "explanation": "The slope of a line passing through two points (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) and (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>) is given by the formula <i>m</i> = <sup>(<i>y</i><sub>2</sub> - <i>y</i><sub>1</sub>)</sup>/<sub>(<i>x</i><sub>2</sub> - <i>x</i><sub>1</sub>)</sub>. Using the given points, <i>m</i> = <sup>(-5 - 5)</sup>/<sub>(3 - (-2))</sub> = <sup>-10</sup>/<sub>(3 + 2)</sub> = <sup>-10</sup>/<sub>5</sub> = -2."
    },
    {
      "id": 16,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Ratios",
      "question_text": "The ratio of boys to girls in a class is 3 to 5. If there are 32 students in the class, how many girls are there?",
      "options": [
        {"option": "A", "text": "10"},
        {"option": "B", "text": "12"},
        {"option": "C", "text": "15"},
        {"option": "D", "text": "18"},
        {"option": "E", "text": "20"}
      ],
      "correct_answer": "E",
      "explanation": "The ratio 3:5 means there are 3+5=8 total parts. The value of one part is the total number of students divided by the total parts: 32 / 8 = 4. The number of girls corresponds to 5 parts, so the number of girls is 5 &times; 4 = 20."
    },
    {
      "id": 17,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Number Properties",
      "question_text": "If <i>x</i> and <i>y</i> are positive integers, is <i>xy</i> divisible by 6?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i> is a multiple of 2.",
        "2": "<i>y</i> is a multiple of 3."
      },
      "correct_answer": "C",
      "explanation": "To be divisible by 6, a number must be divisible by both 2 and 3. Statement (1) guarantees divisibility by 2 but not 3. Insufficient. Statement (2) guarantees divisibility by 3 but not 2. Insufficient. Combining both statements, we know <i>x</i> contains a factor of 2, and <i>y</i> contains a factor of 3. Therefore, the product <i>xy</i> must contain factors of 2 and 3, making it divisible by 6. Sufficient."
    },
    {
      "id": 18,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Absolute Value",
      "question_text": "If |2<i>x</i> - 5| = 9, which of the following could be the value of <i>x</i>?",
      "options": [
        {"option": "A", "text": "-7"},
        {"option": "B", "text": "-4"},
        {"option": "C", "text": "2"},
        {"option": "D", "text": "4"},
        {"option": "E", "text": "7"}
      ],
      "correct_answer": "E",
      "explanation": "The absolute value equation implies two possibilities. Case 1: 2<i>x</i> - 5 = 9. This gives 2<i>x</i> = 14, so <i>x</i> = 7. Case 2: 2<i>x</i> - 5 = -9. This gives 2<i>x</i> = -4, so <i>x</i> = -2. The possible values for <i>x</i> are 7 and -2. Of the choices given, 7 is an option."
    },
    {
      "id": 19,
      "question_type": "Data Sufficiency",
      "difficulty": "Easy",
      "field_of_math": "Algebraic Manipulation",
      "question_text": "What is the value of <i>x</i><sup>2</sup> - <i>y</i><sup>2</sup>?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i> - <i>y</i> = 2",
        "2": "<i>x</i> + <i>y</i> = 8"
      },
      "correct_answer": "C",
      "explanation": "The expression <i>x</i><sup>2</sup> - <i>y</i><sup>2</sup> is a difference of squares, which factors to (<i>x</i>-<i>y</i>)(<i>x</i>+<i>y</i>). Statement (1) provides the value of (<i>x</i>-<i>y</i>) but not (<i>x</i>+<i>y</i>). Insufficient. Statement (2) provides the value of (<i>x</i>+<i>y</i>) but not (<i>x</i>-<i>y</i>). Insufficient. Combining both statements, we have values for both factors. We can calculate the result: <i>x</i><sup>2</sup> - <i>y</i><sup>2</sup> = (<i>x</i>-<i>y</i>)(<i>x</i>+<i>y</i>) = (2)(8) = 16. Sufficient."
    },
    {
      "id": 20,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Work Rate",
      "question_text": "It takes Tom 6 hours to paint a fence. It takes Jerry 4 hours to paint the same fence. If they work together, how long will it take them to paint the fence?",
      "options": [
        {"option": "A", "text": "2 hours"},
        {"option": "B", "text": "2.4 hours"},
        {"option": "C", "text": "2.5 hours"},
        {"option": "D", "text": "3 hours"},
        {"option": "E", "text": "5 hours"}
      ],
      "correct_answer": "B",
      "explanation": "Tom's rate of work is <sup>1</sup>/<sub>6</sub> of the fence per hour. Jerry's rate is <sup>1</sup>/<sub>4</sub> of the fence per hour. Their combined rate is <sup>1</sup>/<sub>6</sub> + <sup>1</sup>/<sub>4</sub> = <sup>2</sup>/<sub>12</sub> + <sup>3</sup>/<sub>12</sub> = <sup>5</sup>/<sub>12</sub> of the fence per hour. The time it takes them to complete the job is the reciprocal of their combined rate: Time = 1 / (<sup>5</sup>/<sub>12</sub>) = <sup>12</sup>/<sub>5</sub> = 2.4 hours."
    }
];
