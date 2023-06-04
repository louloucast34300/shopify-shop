// export const parserData = (formData: FormData) => {

//     //le body
//     const body: { [key: string]: string } = {};
  
//     // itération sur toutes les entrées du formData
//     const entries = formData.entries();
//     // pour récupérer la première itération
//     let next = entries.next();
//     while (!next.done) {
//       const [name, value] = next.value;
//       body[name] = value as string;
//       // pour récupérer l'itération suivante...
//       next = entries.next();
//     }
  
//     return body;
//   };