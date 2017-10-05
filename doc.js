// Challenge 1
// Take the code below, and add a feed function that modifies foodLevel accordingly.

export let wolf = {
  foodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return 'You got eaten!';
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
};

// Challenge 2
// You will get an array of integers. You should return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// Try not to use a brute force approach... If you no idea what I'm talking about, disregard.

// Challenge 3
// Given two (dic­tio­nary) words as Strings, deter­mine if the following applies. Verify if the let­ters in one word can be remapped to get the sec­ond word. Remap­ping a let­ter means replac­ing all occur­rences of it with another let­ter while the order­ing of the let­ters remains unchanged. No two let­ters may map to the same let­ter, but a let­ter may map to itself. if the let­ters in one word can be remapped to get the sec­ond word. Remap­ping a let­ter means replac­ing all occur­rences of it with another let­ter while the order­ing of the let­ters remains unchanged. No two let­ters may map to the same let­ter, but a let­ter may map to itself.
// Examples:
//"foo", "app"; returns true
//"bar", "foo"; returns false
//"turtle", "tletur"; returns true
//"ab", "ca"; returns true
