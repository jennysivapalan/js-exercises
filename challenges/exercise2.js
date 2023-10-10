export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	const squareNums = [];
	for(let i = 0; i < nums.length; i++) {
		squareNums.push(Math.pow(nums[i], 2));
	}
	return squareNums;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	const camelCaseWord = [];
	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if(i == 0) camelCaseWord.push(word);
		else {
			camelCaseWord.push(word[0].toUpperCase() + word.substring(1));
		}
	}
	return camelCaseWord.join('');
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	let numberOfSubjects = 0;
	for(let i =0; i < people.length; i++) {
		numberOfSubjects += people[i].subjects.length;
	}
	return numberOfSubjects;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
}
