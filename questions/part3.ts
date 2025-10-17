import type { Question } from '../types';

export const QUESTIONS_PART_3: Question[] = [
    {
      "id": 61,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Overlapping Sets",
      "question_text": "Of the 800 employees at a company, how many are managers?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "40% of the female employees are managers.",
        "2": "60% of the male employees are not managers."
      },
      "correct_answer": "C",
      "explanation": "Let F be females and M be males. F+M=800. We want to find the number of managers. Statement (1): 0.4F are managers. Insufficient. Statement (2): 1-0.6 = 0.4M are managers. Insufficient. Combining: Total managers = 0.4F + 0.4M = 0.4(F+M). Since we know F+M=800, Total managers = 0.4(800) = 320. Sufficient."
    },
    {
      "id": 62,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Percentages",
      "question_text": "If a price of a jacket is reduced by 20% to $60, what was the original price?",
      "options": [
        {"option": "A", "text": "$48"},
        {"option": "B", "text": "$72"},
        {"option": "C", "text": "$75"},
        {"option": "D", "text": "$80"},
        {"option": "E", "text": "$120"}
      ],
      "correct_answer": "C",
      "explanation": "Let the original price be P. A 20% reduction means the new price is 80% of the original. So, 0.80 &times; P = $60. To find P, divide by 0.80: P = 60 / 0.8 = 75. The original price was $75."
    },
    {
      "id": 63,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Quadrilaterals",
      "question_text": "The area of a square is 64 square centimeters. What is the length of its diagonal?",
      "options": [
        {"option": "A", "text": "8"},
        {"option": "B", "text": "8&radic;2"},
        {"option": "C", "text": "16"},
        {"option": "D", "text": "16&radic;2"},
        {"option": "E", "text": "32"}
      ],
      "correct_answer": "B",
      "explanation": "The area of a square is side<sup>2</sup>. So, <i>s</i><sup>2</sup> = 64, which means the side length <i>s</i> = 8 cm. The diagonal of a square can be found using the Pythagorean theorem (<i>s</i><sup>2</sup> + <i>s</i><sup>2</sup> = <i>d</i><sup>2</sup>) or the formula <i>d</i> = <i>s</i>&radic;2. So, the diagonal is 8&radic;2 cm."
    },
    {
      "id": 64,
      "question_type": "Data Sufficiency",
      "difficulty": "Easy",
      "field_of_math": "Number Properties",
      "question_text": "Is the integer <i>p</i> divisible by 3?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>p</i> is the product of three consecutive integers.",
        "2": "The sum of the digits of <i>p</i> is 12."
      },
      "correct_answer": "D",
      "explanation": "Statement (1): The product of any three consecutive integers must contain a multiple of 3. Therefore, <i>p</i> is always divisible by 3. Sufficient. Statement (2): A number is divisible by 3 if and only if the sum of its digits is divisible by 3. Since the sum of the digits of <i>p</i> is 12, and 12 is divisible by 3, <i>p</i> must be divisible by 3. Sufficient. Each statement alone is sufficient."
    },
    {
      "id": 65,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Mixture Problems",
      "question_text": "How many liters of a 20% alcohol solution must be added to 5 liters of a 10% alcohol solution to create a 15% alcohol solution?",
      "options": [
        {"option": "A", "text": "2.5"},
        {"option": "B", "text": "5"},
        {"option": "C", "text": "7.5"},
        {"option": "D", "text": "10"},
        {"option": "E", "text": "15"}
      ],
      "correct_answer": "B",
      "explanation": "Let <i>x</i> be the number of liters of the 20% solution. We can set up an equation for the amount of alcohol: 0.20<i>x</i> + 0.10(5) = 0.15(<i>x</i> + 5). This simplifies to 0.20<i>x</i> + 0.5 = 0.15<i>x</i> + 0.75. Subtract 0.15<i>x</i> from both sides: 0.05<i>x</i> + 0.5 = 0.75. Subtract 0.5 from both sides: 0.05<i>x</i> = 0.25. Divide by 0.05: <i>x</i> = 5. So, 5 liters must be added."
    },
    {
      "id": 66,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Volume",
      "question_text": "A cylindrical tank has a radius of 3 meters and a height of 5 meters. What is its volume in cubic meters?",
      "options": [
        {"option": "A", "text": "15&pi;"},
        {"option": "B", "text": "30&pi;"},
        {"option": "C", "text": "45&pi;"},
        {"option": "D", "text": "75&pi;"},
        {"option": "E", "text": "90&pi;"}
      ],
      "correct_answer": "C",
      "explanation": "The formula for the volume of a cylinder is V = &pi;<i>r</i><sup>2</sup><i>h</i>. Plugging in the given values: V = &pi;(3)<sup>2</sup>(5) = &pi;(9)(5) = 45&pi; cubic meters."
    },
    {
      "id": 67,
      "question_type": "Data Sufficiency",
      "difficulty": "Hard",
      "field_of_math": "Quadratic Equations",
      "question_text": "What is the value of <i>x</i>?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i><sup>2</sup> + <i>x</i> - 6 = 0",
        "2": "<i>x</i> > 0"
      },
      "correct_answer": "C",
      "explanation": "Statement (1): The quadratic equation <i>x</i><sup>2</sup> + <i>x</i> - 6 = 0 can be factored into (<i>x</i>+3)(<i>x</i>-2) = 0. This gives two possible solutions for <i>x</i>: <i>x</i> = -3 or <i>x</i> = 2. Insufficient. Statement (2): This tells us <i>x</i> is positive, but provides no specific value. Insufficient. Combining both statements: From statement (1), <i>x</i> could be -3 or 2. Statement (2) eliminates -3, so <i>x</i> must be 2. Sufficient."
    },
    {
      "id": 68,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Fractions",
      "question_text": "A pizza is cut into 8 equal slices. If John eats 3 slices, what fraction of the pizza is left?",
      "options": [
        {"option": "A", "text": "<sup>1</sup>/<sub>8</sub>"},
        {"option": "B", "text": "<sup>3</sup>/<sub>8</sub>"},
        {"option": "C", "text": "<sup>1</sup>/<sub>2</sub>"},
        {"option": "D", "text": "<sup>5</sup>/<sub>8</sub>"},
        {"option": "E", "text": "<sup>3</sup>/<sub>4</sub>"}
      ],
      "correct_answer": "D",
      "explanation": "If there are 8 slices and 3 are eaten, then 8 - 3 = 5 slices are left. The fraction of the pizza left is 5 out of 8, or <sup>5</sup>/<sub>8</sub>."
    },
    {
      "id": 69,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Standard Deviation",
      "question_text": "If a constant <i>k</i> is subtracted from each element in a data set, how does the standard deviation of the new set compare to the original?",
      "options": [
        {"option": "A", "text": "It decreases by <i>k</i>."},
        {"option": "B", "text": "It decreases by &radic;<i>k</i>."},
        {"option": "C", "text": "It remains the same."},
        {"option": "D", "text": "It increases by <i>k</i>."},
        {"option": "E", "text": "It is multiplied by <i>k</i>."}
      ],
      "correct_answer": "C",
      "explanation": "Standard deviation measures the dispersion or spread of data points from the mean. Adding or subtracting a constant value to every data point shifts the entire set and its mean, but it does not change the spread. Therefore, the standard deviation remains the same."
    },
    {
      "id": 70,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Absolute Value",
      "question_text": "Is |<i>x</i>| = <i>y</i>?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>y</i> = -<i>x</i>",
        "2": "<i>y</i> &ge; 0"
      },
      "correct_answer": "C",
      "explanation": "The question asks if <i>y</i> is the absolute value of <i>x</i>. This is true if <i>y</i> &ge; 0 and either <i>y=x</i> or <i>y=-x</i>. Statement (1): <i>y</i> = -<i>x</i>. This could be true (if <i>x</i>=-2, <i>y</i>=2, then |<i>x</i>|=<i>y</i>) or false (if <i>x</i>=2, <i>y</i>=-2, then |<i>x</i>| is not <i>y</i>). Insufficient. Statement (2): <i>y</i> &ge; 0. This is a necessary condition for <i>y</i> to be an absolute value, but not sufficient. We don't know the relationship between <i>x</i> and <i>y</i>. Insufficient. Combining both: We know <i>y</i> &ge; 0 and <i>y</i> = -<i>x</i>. This implies -<i>x</i> &ge; 0, which means <i>x</i> &le; 0. For any non-positive <i>x</i>, the definition of |<i>x</i>| is -<i>x</i>. So |<i>x</i>| = -<i>x</i>. Since <i>y</i> = -<i>x</i>, we have |<i>x</i>|=<i>y</i>. Sufficient."
    },
    {
      "id": 71,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Probability",
      "question_text": "From a group of 5 men and 4 women, a committee of 3 is to be formed. What is the probability that the committee consists of at least one woman?",
      "options": [
        {"option": "A", "text": "<sup>5</sup>/<sub>42</sub>"},
        {"option": "B", "text": "<sup>10</sup>/<sub>84</sub>"},
        {"option": "C", "text": "<sup>37</sup>/<sub>42</sub>"},
        {"option": "D", "text": "<sup>74</sup>/<sub>84</sub>"},
        {"option": "E", "text": "<sup>83</sup>/<sub>84</sub>"}
      ],
      "correct_answer": "C",
      "explanation": "It's easier to calculate the probability of the complementary event (no women on the committee) and subtract it from 1. Total people = 9. Total ways to choose 3 people = C(9,3) = (9&times;8&times;7)/(3&times;2&times;1) = 84. The number of ways to choose a committee with no women (i.e., all men) is C(5,3) = C(5,2) = (5&times;4)/2 = 10. The probability of choosing all men is 10/84. The probability of choosing at least one woman is 1 - (10/84) = 74/84 = 37/42."
    },
    {
      "id": 72,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Triangles",
      "question_text": "The sides of a triangle are in the ratio 3:4:5. If the perimeter of the triangle is 60 cm, what is the length of the longest side?",
      "options": [
        {"option": "A", "text": "5 cm"},
        {"option": "B", "text": "15 cm"},
        {"option": "C", "text": "20 cm"},
        {"option": "D", "text": "25 cm"},
        {"option": "E", "text": "30 cm"}
      ],
      "correct_answer": "D",
      "explanation": "The sum of the ratio parts is 3 + 4 + 5 = 12. The perimeter is 60 cm. The value of one ratio part is 60 / 12 = 5 cm. The sides are 3&times;5=15, 4&times;5=20, and 5&times;5=25. The longest side is 25 cm."
    },
    {
      "id": 73,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Circles",
      "question_text": "What is the circumference of circle C?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "The radius of circle C is 4.",
        "2": "The area of circle C is 16&pi;."
      },
      "correct_answer": "D",
      "explanation": "The circumference formula is C = 2&pi;<i>r</i>. To find the circumference, we need the radius <i>r</i>. Statement (1) directly gives the radius as 4. So, C = 2&pi;(4) = 8&pi;. Sufficient. Statement (2) gives the area as 16&pi;. The area formula is A = &pi;<i>r</i><sup>2</sup>. So, 16&pi; = &pi;<i>r</i><sup>2</sup>, which means <i>r</i><sup>2</sup> = 16, and <i>r</i> = 4. We can then find the circumference. Sufficient. Each statement alone is sufficient."
    },
    {
      "id": 74,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Mean, Median, Mode",
      "question_text": "What is the median of the following set of numbers: 9, 2, 7, 3, 7?",
      "options": [
        {"option": "A", "text": "3"},
        {"option": "B", "text": "5.6"},
        {"option": "C", "text": "7"},
        {"option": "D", "text": "8"},
        {"option": "E", "text": "9"}
      ],
      "correct_answer": "C",
      "explanation": "To find the median, first order the numbers from least to greatest: 2, 3, 7, 7, 9. The median is the middle number in the ordered set. In this case, the middle number is 7."
    },
    {
      "id": 75,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Exponents",
      "question_text": "If 3<sup><i>x</i></sup> - 3<sup><i>x</i>-1</sup> = 162, what is the value of <i>x</i>?",
      "options": [
        {"option": "A", "text": "3"},
        {"option": "B", "text": "4"},
        {"option": "C", "text": "5"},
        {"option": "D", "text": "6"},
        {"option": "E", "text": "7"}
      ],
      "correct_answer": "C",
      "explanation": "Factor out the common term, which is 3<sup><i>x</i>-1</sup>. The equation becomes 3<sup><i>x</i>-1</sup>(3<sup>1</sup> - 1) = 162. This simplifies to 3<sup><i>x</i>-1</sup>(2) = 162. Divide by 2: 3<sup><i>x</i>-1</sup> = 81. Since 81 = 3<sup>4</sup>, we have 3<sup><i>x</i>-1</sup> = 3<sup>4</sup>. Therefore, the exponents must be equal: <i>x</i> - 1 = 4, so <i>x</i> = 5."
    },
    {
      "id": 76,
      "question_type": "Data Sufficiency",
      "difficulty": "Hard",
      "field_of_math": "Number Properties",
      "question_text": "If <i>x</i> is a positive integer, is <i>x</i> a prime number?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i> is a factor of 13.",
        "2": "<i>x</i> + 1 is a prime number."
      },
      "correct_answer": "C",
      "explanation": "Statement (1): The factors of 13 are 1 and 13. A prime number must be greater than 1. If x=1, it is not prime. If x=13, it is prime. Insufficient. Statement (2): If x+1=3 (a prime), then x=2 (a prime). If x+1=5 (a prime), then x=4 (not prime). Insufficient. Combining: From (1), x is 1 or 13. From (2), we test these cases. If x=1, then x+1=2, which is prime. This is a valid case. If x=13, then x+1=14, which is not prime. So this case is invalid. The only possibility is x=1. The question 'is x a prime number?' has a definitive answer: No. Sufficient."
    },
    {
      "id": 77,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Age Problems",
      "question_text": "John is twice as old as Mary. In 5 years, the sum of their ages will be 43. How old is John now?",
      "options": [
        {"option": "A", "text": "11"},
        {"option": "B", "text": "16"},
        {"option": "C", "text": "22"},
        {"option": "D", "text": "28"},
        {"option": "E", "text": "33"}
      ],
      "correct_answer": "C",
      "explanation": "Let John's age be <i>J</i> and Mary's age be <i>M</i>. We are given <i>J</i> = 2<i>M</i>. In 5 years, their ages will be <i>J</i>+5 and <i>M</i>+5. The sum will be (<i>J</i>+5) + (<i>M</i>+5) = 43, which simplifies to <i>J</i> + <i>M</i> + 10 = 43, so <i>J</i> + <i>M</i> = 33. Substitute <i>J</i>=2<i>M</i> into this equation: 2<i>M</i> + <i>M</i> = 33, which means 3<i>M</i> = 33, so <i>M</i> = 11. John's age is <i>J</i> = 2<i>M</i> = 2(11) = 22."
    },
    {
      "id": 78,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Decimals",
      "question_text": "What is 0.25 + 0.50 + 0.75 expressed as a fraction?",
      "options": [
        {"option": "A", "text": "<sup>3</sup>/<sub>2</sub>"},
        {"option": "B", "text": "<sup>5</sup>/<sub>4</sub>"},
        {"option": "C", "text": "<sup>6</sup>/<sub>4</sub>"},
        {"option": "D", "text": "<sup>7</sup>/<sub>4</sub>"},
        {"option": "E", "text": "<sup>3</sup>/<sub>4</sub>"}
      ],
      "correct_answer": "A",
      "explanation": "Sum the decimals: 0.25 + 0.50 + 0.75 = 1.50. To express 1.50 as a fraction, we can write it as 1 and 1/2, which is equal to 3/2."
    },
    {
      "id": 79,
      "question_type": "Data Sufficiency",
      "difficulty": "Easy",
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
        "1": "<i>x</i> = <i>y</i> + 2",
        "2": "<i>x</i>/2 > <i>y</i>/2"
      },
      "correct_answer": "D",
      "explanation": "Statement (1): <i>x</i> = <i>y</i> + 2 means that <i>x</i> is 2 greater than <i>y</i>. This directly tells us that <i>x</i> > <i>y</i>. Sufficient. Statement (2): <i>x</i>/2 > <i>y</i>/2. We can multiply both sides of this inequality by 2 without changing the direction of the inequality sign (since 2 is positive). This gives <i>x</i> > <i>y</i>. Sufficient. Each statement alone is sufficient."
    },
    {
      "id": 80,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Permutations",
      "question_text": "In how many different ways can 5 books be arranged on a shelf if 2 of the books must always stay together?",
      "options": [
        {"option": "A", "text": "24"},
        {"option": "B", "text": "48"},
        {"option": "C", "text": "60"},
        {"option": "D", "text": "120"},
        {"option": "E", "text": "240"}
      ],
      "correct_answer": "B",
      "explanation": "Treat the 2 books that must stay together as a single block. Now we are arranging 4 items (the block and the other 3 books). The number of ways to arrange these 4 items is 4! = 24. Within the block, the 2 books can be arranged in 2! = 2 ways (book A then book B, or book B then book A). The total number of arrangements is the product of these two possibilities: 24 &times; 2 = 48."
    }
];
