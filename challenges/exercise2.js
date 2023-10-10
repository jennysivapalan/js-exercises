export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	return nums.map(number => Math.pow(number, 2));
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
	for( let i = 0; i < menu.length; i++) {
		if(menu[i].ingredients.includes(ingredient)) return true;
	}
	return false;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	const duplicateNumbers = [];
	arr1.forEach(element => {
		if(arr2.includes(element)) duplicateNumbers.push(element);
	});
	return [...new Set(duplicateNumbers.sort())];
}
