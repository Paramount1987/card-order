export function validation(data){
    let valid = true;
    let focused = false;

    for(let key in data){

        if(!data[key].value.length){
            data[key].classList.add('empty');
            if(!focused){
                data[key].focus();
                focused = true;
            }
            if(valid)
                valid = false;
        }
    }

    return valid;
}