import React from 'react';


export const People = () => {
    let options = [];
     for(i = 0; i < 20; i++){
              options.push( <option value={i}>{i} people</option>)
            }
    return (
        <div class="custom-people" >
            <select>
                
                {options.forEach(option => option)}
    
                <option value="21">larger than 20</option>

            </select>
        </div>
    )
}

export const Times = () => {
    let options = [];
     for(i = 0; i < 12; i++){
              options.push( <option value={`${i}:00`}>{i}:00</option>)
              options.push( <option value={`${i}:30`}>{i}:00</option>)
            }
    return (
        <div class="custom-times" >
            <select>
                
                {options.forEach(option => option)}
    
                <option value=""></option>

            </select>
            <select name="am/pm" id="">
                <option value='1' >AM</option>
                <option value='2'>PM</option>
            </select>
        </div>
    )
}