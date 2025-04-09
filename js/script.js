// async function fetchJson(url) {
//   const response = await fetch(url);
//   const obj = await response.json();
//   return obj;
// }

// async function getChefBirthday(id) {
//   let ricetta;

//   try {
//     ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`);
//     console.log(ricetta);
//   } catch (error) {
//     throw new Error(`Problemi nel recuperare la ricetta con id ${id}`);
//   }

//   if (ricetta.message) {
//     throw new Error(ricetta.message);
//   }

//   try {
//     let user = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`);
//     console.log(user);
//     return user.birthDate;
//   } catch (error) {
//     throw new Error(`Problemi nel recuperare lo chef con id ${ricetta.userId}`);
//   }
// }

// getChefBirthday(5)
//   .then((birthDay) =>
//     console.log(
//       "Data di nascita dello chef:",
//       dayjs(birthDay).format("DD/MM/YYYY")
//     )
//   )
//   .catch((error) => console.error(error));

async function getChefBirthday(id) {
  const ricettaResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
  const ricetta = await ricettaResponse.json();
  console.log(ricetta);
  const chefResponse = await fetch(
    `https://dummyjson.com/users/${ricetta.userId}`
  );
  const chef = await chefResponse.json();
  console.log(chef.birthDate);
  return chef.birthDate;
}

(async () => {
  try {
    const birthday = await getChefBirthday(3);
    console.log("La data di nascita dello chef è", birthday);
  } catch (error) {
    console.error(error.message);
  }
})();
