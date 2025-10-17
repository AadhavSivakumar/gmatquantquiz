import type { Question } from '../types';

export const QUESTIONS_PART_6: Question[] = [
    {
      "id": 121,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Probability",
      "question_text": "A drawer contains 5 red socks and 4 blue socks. If two socks are drawn at random without replacement, what is the probability that they are both the same color?",
      "options": [
        {"option": "A", "text": "<sup>1</sup>/<sub>2</sub>"},
        {"option": "B", "text": "<sup>4</sup>/<sub>9</sub>"},
        {"option": "C", "text": "<sup>5</sup>/<sub>9</sub>"},
        {"option": "D", "text": "<sup>16</sup>/<sub>81</sub>"},
        {"option": "E", "text": "<sup>41</sup>/<sub>81</sub>"}
      ],
      "correct_answer": "B",
      "explanation": "The probability of drawing two red socks OR two blue socks. P(Both Red) = P(1st is Red) &times; P(2nd is Red | 1st was Red) = (5/9) &times; (4/8) = 20/72. P(Both Blue) = P(1st is Blue) &times; P(2nd is Blue | 1st was Blue) = (4/9) &times; (3/8) = 12/72. The total probability is the sum of these two probabilities: P(Same Color) = 20/72 + 12/72 = 32/72. Simplifying the fraction by dividing numerator and denominator by 8 gives 4/9."
    },
    {
      "id": 122,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Algebra",
      "question_text": "If <sup>(<i>x</i>+3)</sup>/<sub>2</sub> = 5, what is the value of <i>x</i>?",
      "options": [
        {"option": "A", "text": "1"},
        {"option": "B", "text": "4"},
        {"option": "C", "text": "7"},
        {"option": "D", "text": "8"},
        {"option": "E", "text": "13"}
      ],
      "correct_answer": "C",
      "explanation": "To solve for <i>x</i>, first multiply both sides of the equation by 2: <i>x</i> + 3 = 10. Then, subtract 3 from both sides: <i>x</i> = 7."
    },
    {
      "id": 123,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Exponents",
      "question_text": "Is <i>x</i><sup><i>y</i></sup> > 1?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i> > 1",
        "2": "<i>y</i> > 0"
      },
      "correct_answer": "C",
      "explanation": "Statement (1): <i>x</i> > 1. If <i>y</i> is positive (e.g., <i>y</i>=2), then <i>x<sup>y</sup></i> > 1. If <i>y</i> is negative (e.g., <i>y</i>=-2), then <i>x<sup>y</sup></i> is a fraction between 0 and 1. Insufficient. Statement (2): <i>y</i> > 0. If <i>x</i> > 1 (e.g., <i>x</i>=2), then <i>x<sup>y</sup></i> > 1. If 0 < <i>x</i> < 1 (e.g., <i>x</i>=0.5), then <i>x<sup>y</sup></i> < 1. Insufficient. Combining both: If <i>x</i> > 1 and <i>y</i> > 0, then <i>x<sup>y</sup></i> must be greater than 1. For example, 2<sup>0.5</sup> = &radic;2 > 1. Sufficient."
    },
    {
      "id": 124,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Age Problems",
      "question_text": "Five years ago, Amy was three times as old as Mike. If Amy is now 20 years old, how old is Mike now?",
      "options": [
        {"option": "A", "text": "5"},
        {"option": "B", "text": "8"},
        {"option": "C", "text": "10"},
        {"option": "D", "text": "12"},
        {"option": "E", "text": "15"}
      ],
      "correct_answer": "C",
      "explanation": "If Amy is now 20, then five years ago she was 20 - 5 = 15 years old. Five years ago, Amy was three times as old as Mike. So, Mike's age five years ago was 15 / 3 = 5 years old. Mike's current age is 5 + 5 = 10 years old."
    },
    {
      "id": 125,
      "question_type": "Data Sufficiency",
      "difficulty": "Hard",
      "field_of_math": "Statistics",
      "question_text": "In a set of five distinct positive integers, is the median equal to the mean?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "The five integers form an arithmetic sequence.",
        "2": "The sum of the five integers is 50."
      },
      "correct_answer": "A",
      "explanation": "Statement (1): In any arithmetic sequence (a set of numbers with a constant difference between them), the mean is always equal to the median. Sufficient. Statement (2): The sum is 50, so the mean is 50/5 = 10. The set could be {8, 9, 10, 11, 12}, where the median is 10 and equal to the mean (Yes). Or the set could be {1, 2, 9, 18, 20}, where the median is 9 and not equal to the mean (No). Since we have a 'Yes' case and a 'No' case, this is insufficient."
    },
    {
      "id": 126,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Mixture Problems",
      "question_text": "A 40-liter solution is 25% acid. How many liters of water must be added to reduce the concentration to 20% acid?",
      "options": [
        {"option": "A", "text": "5"},
        {"option": "B", "text": "8"},
        {"option": "C", "text": "10"},
        {"option": "D", "text": "12"},
        {"option": "E", "text": "20"}
      ],
      "correct_answer": "C",
      "explanation": "First, find the amount of pure acid in the solution. Amount of acid = 25% of 40 liters = 0.25 &times; 40 = 10 liters. This amount of acid will not change. Let <i>w</i> be the liters of water added. The new total volume will be 40 + <i>w</i>. We want the new concentration to be 20%. So, (Amount of Acid) / (Total Volume) = 0.20. This gives the equation: 10 / (40 + <i>w</i>) = 0.20. Multiply both sides by (40 + <i>w</i>): 10 = 0.20(40 + <i>w</i>). This simplifies to 10 = 8 + 0.20<i>w</i>. Subtract 8 from both sides: 2 = 0.20<i>w</i>. Divide by 0.20: <i>w</i> = 10 liters."
    },
    {
      "id": 127,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Coordinate Geometry",
      "question_text": "What is the y-intercept of the line that passes through the points (2, 5) and (4, 11)?",
      "options": [
        {"option": "A", "text": "-2"},
        {"option": "B", "text": "-1"},
        {"option": "C", "text": "0"},
        {"option": "D", "text": "1"},
        {"option": "E", "text": "2"}
      ],
      "correct_answer": "B",
      "explanation": "First, find the slope (m) of the line: m = (y<sub>2</sub> - y<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub>) = (11 - 5) / (4 - 2) = 6 / 2 = 3. The equation of the line is <i>y</i> = 3<i>x</i> + <i>c</i>. To find the y-intercept (c), plug in one of the points, for example (2, 5): 5 = 3(2) + <i>c</i>. This gives 5 = 6 + <i>c</i>, so <i>c</i> = -1."
    },
    {
      "id": 128,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Number Properties",
      "question_text": "What is the units digit of the positive integer <i>n</i>?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "The units digit of <i>n</i><sup>4</sup> is 1.",
        "2": "<i>n</i> is an odd integer."
      },
      "correct_answer": "E",
      "explanation": "Statement (1): If the units digit of <i>n</i><sup>4</sup> is 1, the units digit of <i>n</i> could be 1 (1<sup>4</sup>=1), 3 (3<sup>4</sup>=81), 7 (7<sup>4</sup>=2401), or 9 (9<sup>4</sup>=6561). Insufficient. Statement (2): Knowing <i>n</i> is odd means its units digit could be 1, 3, 5, 7, or 9. Insufficient. Combining both: From (1), the units digit could be 1, 3, 7, or 9. From (2), the units digit could be 1, 3, 5, 7, or 9. The overlap is 1, 3, 7, or 9. We still have multiple possibilities. Insufficient."
    },
    {
      "id": 129,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Geometry",
      "question_text": "A rectangle has a length of 12 and a width of 5. What is its perimeter?",
      "options": [
        {"option": "A", "text": "17"},
        {"option": "B", "text": "34"},
        {"option": "C", "text": "60"},
        {"option": "D", "text": "68"},
        {"option": "E", "text": "144"}
      ],
      "correct_answer": "B",
      "explanation": "The formula for the perimeter of a rectangle is P = 2(length + width). P = 2(12 + 5) = 2(17) = 34."
    },
    {
      "id": 130,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Permutations",
      "question_text": "In how many ways can the letters of the word 'LEADER' be arranged such that the two 'E's are never together?",
      "options": [
        {"option": "A", "text": "120"},
        {"option": "B", "text": "240"},
        {"option": "C", "text": "360"},
        {"option": "D", "text": "480"},
        {"option": "E", "text": "600"}
      ],
      "correct_answer": "B",
      "explanation": "First, find the total number of arrangements without any restrictions. The word LEADER has 6 letters, with E repeated twice. Total arrangements = 6! / 2! = 720 / 2 = 360. Now, find the number of arrangements where the two 'E's ARE together. Treat 'EE' as a single block. Now we are arranging 5 items (L, A, D, R, and the 'EE' block). The number of ways is 5! = 120. The number of arrangements where the 'E's are not together is (Total arrangements) - (Arrangements where they are together) = 360 - 120 = 240."
    },
    {
      "id": 131,
      "question_type": "Data Sufficiency",
      "difficulty": "Hard",
      "field_of_math": "Inequalities/Absolute Value",
      "question_text": "Is |<i>x</i> + <i>y</i>| = |<i>x</i>| + |<i>y</i>|?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i> > 0",
        "2": "<i>y</i> < 0"
      },
      "correct_answer": "C",
      "explanation": "The triangle inequality states that |<i>a</i> + <i>b</i>| &le; |<i>a</i>| + |<i>b</i>|. The equality |<i>x</i> + <i>y</i>| = |<i>x</i>| + |<i>y</i>| holds if and only if <i>x</i> and <i>y</i> have the same sign or at least one is zero (i.e., <i>xy</i> &ge; 0). The question is asking 'Is <i>xy</i> &ge; 0?'. Statement (1): <i>x</i> > 0. We don't know the sign of <i>y</i>. If <i>y</i>>0, the answer is Yes. If <i>y</i><0, the answer is No. Insufficient. Statement (2): <i>y</i> < 0. We don't know the sign of <i>x</i>. If <i>x</i><0, the answer is Yes. If <i>x</i>>0, the answer is No. Insufficient. Combining both: We have <i>x</i> > 0 and <i>y</i> < 0. This means <i>xy</i> < 0, so the answer to the question is a definitive 'No'. Sufficient."
    },
    {
      "id": 132,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "3D Geometry",
      "question_text": "Cylinder A has a radius of 2 and a height of 5. Cylinder B has a radius of 4 and a height of 10. What is the ratio of the volume of Cylinder A to the volume of Cylinder B?",
      "options": [
        {"option": "A", "text": "1:2"},
        {"option": "B", "text": "1:4"},
        {"option": "C", "text": "1:8"},
        {"option": "D", "text": "1:10"},
        {"option": "E", "text": "1:20"}
      ],
      "correct_answer": "C",
      "explanation": "Volume of a cylinder is V = &pi;<i>r</i><sup>2</sup><i>h</i>. Volume of A = &pi;(2)<sup>2</sup>(5) = 20&pi;. Volume of B = &pi;(4)<sup>2</sup>(10) = &pi;(16)(10) = 160&pi;. The ratio of the volume of A to B is 20&pi; / 160&pi; = 20/160 = 1/8, or 1:8."
    },
    {
      "id": 133,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Statistics",
      "question_text": "What is the range of the data set {14, 6, 12, 17, 21, 14, 26, 8}?",
      "options": [
        {"option": "A", "text": "12"},
        {"option": "B", "text": "14"},
        {"option": "C", "text": "18"},
        {"option": "D", "text": "20"},
        {"option": "E", "text": "26"}
      ],
      "correct_answer": "D",
      "explanation": "The range is the difference between the highest and lowest values in the set. First, find the maximum and minimum values. The maximum value is 26. The minimum value is 6. The range is 26 - 6 = 20."
    },
    {
      "id": 134,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Algebra",
      "question_text": "What is the value of <i>x</i><sup>2</sup> + 3<i>x</i> - 4?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i> = 1",
        "2": "<i>x</i><sup>2</sup> = 1"
      },
      "correct_answer": "A",
      "explanation": "Statement (1): If <i>x</i>=1, we can directly substitute this value into the expression: (1)<sup>2</sup> + 3(1) - 4 = 1 + 3 - 4 = 0. We get a single value. Sufficient. Statement (2): If <i>x</i><sup>2</sup>=1, then <i>x</i> could be 1 or -1. If <i>x</i>=1, the value is 0. If <i>x</i>=-1, the value is (-1)<sup>2</sup> + 3(-1) - 4 = 1 - 3 - 4 = -6. Since we get two different possible values, this statement is insufficient."
    },
    {
      "id": 135,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Work Rate",
      "question_text": "An inlet pipe can fill a tank in 3 hours. An outlet pipe can empty the same tank in 5 hours. If both pipes are opened when the tank is empty, how many hours will it take to fill the tank?",
      "options": [
        {"option": "A", "text": "4"},
        {"option": "B", "text": "5"},
        {"option": "C", "text": "6.5"},
        {"option": "D", "text": "7.5"},
        {"option": "E", "text": "8"}
      ],
      "correct_answer": "D",
      "explanation": "The rate of the inlet pipe is 1/3 of the tank per hour. The rate of the outlet pipe is -1/5 of the tank per hour (negative because it's emptying). The combined rate is <sup>1</sup>/<sub>3</sub> - <sup>1</sup>/<sub>5</sub>. The common denominator is 15. So, the rate is <sup>5</sup>/<sub>15</sub> - <sup>3</sup>/<sub>15</sub> = <sup>2</sup>/<sub>15</sub> of the tank per hour. The time to fill the tank is the reciprocal of the rate: 1 / (<sup>2</sup>/<sub>15</sub>) = <sup>15</sup>/<sub>2</sub> = 7.5 hours."
    },
    {
      "id": 136,
      "question_type": "Data Sufficiency",
      "difficulty": "Hard",
      "field_of_math": "Geometry",
      "question_text": "In the xy-plane, region R is a circle and region S is a square. Is the area of region S greater than the area of region R?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "The diameter of circle R is equal to the diagonal of square S.",
        "2": "The circumference of circle R is less than the perimeter of square S."
      },
      "correct_answer": "A",
      "explanation": "Let radius of circle be <i>r</i> and side of square be <i>s</i>. Area(R)=&pi;<i>r</i><sup>2</sup>. Area(S)=<i>s</i><sup>2</sup>. Question: Is <i>s</i><sup>2</sup> > &pi;<i>r</i><sup>2</sup>? Statement (1): Diameter = 2<i>r</i>. Diagonal of square = <i>s</i>&radic;2. So, 2<i>r</i> = <i>s</i>&radic;2, which means <i>s</i> = 2<i>r</i>/&radic;2 = <i>r</i>&radic;2. So, Area(S) = (<i>r</i>&radic;2)<sup>2</sup> = 2<i>r</i><sup>2</sup>. The question becomes: Is 2<i>r</i><sup>2</sup> > &pi;<i>r</i><sup>2</sup>? Since <i>r</i>>0, we can divide by <i>r</i><sup>2</sup>. Is 2 > &pi;? Since &pi; is approx 3.14, the answer is a definitive 'No'. Sufficient. Statement (2): Circumference = 2&pi;<i>r</i>. Perimeter = 4<i>s</i>. We are given 2&pi;<i>r</i> < 4<i>s</i>, or &pi;<i>r</i> < 2<i>s</i>. This inequality does not provide a definite answer. For example, if s = 1.6r, s<sup>2</sup>=2.56r<sup>2</sup> which is not greater than &pi;r<sup>2</sup>. If s=2r, s<sup>2</sup>=4r<sup>2</sup> which is greater than &pi;r<sup>2</sup>. Insufficient."
    },
    {
      "id": 137,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Number Properties",
      "question_text": "How many distinct positive factors does the number 360 have?",
      "options": [
        {"option": "A", "text": "12"},
        {"option": "B", "text": "18"},
        {"option": "C", "text": "20"},
        {"option": "D", "text": "24"},
        {"option": "E", "text": "30"}
      ],
      "correct_answer": "D",
      "explanation": "First, find the prime factorization of 360. 360 = 36 &times; 10 = (6 &times; 6) &times; (2 &times; 5) = (2 &times; 3 &times; 2 &times; 3) &times; (2 &times; 5) = 2<sup>3</sup> &times; 3<sup>2</sup> &times; 5<sup>1</sup>. To find the number of distinct factors, add 1 to each exponent in the prime factorization and multiply the results. Number of factors = (3+1) &times; (2+1) &times; (1+1) = 4 &times; 3 &times; 2 = 24."
    },
    {
      "id": 138,
      "question_type": "Data Sufficiency",
      "difficulty": "Easy",
      "field_of_math": "Percentages",
      "question_text": "What was the percent profit on a certain item?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "The item was sold for $120.",
        "2": "The cost of the item was $100."
      },
      "correct_answer": "C",
      "explanation": "Percent profit is calculated as ((Selling Price - Cost) / Cost) &times; 100. To calculate this, we need both the selling price and the cost. Statement (1) gives the selling price but not the cost. Insufficient. Statement (2) gives the cost but not the selling price. Insufficient. Combining both: We have the selling price ($120) and the cost ($100). We can calculate the percent profit: (($120 - $100) / $100) &times; 100 = ($20 / $100) &times; 100 = 20%. Sufficient."
    },
    {
      "id": 139,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Sequences",
      "question_text": "In an arithmetic sequence, the 5th term is 18 and the 10th term is 38. What is the first term?",
      "options": [
        {"option": "A", "text": "-2"},
        {"option": "B", "text": "2"},
        {"option": "C", "text": "4"},
        {"option": "D", "text": "6"},
        {"option": "E", "text": "14"}
      ],
      "correct_answer": "B",
      "explanation": "Let the first term be <i>a</i> and the common difference be <i>d</i>. The nth term is given by <i>a<sub>n</sub></i> = <i>a</i> + (n-1)<i>d</i>. We have: a<sub>5</sub> = <i>a</i> + 4<i>d</i> = 18 and a<sub>10</sub> = <i>a</i> + 9<i>d</i> = 38. Subtract the first equation from the second: (<i>a</i> + 9<i>d</i>) - (<i>a</i> + 4<i>d</i>) = 38 - 18. This gives 5<i>d</i> = 20, so <i>d</i> = 4. Substitute <i>d</i>=4 into the first equation: <i>a</i> + 4(4) = 18, which is <i>a</i> + 16 = 18. So, <i>a</i> = 2."
    },
    {
      "id": 140,
      "question_type": "Data Sufficiency",
      "difficulty": "Hard",
      "field_of_math": "Logic",
      "question_text": "A group of 24 people consists of men, women, and children. How many women are in the group?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "The number of children is half the number of men.",
        "2": "The number of women is three times the number of children."
      },
      "correct_answer": "C",
      "explanation": "Let M, W, and C be the number of men, women, and children. We are given M + W + C = 24. Statement (1) gives M = 2C. Insufficient. Statement (2) gives W = 3C. Insufficient. Combining both statements, we can substitute into the main equation: 2C + 3C + C = 24. This simplifies to 6C = 24, so C = 4. With C, we can find W = 3 * 4 = 12. We have found a unique value for the number of women. Sufficient."
    }
];