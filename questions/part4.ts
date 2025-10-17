import type { Question } from '../types';

export const QUESTIONS_PART_4: Question[] = [
    {
      "id": 81,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Simple Interest",
      "question_text": "If $2,000 is invested for 3 years at a simple annual interest rate of 5%, what is the total interest earned?",
      "options": [
        {"option": "A", "text": "$150"},
        {"option": "B", "text": "$300"},
        {"option": "C", "text": "$500"},
        {"option": "D", "text": "$2,300"},
        {"option": "E", "text": "$2,315.25"}
      ],
      "correct_answer": "B",
      "explanation": "The formula for simple interest is I = P &times; r &times; t. Here, P = 2000, r = 0.05, and t = 3. The interest earned is I = 2000 &times; 0.05 &times; 3 = 100 &times; 3 = $300."
    },
    {
      "id": 82,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Functions",
      "question_text": "If <i>f(x)</i> = <i>ax</i> + <i>b</i>, what is the value of <i>f(2)</i>?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>f(0)</i> = 3",
        "2": "<i>f(1)</i> = 5"
      },
      "correct_answer": "C",
      "explanation": "We need to find <i>f(2)</i> = 2<i>a</i> + <i>b</i>. This requires us to know the values of <i>a</i> and <i>b</i>. Statement (1): <i>f(0)</i> = <i>a</i>(0) + <i>b</i> = 3. This tells us <i>b</i> = 3. But we don't know <i>a</i>. Insufficient. Statement (2): <i>f(1)</i> = <i>a</i>(1) + <i>b</i> = 5. This gives <i>a</i> + <i>b</i> = 5. We still have two unknowns. Insufficient. Combining both statements: We know <i>b</i>=3 from (1). Substituting this into the equation from (2), we get <i>a</i> + 3 = 5, so <i>a</i> = 2. Now we know <i>a</i> and <i>b</i>, so we can find <i>f(2)</i> = 2(2) + 3 = 7. Sufficient."
    },
    {
      "id": 83,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Order of Operations",
      "question_text": "What is the value of 5 + 3 &times; (8 - 2) &div; 6?",
      "options": [
        {"option": "A", "text": "<sup>4</sup>/<sub>3</sub>"},
        {"option": "B", "text": "4"},
        {"option": "C", "text": "8"},
        {"option": "D", "text": "9"},
        {"option": "E", "text": "24"}
      ],
      "correct_answer": "C",
      "explanation": "Follow the order of operations (PEMDAS/BODMAS): Parentheses first: (8-2) = 6. The expression becomes 5 + 3 &times; 6 &div; 6. Next, Multiplication and Division from left to right: 3 &times; 6 = 18. Then 18 &div; 6 = 3. The expression is now 5 + 3. Finally, Addition: 5 + 3 = 8."
    },
    {
      "id": 84,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Circles and Squares",
      "question_text": "A circle is inscribed within a square. If the area of the circle is 25&pi;, what is the area of the square?",
      "options": [
        {"option": "A", "text": "25"},
        {"option": "B", "text": "50"},
        {"option": "C", "text": "64"},
        {"option": "D", "text": "81"},
        {"option": "E", "text": "100"}
      ],
      "correct_answer": "E",
      "explanation": "The area of the circle is A = &pi;<i>r</i><sup>2</sup>. Given A = 25&pi;, we have &pi;<i>r</i><sup>2</sup> = 25&pi;, so <i>r</i><sup>2</sup> = 25 and the radius <i>r</i> = 5. When a circle is inscribed in a square, the diameter of the circle is equal to the side length of the square. The diameter is 2<i>r</i> = 2(5) = 10. So, the side of the square is 10. The area of the square is side<sup>2</sup> = 10<sup>2</sup> = 100."
    },
    {
      "id": 85,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Exponents",
      "question_text": "If <i>x</i> and <i>y</i> are positive integers, is <i>x</i><sup><i>y</i></sup> > <i>y</i><sup><i>x</i></sup>?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i> = 2",
        "2": "<i>y</i> > 3"
      },
      "correct_answer": "E",
      "explanation": "Statement (1): x=2. The question becomes is 2<sup>y</sup> > y<sup>2</sup>? If y=3, 8<9 (No). If y=4, 16=16 (No). If y=5, 32>25 (Yes). Insufficient. Statement (2): y>3. We don't know x. Insufficient. Combining: x=2 and y>3. If y=4, 2<sup>4</sup> = 16 and 4<sup>2</sup> = 16. The answer is 'No'. If y=5, 2<sup>5</sup> = 32 and 5<sup>2</sup> = 25. The answer is 'Yes'. Since we can get different answers, the statements together are insufficient."
    },
    {
      "id": 86,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Median",
      "question_text": "The salaries of 7 employees in a company are $40k, $45k, $50k, $55k, $60k, $120k, and $130k. What is the difference between the median and mean salary?",
      "options": [
        {"option": "A", "text": "$0"},
        {"option": "B", "text": "$15,000"},
        {"option": "C", "text": "$20,000"},
        {"option": "D", "text": "$25,000"},
        {"option": "E", "text": "$35,000"}
      ],
      "correct_answer": "B",
      "explanation": "The salaries are already in order. The median is the middle value, which is the 4th value: $55,000. To find the mean, sum the salaries and divide by 7. Sum = 40+45+50+55+60+120+130 = 500. Mean = $500,000 / 7 \u2248 $71,428. The difference is approximately $71,428 - $55,000 = $16,428. This is closest to option B ($15,000)."
    },
    {
      "id": 87,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Algebraic Manipulation",
      "question_text": "If <i>a</i> + <i>b</i> = 7 and <i>a</i> - <i>b</i> = 3, what is the value of <i>a</i><sup>2</sup> - <i>b</i><sup>2</sup>?",
      "options": [
        {"option": "A", "text": "4"},
        {"option": "B", "text": "10"},
        {"option": "C", "text": "21"},
        {"option": "D", "text": "40"},
        {"option": "E", "text": "Cannot be determined"}
      ],
      "correct_answer": "C",
      "explanation": "The expression <i>a</i><sup>2</sup> - <i>b</i><sup>2</sup> is a difference of squares, which can be factored as (<i>a</i> + <i>b</i>)(<i>a</i> - <i>b</i>). We are given the values of both factors. So, <i>a</i><sup>2</sup> - <i>b</i><sup>2</sup> = (7)(3) = 21."
    },
    {
      "id": 88,
      "question_type": "Data Sufficiency",
      "difficulty": "Easy",
      "field_of_math": "Arithmetic",
      "question_text": "A store sells only apples and bananas. What is the total revenue from sales?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "The store sold 100 apples at $0.50 each.",
        "2": "The store sold 50 bananas at $0.80 each."
      },
      "correct_answer": "C",
      "explanation": "Total revenue is (revenue from apples) + (revenue from bananas). Statement (1) gives the revenue from apples as 100 &times; $0.50 = $50. But it gives no information about bananas. Insufficient. Statement (2) gives the revenue from bananas as 50 &times; $0.80 = $40. But it gives no information about apples. Insufficient. Combining both statements, the total revenue is $50 + $40 = $90. Sufficient."
    },
    {
      "id": 89,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Angles",
      "question_text": "The angles of a triangle are in the ratio 1:2:3. What is the measure of the largest angle?",
      "options": [
        {"option": "A", "text": "30&deg;"},
        {"option": "B", "text": "60&deg;"},
        {"option": "C", "text": "90&deg;"},
        {"option": "D", "text": "120&deg;"},
        {"option": "E", "text": "150&deg;"}
      ],
      "correct_answer": "C",
      "explanation": "Let the angles be <i>x</i>, 2<i>x</i>, and 3<i>x</i>. The sum of angles in a triangle is 180 degrees. So, <i>x</i> + 2<i>x</i> + 3<i>x</i> = 180. This gives 6<i>x</i> = 180, so <i>x</i> = 30. The angles are 30&deg;, 60&deg;, and 90&deg;. The largest angle is 90&deg;."
    },
    {
      "id": 90,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Consecutive Integers",
      "question_text": "The sum of five consecutive even integers is 220. What is the value of the smallest of these integers?",
      "options": [
        {"option": "A", "text": "36"},
        {"option": "B", "text": "38"},
        {"option": "C", "text": "40"},
        {"option": "D", "text": "42"},
        {"option": "E", "text": "44"}
      ],
      "correct_answer": "C",
      "explanation": "Let the five consecutive even integers be <i>n</i>, <i>n</i>+2, <i>n</i>+4, <i>n</i>+6, and <i>n</i>+8. Their sum is 5<i>n</i> + 20. We are given that 5<i>n</i> + 20 = 220. Subtracting 20 gives 5<i>n</i> = 200. Dividing by 5 gives <i>n</i> = 40. The smallest integer is 40. Alternatively, the average of consecutive integers is the middle one. 220/5 = 44. So the middle integer is 44. The integers are 40, 42, 44, 46, 48. The smallest is 40."
    },
    {
      "id": 91,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Ratios",
      "question_text": "A recipe calls for flour, sugar, and butter in the ratio 5:3:2. If a baker uses 150 grams of sugar, how many grams of flour does he need?",
      "options": [
        {"option": "A", "text": "100"},
        {"option": "B", "text": "150"},
        {"option": "C", "text": "200"},
        {"option": "D", "text": "250"},
        {"option": "E", "text": "300"}
      ],
      "correct_answer": "D",
      "explanation": "The ratio of flour to sugar is 5:3. Let <i>F</i> be the amount of flour and <i>S</i> be the amount of sugar. We have the proportion <i>F</i>/<i>S</i> = 5/3. We are given that <i>S</i> = 150 grams. So, <i>F</i>/150 = 5/3. To solve for <i>F</i>, multiply both sides by 150: <i>F</i> = (5/3) &times; 150 = 5 &times; 50 = 250 grams."
    },
    {
      "id": 92,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Geometry",
      "question_text": "Are the lengths of the three sides of triangle T equal to 3, 4, and 5?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "Triangle T is a right triangle.",
        "2": "The perimeter of triangle T is 12."
      },
      "correct_answer": "C",
      "explanation": "Statement (1): Knowing that T is a right triangle isn't enough. Its sides could be 3-4-5, or 5-12-13, or many other combinations. Insufficient. Statement (2): Knowing the perimeter is 12 isn't enough. The sides could be 3-4-5, or 4-4-4 (equilateral), or 2-5-5 (isosceles). Insufficient. Combining both: We need a right triangle with a perimeter of 12. Let the sides be <i>a</i>, <i>b</i>, and hypotenuse <i>c</i>. We need <i>a</i> + <i>b</i> + <i>c</i> = 12 and <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup>. The 3-4-5 combination is a right triangle (3<sup>2</sup>+4<sup>2</sup>=5<sup>2</sup>) and its perimeter is 3+4+5=12. This is a unique solution for integer sides and is the most famous Pythagorean triple. Together, the statements confirm the sides must be 3, 4, and 5. Sufficient."
    },
    {
      "id": 93,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Exponents",
      "question_text": "What is the value of (4<sup>3</sup>)<sup>2</sup> &div; (2<sup>5</sup>)<sup>2</sup>?",
      "options": [
        {"option": "A", "text": "2"},
        {"option": "B", "text": "4"},
        {"option": "C", "text": "8"},
        {"option": "D", "text": "16"},
        {"option": "E", "text": "64"}
      ],
      "correct_answer": "B",
      "explanation": "Use the power of a power rule (<i>x<sup>a</sup></i>)<sup><i>b</i></sup> = <i>x<sup>ab</sup></i>. The numerator is (4<sup>3</sup>)<sup>2</sup> = 4<sup>6</sup>. Since 4 = 2<sup>2</sup>, this is (2<sup>2</sup>)<sup>6</sup> = 2<sup>12</sup>. The denominator is (2<sup>5</sup>)<sup>2</sup> = 2<sup>10</sup>. The expression is 2<sup>12</sup> &div; 2<sup>10</sup>. Using the division rule <i>x<sup>a</sup></i> / <i>x<sup>b</sup></i> = <i>x<sup>a-b</sup></i>, we get 2<sup>12-10</sup> = 2<sup>2</sup> = 4."
    },
    {
      "id": 94,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Coordinate Geometry",
      "question_text": "Which of the following is an equation of the line in the xy-plane that passes through the point (1, -2) and is perpendicular to the line <i>y</i> = <sup>1</sup>/<sub>3</sub><i>x</i> + 5?",
      "options": [
        {"option": "A", "text": "<i>y</i> = -3<i>x</i> + 1"},
        {"option": "B", "text": "<i>y</i> = -<sup>1</sup>/<sub>3</sub><i>x</i> - <sup>5</sup>/<sub>3</sub>"},
        {"option": "C", "text": "<i>y</i> = 3<i>x</i> - 5"},
        {"option": "D", "text": "<i>y</i> = <sup>1</sup>/<sub>3</sub><i>x</i> - <sup>7</sup>/<sub>3</sub>"},
        {"option": "E", "text": "<i>y</i> = -3<i>x</i> - 1"}
      ],
      "correct_answer": "A",
      "explanation": "The slope of the given line is <sup>1</sup>/<sub>3</sub>. The slope of a perpendicular line is the negative reciprocal, which is -3. So our new line has the form <i>y</i> = -3<i>x</i> + <i>c</i>. To find the y-intercept <i>c</i>, we plug in the point (1, -2): -2 = -3(1) + <i>c</i>. This gives -2 = -3 + <i>c</i>, so <i>c</i> = 1. The equation of the line is <i>y</i> = -3<i>x</i> + 1."
    },
    {
      "id": 95,
      "question_type": "Data Sufficiency",
      "difficulty": "Hard",
      "field_of_math": "Number Properties",
      "question_text": "If <i>n</i> is a positive integer, what is the remainder when <i>n</i> is divided by 10?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "The units digit of <i>n</i><sup>2</sup> is 9.",
        "2": "The units digit of <i>n</i>+1 is 4."
      },
      "correct_answer": "B",
      "explanation": "The remainder when <i>n</i> is divided by 10 is simply its units digit. Statement (1): If the units digit of <i>n</i><sup>2</sup> is 9, the units digit of <i>n</i> could be 3 (since 3<sup>2</sup>=9) or 7 (since 7<sup>2</sup>=49). Since there are two possible units digits, this is insufficient. Statement (2): If the units digit of <i>n</i>+1 is 4, then the units digit of <i>n</i> must be 3. This gives a single, definitive units digit. Sufficient."
    },
    {
      "id": 96,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Statistics",
      "question_text": "Class A has 20 students and an average test score of 85. Class B has 30 students and an average test score of 75. What is the combined average score for both classes?",
      "options": [
        {"option": "A", "text": "78"},
        {"option": "B", "text": "79"},
        {"option": "C", "text": "80"},
        {"option": "D", "text": "81"},
        {"option": "E", "text": "82"}
      ],
      "correct_answer": "B",
      "explanation": "This is a weighted average problem. The sum of scores in Class A is 20 &times; 85 = 1700. The sum of scores in Class B is 30 &times; 75 = 2250. The total sum of scores for all students is 1700 + 2250 = 3950. The total number of students is 20 + 30 = 50. The combined average is 3950 / 50 = 79."
    },
    {
      "id": 97,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Percentages",
      "question_text": "A team won 80% of its first 20 games. It then won 50% of its remaining 10 games. What percentage of its total games did the team win?",
      "options": [
        {"option": "A", "text": "65%"},
        {"option": "B", "text": "70%"},
        {"option": "C", "text": "72%"},
        {"option": "D", "text": "75%"},
        {"option": "E", "text": "78%"}
      ],
      "correct_answer": "B",
      "explanation": "Wins in the first 20 games: 0.80 &times; 20 = 16 games. Wins in the remaining 10 games: 0.50 &times; 10 = 5 games. Total games played = 20 + 10 = 30. Total games won = 16 + 5 = 21. The overall winning percentage is (Total Wins / Total Games) = 21 / 30 = 7 / 10 = 70%."
    },
    {
      "id": 98,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Inequalities",
      "question_text": "Is <i>xy</i> > 0?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i><sup>2</sup> < 1",
        "2": "<i>y</i> < 0"
      },
      "correct_answer": "E",
      "explanation": "The question asks if <i>x</i> and <i>y</i> have the same sign. Statement (1): <i>x</i><sup>2</sup> < 1 implies -1 < <i>x</i> < 1. So <i>x</i> could be positive (e.g., 0.5) or negative (e.g., -0.5). We know nothing about <i>y</i>. Insufficient. Statement (2): <i>y</i> < 0. This tells us <i>y</i> is negative, but we know nothing about <i>x</i>. Insufficient. Combining both: We know -1 < <i>x</i> < 1 and <i>y</i> < 0. Since <i>x</i> could be positive or negative, we cannot determine if <i>xy</i> > 0. For example, if <i>x</i>=0.5 and <i>y</i>=-2, <i>xy</i>=-1 (No). If <i>x</i>=-0.5 and <i>y</i>=-2, <i>xy</i>=1 (Yes). Insufficient."
    },
    {
      "id": 99,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "3D Geometry",
      "question_text": "The volume of a cube is 125 cubic centimeters. What is the surface area of the cube in square centimeters?",
      "options": [
        {"option": "A", "text": "25"},
        {"option": "B", "text": "100"},
        {"option": "C", "text": "125"},
        {"option": "D", "text": "150"},
        {"option": "E", "text": "625"}
      ],
      "correct_answer": "D",
      "explanation": "The volume of a cube with side length <i>s</i> is <i>s</i><sup>3</sup>. So, <i>s</i><sup>3</sup> = 125, which means <i>s</i> = 5 cm. The surface area of a cube is the sum of the areas of its 6 faces. The area of one face is <i>s</i><sup>2</sup> = 5<sup>2</sup> = 25. The total surface area is 6 &times; 25 = 150 square centimeters."
    },
    {
      "id": 100,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Probability",
      "question_text": "A box contains 6 red marbles and 4 blue marbles. If one marble is drawn at random, what is the probability that it is red or blue?",
      "options": [
        {"option": "A", "text": "0"},
        {"option": "B", "text": "0.4"},
        {"option": "C", "text": "0.6"},
        {"option": "D", "text": "1"},
        {"option": "E", "text": "24"}
      ],
      "correct_answer": "D",
      "explanation": "The box contains only red and blue marbles. Therefore, any marble drawn must be either red or blue. The event is certain to happen, and the probability of a certain event is 1."
    }
];