import type { Question } from '../types';

export const QUESTIONS_PART_5: Question[] = [
    {
      "id": 101,
      "question_type": "Data Sufficiency",
      "difficulty": "Easy",
      "field_of_math": "Algebra",
      "question_text": "If 5<i>x</i> = 2<i>y</i>, what is the value of <i>x</i>?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>y</i> = 10",
        "2": "<i>x</i> + <i>y</i> = 14"
      },
      "correct_answer": "D",
      "explanation": "Statement (1): Given <i>y</i>=10, we can substitute it into the original equation: 5<i>x</i> = 2(10), so 5<i>x</i> = 20, and <i>x</i>=4. Sufficient. Statement (2): We have a system of two linear equations: 5<i>x</i> - 2<i>y</i> = 0 and <i>x</i> + <i>y</i> = 14. We can solve this system. For example, from the second equation, <i>y</i> = 14 - <i>x</i>. Substitute into the first: 5<i>x</i> = 2(14-<i>x</i>), which gives 5<i>x</i> = 28 - 2<i>x</i>, so 7<i>x</i>=28 and <i>x</i>=4. Sufficient. Each statement alone is sufficient."
    },
    {
      "id": 102,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Work Rate",
      "question_text": "Alice can complete a job in 6 hours, Bob can complete it in 8 hours, and Charlie can complete it in 12 hours. If they all work together, how long will it take them to complete the job?",
      "options": [
        {"option": "A", "text": "<sup>8</sup>/<sub>3</sub> hours"},
        {"option": "B", "text": "3 hours"},
        {"option": "C", "text": "<sup>9</sup>/<sub>4</sub> hours"},
        {"option": "D", "text": "4 hours"},
        {"option": "E", "text": "<sup>26</sup>/<sub>3</sub> hours"}
      ],
      "correct_answer": "A",
      "explanation": "Their individual rates are 1/6, 1/8, and 1/12 of the job per hour. Their combined rate is the sum of their individual rates: <sup>1</sup>/<sub>6</sub> + <sup>1</sup>/<sub>8</sub> + <sup>1</sup>/<sub>12</sub>. The least common denominator is 24. So the sum is <sup>4</sup>/<sub>24</sub> + <sup>3</sup>/<sub>24</sub> + <sup>2</sup>/<sub>24</sub> = <sup>9</sup>/<sub>24</sub> = <sup>3</sup>/<sub>8</sub> job per hour. The time to complete the job is the reciprocal of the rate: 1 / (<sup>3</sup>/<sub>8</sub>) = <sup>8</sup>/<sub>3</sub> hours."
    },
    {
      "id": 103,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Overlapping Sets",
      "question_text": "A survey of 100 people found that 40 people like coffee, 35 people like tea, and 30 people like juice. If 15 people like both coffee and tea, 12 like both tea and juice, 8 like both coffee and juice, and 5 like all three, how many people like none of these drinks?",
      "options": [
        {"option": "A", "text": "0"},
        {"option": "B", "text": "5"},
        {"option": "C", "text": "10"},
        {"option": "D", "text": "15"},
        {"option": "E", "text": "25"}
      ],
      "correct_answer": "E",
      "explanation": "Use the formula for three overlapping sets: Number in at least one group = C + T + J - (C&cap;T + T&cap;J + C&cap;J) + (All Three). Plugging in the numbers: 40 + 35 + 30 - (15 + 12 + 8) + 5 = 105 - 35 + 5 = 75. The number of people who like at least one of the drinks is 75. The number of people who like none of the drinks is Total - 75 = 100 - 75 = 25."
    },
    {
      "id": 104,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Statistics",
      "question_text": "What is the standard deviation of the set {<i>a</i>, <i>b</i>, <i>c</i>}?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>a</i> = <i>b</i> = <i>c</i>",
        "2": "The mean of the set is 5."
      },
      "correct_answer": "A",
      "explanation": "Standard deviation measures the spread of the data. Statement (1): If <i>a</i>=<i>b</i>=<i>c</i>, all the elements in the set are the same. This means there is no spread or variation in the data. The standard deviation is 0. Sufficient. Statement (2): The mean is 5. This tells us (<i>a</i>+<i>b</i>+<i>c</i>)/3 = 5. However, the set could be {5, 5, 5} which has a standard deviation of 0, or it could be {3, 5, 7} which has a non-zero standard deviation. Insufficient."
    },
    {
      "id": 105,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Arithmetic",
      "question_text": "A student's grade is based on <sup>1</sup>/<sub>3</sub> for homework, <sup>1</sup>/<sub>3</sub> for the midterm, and <sup>1</sup>/<sub>3</sub> for the final exam. If the student scores 90 on homework, 75 on the midterm, and 81 on the final, what is the student's final grade?",
      "options": [
        {"option": "A", "text": "80"},
        {"option": "B", "text": "81"},
        {"option": "C", "text": "82"},
        {"option": "D", "text": "83"},
        {"option": "E", "text": "85"}
      ],
      "correct_answer": "C",
      "explanation": "Since each component is weighted equally (1/3), the final grade is the average of the three scores. Average = (90 + 75 + 81) / 3 = 246 / 3 = 82."
    },
    {
      "id": 106,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Geometry",
      "question_text": "A circle with radius 4 is inscribed in a square. What is the area of the region inside the square but outside the circle?",
      "options": [
        {"option": "A", "text": "16 - 16&pi;"},
        {"option": "B", "text": "64 - 8&pi;"},
        {"option": "C", "text": "64 - 16&pi;"},
        {"option": "D", "text": "32 - 8&pi;"},
        {"option": "E", "text": "32 - 16&pi;"}
      ],
      "correct_answer": "C",
      "explanation": "If a circle with radius 4 is inscribed in a square, the diameter of the circle is equal to the side length of the square. Diameter = 2 &times; radius = 2 &times; 4 = 8. So the side of the square is 8. Area of the square = side<sup>2</sup> = 8<sup>2</sup> = 64. Area of the circle = &pi;<i>r</i><sup>2</sup> = &pi;(4)<sup>2</sup> = 16&pi;. The area of the region inside the square but outside the circle is the difference between the two areas: 64 - 16&pi;."
    },
    {
      "id": 107,
      "question_type": "Data Sufficiency",
      "difficulty": "Hard",
      "field_of_math": "Inequalities",
      "question_text": "Is <i>x</i><sup>2</sup> < <i>x</i>?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i> < 1",
        "2": "<i>x</i> > 0"
      },
      "correct_answer": "C",
      "explanation": "The inequality <i>x</i><sup>2</sup> < <i>x</i> is true for 0 < <i>x</i> < 1. Statement (1): <i>x</i> < 1. If <i>x</i> = 0.5, then 0.25 < 0.5 (Yes). If <i>x</i> = -2, then 4 < -2 (No). Insufficient. Statement (2): <i>x</i> > 0. If <i>x</i> = 0.5, then 0.25 < 0.5 (Yes). If <i>x</i> = 2, then 4 < 2 (No). Insufficient. Combining both statements, we have 0 < <i>x</i> < 1, which means the answer to the question is always 'Yes'. Sufficient."
    },
    {
      "id": 108,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Functions",
      "question_text": "A function is defined by <i>f(n)</i> = <i>f(n-1)</i> + 3 for <i>n</i> > 1. If <i>f(1)</i> = 5, what is the value of <i>f(101)</i>?",
      "options": [
        {"option": "A", "text": "300"},
        {"option": "B", "text": "302"},
        {"option": "C", "text": "305"},
        {"option": "D", "text": "308"},
        {"option": "E", "text": "311"}
      ],
      "correct_answer": "C",
      "explanation": "This defines an arithmetic sequence. The first term is <i>f(1)</i> = 5. Each subsequent term is found by adding 3 to the previous term. So, the common difference is 3. We want to find the 101st term. The formula for the nth term of an arithmetic sequence is <i>a<sub>n</sub></i> = <i>a<sub>1</sub></i> + (<i>n</i>-1)<i>d</i>. Here, <i>a<sub>1</sub></i> = 5, <i>n</i>=101, and <i>d</i>=3. So, <i>f(101)</i> = 5 + (101-1) &times; 3 = 5 + 100 &times; 3 = 5 + 300 = 305."
    },
    {
      "id": 109,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Interest",
      "question_text": "What is the difference between the interest earned on $10,000 for 2 years at a 10% annual simple interest rate and the interest earned on the same amount for the same period at a 10% annual rate compounded annually?",
      "options": [
        {"option": "A", "text": "$0"},
        {"option": "B", "text": "$50"},
        {"option": "C", "text": "$100"},
        {"option": "D", "text": "$200"},
        {"option": "E", "text": "$1000"}
      ],
      "correct_answer": "C",
      "explanation": "Simple Interest: I = P &times; r &times; t = 10000 &times; 0.10 &times; 2 = $2000. Compound Interest: Year 1 interest = 10000 &times; 0.10 = $1000. New principal = $11000. Year 2 interest = 11000 &times; 0.10 = $1100. Total compound interest = 1000 + 1100 = $2100. The difference is $2100 - $2000 = $100."
    },
    {
      "id": 110,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Number Properties",
      "question_text": "If <i>n</i> is a positive integer, is <i>n</i> a multiple of 15?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>n</i> is a multiple of 3.",
        "2": "<i>n</i> is a multiple of 5."
      },
      "correct_answer": "C",
      "explanation": "To be a multiple of 15, an integer must be a multiple of both 3 and 5 (since 3 and 5 are the prime factors of 15). Statement (1): <i>n</i> could be 3, 6, 9... Not all are multiples of 15. Insufficient. Statement (2): <i>n</i> could be 5, 10, 20... Not all are multiples of 15. Insufficient. Combining both: If <i>n</i> is a multiple of both 3 and 5, it must be a multiple of their least common multiple, which is 15. Sufficient."
    },
    {
      "id": 111,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Mean",
      "question_text": "The average of four numbers is 20. If three of the numbers are 15, 25, and 30, what is the fourth number?",
      "options": [
        {"option": "A", "text": "5"},
        {"option": "B", "text": "10"},
        {"option": "C", "text": "15"},
        {"option": "D", "text": "20"},
        {"option": "E", "text": "25"}
      ],
      "correct_answer": "B",
      "explanation": "If the average of four numbers is 20, their sum must be 4 &times; 20 = 80. The sum of the three given numbers is 15 + 25 + 30 = 70. To find the fourth number, subtract this sum from the total sum: 80 - 70 = 10."
    },
    {
      "id": 112,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Combinations",
      "question_text": "A team of 4 is to be selected from a group of 6 men and 5 women. How many different teams can be formed?",
      "options": [
        {"option": "A", "text": "24"},
        {"option": "B", "text": "120"},
        {"option": "C", "text": "330"},
        {"option": "D", "text": "462"},
        {"option": "E", "text": "7920"}
      ],
      "correct_answer": "C",
      "explanation": "This is a combination problem since the order of selection does not matter. We are choosing a team of 4 from a total of 6 + 5 = 11 people. The number of combinations is given by C(n, k) = n! / (k!(n-k)!). Here, n=11 and k=4. So, C(11,4) = 11! / (4!7!) = (11 &times; 10 &times; 9 &times; 8) / (4 &times; 3 &times; 2 &times; 1) = 11 &times; 10 &times; 3 = 330."
    },
    {
      "id": 113,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Geometry",
      "question_text": "What is the area of parallelogram ABCD?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "The length of base AB is 10.",
        "2": "The height of the parallelogram with respect to base AB is 6."
      },
      "correct_answer": "C",
      "explanation": "The area of a parallelogram is given by the formula Area = base &times; height. Statement (1) provides the length of a base but not the corresponding height. Insufficient. Statement (2) provides a height but not the length of the corresponding base. Insufficient. Combining both statements gives us both the base and its corresponding height, so we can calculate the area: 10 &times; 6 = 60. Sufficient."
    },
    {
      "id": 114,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Rate/Distance",
      "question_text": "Car A starts from Town X and travels towards Town Y at 60 km/h. Two hours later, Car B starts from Town Y and travels towards Town X at 80 km/h. If the distance between the towns is 540 km, how far from Town X will the cars meet?",
      "options": [
        {"option": "A", "text": "240 km"},
        {"option": "B", "text": "280 km"},
        {"option": "C", "text": "300 km"},
        {"option": "D", "text": "360 km"},
        {"option": "E", "text": "420 km"}
      ],
      "correct_answer": "C",
      "explanation": "In the first 2 hours, Car A travels 60 km/h &times; 2 h = 120 km. The remaining distance between the cars is 540 - 120 = 420 km. Now, the cars are moving towards each other with a relative speed of 60 + 80 = 140 km/h. The time it will take for them to meet is Time = Distance / Speed = 420 km / 140 km/h = 3 hours. In these 3 hours, Car A travels an additional 60 km/h &times; 3 h = 180 km. The total distance from Town X where they meet is the initial 120 km plus this additional 180 km, which is 120 + 180 = 300 km."
    },
    {
      "id": 115,
      "question_type": "Data Sufficiency",
      "difficulty": "Easy",
      "field_of_math": "Algebra",
      "question_text": "Is <i>x</i> positive?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "2<i>x</i> - 6 > 0",
        "2": "<i>x</i><sup>3</sup> > 0"
      },
      "correct_answer": "D",
      "explanation": "Statement (1): 2<i>x</i> - 6 > 0 implies 2<i>x</i> > 6, which means <i>x</i> > 3. If <i>x</i> is greater than 3, it is positive. Sufficient. Statement (2): If <i>x</i><sup>3</sup> is positive, then <i>x</i> must be positive (since a negative number cubed is negative). Sufficient. Each statement alone is sufficient."
    },
    {
      "id": 116,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Triangles",
      "question_text": "In an isosceles triangle, the two equal sides are each 10 cm long, and the angle between them is 60 degrees. What is the area of the triangle?",
      "options": [
        {"option": "A", "text": "25"},
        {"option": "B", "text": "25&radic;3"},
        {"option": "C", "text": "50"},
        {"option": "D", "text": "50&radic;3"},
        {"option": "E", "text": "100"}
      ],
      "correct_answer": "B",
      "explanation": "An isosceles triangle with a 60-degree angle between the equal sides is actually an equilateral triangle. All three angles are 60 degrees, and all three sides are 10 cm long. The area of an equilateral triangle with side <i>s</i> is given by the formula Area = (<i>s</i><sup>2</sup>&radic;3)/4. So, the area is (10<sup>2</sup>&radic;3)/4 = (100&radic;3)/4 = 25&radic;3."
    },
    {
      "id": 117,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Ratios",
      "question_text": "A map has a scale of 1 inch to 50 miles. If two cities are 3.5 inches apart on the map, what is the actual distance between them in miles?",
      "options": [
        {"option": "A", "text": "14.3"},
        {"option": "B", "text": "100"},
        {"option": "C", "text": "150"},
        {"option": "D", "text": "175"},
        {"option": "E", "text": "200"}
      ],
      "correct_answer": "D",
      "explanation": "Set up a proportion: (1 inch / 50 miles) = (3.5 inches / x miles). Cross-multiply to solve for x: 1 &times; x = 50 &times; 3.5. So, x = 175 miles."
    },
    {
      "id": 118,
      "question_type": "Data Sufficiency",
      "difficulty": "Hard",
      "field_of_math": "Prime Numbers",
      "question_text": "If <i>p</i> is a prime number, is <i>p</i> > 2?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>p</i> is an odd number.",
        "2": "<i>p</i> + 1 is an even number."
      },
      "correct_answer": "D",
      "explanation": "The question asks if p is a prime number other than 2. The only even prime is 2. Statement (1): If prime p is odd, it cannot be 2, so p > 2. Sufficient. Statement (2): If p=2 (the only even prime), p+1=3 which is odd. This statement says p+1 is even, which excludes the possibility of p=2. Therefore p must be an odd prime, and p > 2. Sufficient. Each statement alone is sufficient."
    },
    {
      "id": 119,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Circles",
      "question_text": "In a circle with a radius of 6, what is the length of an arc subtended by a central angle of 30 degrees?",
      "options": [
        {"option": "A", "text": "&pi;/2"},
        {"option": "B", "text": "&pi;"},
        {"option": "C", "text": "2&pi;"},
        {"option": "D", "text": "3&pi;"},
        {"option": "E", "text": "6&pi;"}
      ],
      "correct_answer": "B",
      "explanation": "The formula for the length of an arc is (central angle / 360) &times; Circumference. The circumference of the circle is 2&pi;<i>r</i> = 2&pi;(6) = 12&pi;. The central angle is 30 degrees. So, the arc length is (30/360) &times; 12&pi; = (1/12) &times; 12&pi; = &pi;."
    },
    {
      "id": 120,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Quadrilaterals",
      "question_text": "Is quadrilateral ABCD a square?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "All four sides of ABCD are equal in length.",
        "2": "The diagonals of ABCD are equal in length."
      },
      "correct_answer": "C",
      "explanation": "Statement (1): A quadrilateral with all four sides equal is a rhombus. A square is a rhombus, but not all rhombuses are squares (the angles might not be 90 degrees). Insufficient. Statement (2): A quadrilateral with equal diagonals could be a rectangle or an isosceles trapezoid. Not necessarily a square. Insufficient. Combining both: We have a rhombus (from statement 1) with equal diagonals (from statement 2). A rhombus with equal diagonals must be a square. Sufficient."
    }
];