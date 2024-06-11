// how to set suffix  before every line you log

// const addPrefixTOEveryLine= (strToAddPrefix)=> {
//     const prefixToAdd="$ ";
//     const splittedStr= strToAddPrefix.split("\n");
//     const mappedListOfStr= splittedStr.map((str)=>{
//         return prefixToAdd + str;
//     });
//     const finalList= mappedListOfStr.join("\n");
//     // console.log(mappedListOfStr);
//     return finalList;
// };

// const strToLog= addPrefixTOEveryLine(`my first line
//     my second line`);

//     console.log(strToLog);

// addPrefixTOEveryLine(`My first line
    // my second line`);


    const addPrefixTOEveryLine= (strToAddPrefix)=> {
        const addPrefixToAdd= "$ ";

        return strToAddPrefix
        .split("\n")
        .map((str)=> addPrefixToAdd+str )
        .join("\n");

    }

    const strToLog= addPrefixTOEveryLine(`my first line
        my second line`);

        console.log(strToLog);