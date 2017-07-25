# What I did
* Started with a `yarn install` for the dependecies
* Booted up application with `npm run start`
* Created Model as a class for the data
* Created a service using rxjs Observable to get the data from the data.json file
* Created a new page called detail and updated module and routes file accordingly
* Added bootstrap for styles with nice list (http://valor-software.com/ngx-bootstrap/#/)
* Made call to service in component
* Saved data to session `this.data` with type `<DataModel[]>`
* Ng for added on tr to display data
* Click function to sort with col name added to template
* Sort function created with custom comparetor for Array.Prototype.sort() to handle string or number
* Reverse added using the `this.sortDir` var
* Copied code for home to detail to resuse componets
* Added var for grouped data called `groupedData`
* Used RXjs groupBy to group items by name
* Created a function `addCategoryAmounts()` to take in row of items grouped by name and calcuate the amount by category
* Updated template to display the name of the first object in the group by and called the functions to get the amounts for that category
