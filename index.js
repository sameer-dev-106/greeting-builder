const formatName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const getGreeting = (timeOfDay) => {
  if (timeOfDay === "morning") return "Good morning";
  if (timeOfDay === "afternoon") return "Good afternoon";
  if (timeOfDay === "evening") return "Good evening";
};

const createGreeting = (firstName, lastName, timeOfDay) => {
  const name = formatName(firstName, lastName);
  const greeting = getGreeting(timeOfDay);

  return `${greeting}, ${name}`;
};

console.log(createGreeting("Ava", "Stone", "morning")); // Good morning, Ava Stone
console.log(createGreeting("Noah", "Kim", "evening")); // Good evening, Noah Kim
console.log(createGreeting("Mina", "Patel", "afternoon")); // Good afternoon, Mina Patel
