/*

vary+Able.js

This file is part of the VaryAble library.
VaryAble is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
VaryAble is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY;

Five think to declare variable 
1. var
2. let
3. const
4. globalThis
5. window

*/


var year = 2026; // Example variable to indicate the year of the code
var variable1 = "I am a var variable"; // Function-scoped or globally-scoped
let variable2 = "I am a let variable"; // Block-scoped
const variable3 = "I am a const variable"; // Block-scoped, cannot be reassigned

globalThis.variable4 = "I am a globalThis variable"; // Globally accessible
window.variable5 = "I am a window variable"; // Browser global object   


console.log(year);
console.log(variable1);
console.log(variable2);
    