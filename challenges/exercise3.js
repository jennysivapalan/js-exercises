export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	const numsLessThan1 = [];
	for(let i =0; i < nums.length; i++) {
		if (nums[i] < 1) numsLessThan1.push(nums[i]);
	}
	return numsLessThan1
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	const namesStartingWithChar = []
	for(let i = 0; i < names.length; i++) {
		if (names[i].startsWith(char)) namesStartingWithChar.push(names[i]);
	}
	return namesStartingWithChar;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	const verbWords = [];
	for(let i = 0; i < words.length; i++) {
		if (words[i].startsWith('to ')) verbWords.push(words[i]);
	}
	return verbWords;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	const integerNumbers = [];
	for(let i = 0; i < nums.length; i++) {
		if(Number.isInteger(nums[i])) integerNumbers.push(nums[i]);
	}
	return integerNumbers;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	const cities = [];
	for(let i = 0; i < users.length; i++) {
		cities.push(users[i].data.city.displayName)
	}
	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
}
