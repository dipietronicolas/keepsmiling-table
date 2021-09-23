# KeepSmiling React challenge

This is a project i've made as a challenge for a job at  [KeepSmiling](https://keepsmiling.com.ar/).

## To run this project

1. Install NodeJs >= v.14 LTS
2. Open a terminal on the root folder and run `npm install` command.
3. Run `npm start` command to run this application on port 3000.

## Dependencies

* [Chakra UI](https://chakra-ui.com/) as a styled component library.
* [Chakra paginator](https://www.npmjs.com/package/chakra-paginator) to handle the table pagination. 
* [Chakra icons](https://chakra-ui.com/docs/media-and-icons/icon) for webpage icons.

***
### dataService 

I've created a dataService simulator to emulate a real fetch to an API. It's in the folder `services`. It has a setTimeout function to delay the fetching proccess as a real fetch would do, and returns a promise. There you can set the reject time shorter to simulate an error in the API. It would be ok, because this applications handles this error, and displays a message to the user. 

```
const dataService = (pageOne, pageTwo) => {
  return (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          patientsList.slice(pageOne, pageTwo), patientsList.length
        ]);
      }, 1500);
      setTimeout(() => {
        reject({
          msg: 'Error',
          statusCode: 500
        });
      }, 2000)
    })
  )
}
```
