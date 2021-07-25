# Calculator

Working example here: https://elelad.github.io/at-calculator/

## Calculation Logic

The calculation works based on those steps:
- Split the equation string based on the operators + or - with regex
- If the equation string contains * or / calculates them first and replace their location in the array with the result
- Now we have only +, - operators and numbers, we can calculate using iteration on the array

For example, the equation string is: `2+3*2-1`
- The split will give us this array: `['2','+','3*2','-','1']`
- In the next step, we will calculate the `3*2` and replace this string in the array with the result.
- Now we have the following array: `['2','+','6','-','1']`
- We iterate on the array and adding or subtracting based on the operator

## Run locally
- Run `npm i`
- If you get any errors try to delete the `package-lock.json` and the `node_modules` and install again. 
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Run unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Deploy
- Run `ng build --output-path docs --base-href /at-calculator/`
- Make a copy of `docs/index.html` and name it `docs/404.html`
