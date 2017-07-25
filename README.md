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

# How long did this take.

This took me about an hour and a half. The reason behind this was the tedious process of just typing the code out and routes. Additionally, I had forgoten the specific sytanx of `Array.Prototype.sort()` compare functions as well as the RxJS `groupBy()` function. I have used them in the past but in their more simple forms. 

# I learned

I re-learned the custom compare function. I think what I did could be improved since it only really handles numbers and strings, but I did get to exapand on the basic `sort()` and `reverse()` functions. 
